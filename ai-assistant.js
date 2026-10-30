/* ==========================================================================
   红色文化 AI 助手 · ai-assistant.js
   --------------------------------------------------------------------------
   · UI：深色玻璃 + 猩红高光，与 theme-dark.css 设计语言一致
   · 能力：DeepSeek Chat Completions（流式输出）、多轮上下文、快捷问题
   · 兜底：接口不可用时自动切换到本地红色文化知识库，保证展示不空场
   · 用法：在页面引入 ai-assistant.css / ai-assistant.js 即可，自动挂载
   ========================================================================== */
(function () {
    'use strict';

    if (window.__rmAIAssistantLoaded) { return; }
    window.__rmAIAssistantLoaded = true;

    /* ============================== 配置 ============================== */
    // DeepSeek API Key（展示用；如更换密钥，只改这一行）
    var API_KEY = 'sk-6673182ee8dd4eec977c1ee90520a1bd';
    var API_URL = 'https://api.deepseek.com/v1/chat/completions';
    var MODEL = 'deepseek-chat';

    var SYSTEM_PROMPT = [
        '你是“京津冀红色文化数字博物馆”的 AI 学习助手，服务对象是中学生、大学生和红色文化爱好者。',
        '回答要求：',
        '1. 只围绕京津冀红色历史、革命遗址、英雄人物、红色精神及相关研学问题作答；与主题无关时，礼貌说明并把话题引回红色文化。',
        '2. 内容准确，尊重史实，不编造时间、人物和数字；不确定时明确说明。',
        '3. 结构清晰：先用一句话给出结论，再用 2-4 个要点展开，必要时给参观或学习建议。',
        '4. 语言生动、有感染力，但不煽情、不空泛；篇幅控制在 250-400 字。',
        '5. 使用简体中文，可用小标题、列表和加粗，不要使用 Markdown 表格。'
    ].join('\n');

    var IDLE_STATUS = '京津冀红色文化 · 随时提问';
    var MAX_HISTORY = 12;

    var QUICK_QUESTIONS = [
        { icon: 'fa-landmark', text: '西柏坡为什么被称为“新中国从这里走来”？' },
        { icon: 'fa-mountain-sun', text: '讲一讲狼牙山五壮士的故事' },
        { icon: 'fa-flag', text: '三大战役是哪三场？平津战役的关键节点？' },
        { icon: 'fa-map-location-dot', text: '推荐一条京津冀红色研学路线' }
    ];

    /* ============================== 状态 ============================== */
    var messagesEl = null;
    var inputEl = null;
    var sendBtn = null;
    var winEl = null;
    var statusEl = null;
    var statusDotEl = null;
    var expandBtn = null;

    var chatHistory = [];
    var isSending = false;
    var currentController = null;
    var sessionToken = 0;
    var isExpanded = false;

    /* ============================== 工具函数 ============================== */
    function escapeHtml(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[ch];
        });
    }

    function inlineFormat(text) {
        return text
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    }

    // 轻量 Markdown：加粗、行内代码、小标题、有序 / 无序列表
    function renderRichText(text) {
        var lines = String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n');
        var html = '';
        var listType = null;

        function closeList() {
            if (listType) {
                html += '</' + listType + '>';
                listType = null;
            }
        }

        for (var i = 0; i < lines.length; i++) {
            var raw = lines[i];
            var line = raw.trim();
            var match;

            if (!line) {
                closeList();
                continue;
            }

            match = line.match(/^[-•*·]\s+(.*)$/);
            if (match) {
                if (listType !== 'ul') {
                    closeList();
                    html += '<ul>';
                    listType = 'ul';
                }
                html += '<li>' + inlineFormat(escapeHtml(match[1])) + '</li>';
                continue;
            }

            match = line.match(/^\d{1,2}[.、)）]\s*(.*)$/);
            if (match) {
                if (listType !== 'ol') {
                    closeList();
                    html += '<ol>';
                    listType = 'ol';
                }
                html += '<li>' + inlineFormat(escapeHtml(match[1])) + '</li>';
                continue;
            }

            closeList();

            match = line.match(/^#{1,4}\s+(.*)$/);
            if (match) {
                html += '<p class="rm-ai__bubble-h">' + inlineFormat(escapeHtml(match[1])) + '</p>';
                continue;
            }

            html += '<p>' + inlineFormat(escapeHtml(line)) + '</p>';
        }

        closeList();
        return html;
    }

    function nearBottom() {
        if (!messagesEl) { return true; }
        return messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight < 140;
    }

    function scrollToBottom(force) {
        if (!messagesEl) { return; }
        if (force || nearBottom()) {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    }

    function setStatus(text, busy) {
        if (statusEl) { statusEl.textContent = text; }
        if (statusDotEl) { statusDotEl.classList.toggle('is-busy', !!busy); }
    }

    function updateComposerState(busy) {
        if (sendBtn) { sendBtn.disabled = !!busy; }
    }

    function autoGrow() {
        if (!inputEl) { return; }
        inputEl.style.height = 'auto';
        inputEl.style.height = Math.min(inputEl.scrollHeight || 24, 108) + 'px';
    }

    function trimHistory() {
        if (chatHistory.length <= MAX_HISTORY) { return; }
        chatHistory = chatHistory.slice(chatHistory.length - MAX_HISTORY);
        // 保证首条是用户消息，避免上下文错位
        while (chatHistory.length && chatHistory[0].role !== 'user') {
            chatHistory.shift();
        }
    }

    /* ============================== 本地知识库 ============================== */
    var KNOWLEDGE = [
        {
            keys: ['西柏坡精神', '赶考精神', '两个务必'],
            answer: '西柏坡精神的核心，是毛泽东在七届二中全会上提出的“两个务必”：务必使同志们继续地保持谦虚、谨慎、不骄、不躁的作风，务必使同志们继续地保持艰苦奋斗的作风。\n\n1949年3月，中共中央从西柏坡动身前往北平，毛泽东称之为“进京赶考”。今天，“赶考”已成为中国共产党人保持清醒、接续奋斗的精神象征。'
        },
        {
            keys: ['西柏坡'],
            answer: '西柏坡位于河北省石家庄市平山县，是解放战争后期中共中央所在地，被称为“新中国从这里走来”。\n\n**关键节点**\n- 1948年5月，毛泽东率中共中央机关移驻西柏坡。\n- 在这里指挥了辽沈、淮海、平津三大战役。\n- 1949年3月召开党的七届二中全会，毛泽东提出“两个务必”：务必使同志们继续地保持谦虚、谨慎、不骄、不躁的作风，务必使同志们继续地保持艰苦奋斗的作风。\n\n**参观建议**：重点看中共中央旧址、七届二中全会旧址和西柏坡纪念馆基本陈列。'
        },
        {
            keys: ['狼牙山', '五壮士'],
            answer: '1941年9月，日军对晋察冀边区发动大“扫荡”。八路军晋察冀军区第一军分区一团七连六班战士马宝玉、葛振林、宋学义、胡德林、胡福才，为掩护群众和主力转移，将敌人引上河北易县狼牙山棋盘陀峰顶。弹尽之后，他们砸毁枪支、纵身跳崖。葛振林、宋学义被山腰树枝挂住幸存，另外三人壮烈牺牲。\n\n“狼牙山五壮士”展现了宁死不屈、血战到底的民族气节，是河北红色文化的重要精神标识。'
        },
        {
            keys: ['三大战役', '辽沈', '淮海'],
            answer: '解放战争三大战役是 **辽沈、淮海、平津** 三大战役（1948年9月至1949年1月）：\n- **辽沈战役**：东北野战军发起，解放东北全境。\n- **淮海战役**：华东、中原野战军联合作战，为渡江作战奠定基础。\n- **平津战役**：东北野战军与华北军区部队联合发起，1949年1月31日北平和平解放。\n\n三大战役共歼灭和改编国民党军队150多万人，是解放战争具有决定意义的决战。'
        },
        {
            keys: ['平津战役', '北平和平解放', '天津战役'],
            answer: '平津战役于1948年11月29日打响，1949年1月31日结束，由东北野战军和华北军区部队联合发起。\n\n**关键节点**\n- 先攻克新保安、张家口，切断傅作义集团西逃退路。\n- 1949年1月15日攻克天津，俘获守军指挥官陈长捷。\n- 经谈判，北平守军接受和平改编，1月31日北平和平解放，古都文物与城市免遭战火。\n\n天津的平津战役纪念馆、北京香山革命纪念馆都有相关展陈，可与西柏坡纪念馆串成一条“解放战争”主题线路。'
        },
        {
            keys: ['延安', '延安精神'],
            answer: '延安是1935年至1948年中共中央所在地，是中国革命的指导中心和战略总后方。\n\n**延安精神**：坚定正确的政治方向，解放思想、实事求是的思想路线，全心全意为人民服务的根本宗旨，自力更生、艰苦奋斗的创业精神。\n\n可在本馆“虚拟展厅”中进入延安革命纪念馆，重点了解杨家岭、枣园、王家坪等革命旧址，以及党的七大召开的历史背景。'
        },
        {
            keys: ['李大钊'],
            answer: '李大钊（1889—1927），河北乐亭人，中国最早的马克思主义传播者、中国共产党主要创始人之一。1918年任北京大学图书馆主任，参与领导五四运动；1927年4月在北京英勇就义，年仅38岁。\n\n北京李大钊故居、河北乐亭李大钊纪念馆都是重要纪念地，可结合北大红楼一起参观学习。'
        },
        {
            keys: ['冉庄', '地道战'],
            answer: '冉庄地道战遗址位于河北保定清苑区冉庄，是抗日战争时期冀中平原军民创造的地下作战体系。地道户户相连、村村相通，配合地面工事、射击孔、翻板等设施，形成能打能藏、可攻可守的“地下长城”。\n\n1965年电影《地道战》让冉庄家喻户晓，遗址现为全国重点文物保护单位和爱国主义教育基地。'
        },
        {
            keys: ['红楼', '五四', '陈独秀'],
            answer: '北大红楼位于北京市东城区五四大街29号，1918年落成，是北京大学老校舍。1919年五四运动在此酝酿，李大钊、陈独秀、毛泽东等都曾在此活动。\n\n楼内设有“光辉伟业 红色序章”主题展览，是北京红色旅游的起点之一，与香山革命纪念馆可串成“建党—进京赶考”主题线路。'
        },
        {
            keys: ['香山', '赶考', '进京'],
            answer: '香山革命纪念馆位于北京海淀区香山脚下，2019年开放，系统展示1949年3月中共中央从西柏坡进京“赶考”、进驻香山、筹建新中国的历史。\n\n**重点展陈**：《为新中国奠基——中共中央在香山》基本陈列。\n\n1949年3月25日，中共中央机关和毛泽东进驻香山；在这里指挥渡江战役、筹备新政协、确定国旗国歌，9月移居中南海。香山因此被称为“进京赶考”第一站。'
        },
        {
            keys: ['卢沟桥', '七七事变', '抗日战争纪念馆', '宛平'],
            answer: '1937年7月7日，日军在北平西南卢沟桥附近挑起事端，制造“七七事变”，中国全民族抗战由此爆发。\n\n中国人民抗日战争纪念馆位于卢沟桥畔宛平城内，基本陈列《伟大胜利 历史贡献》全面展示14年抗战历程。卢沟桥、宛平城墙上的弹痕，是那段历史最直接的见证。'
        },
        {
            keys: ['周恩来', '邓颖超', '觉悟社'],
            answer: '周恩来邓颖超纪念馆位于天津水上公园旁，是全国唯一一家以两位伟人合称为主题的纪念馆。\n\n天津也是周恩来、邓颖超革命生涯的重要起点：1919年，他们参与创办“觉悟社”，在五四运动中传播新思想。馆内陈列与觉悟社旧址，可串联成天津“觉醒年代”主题线路。'
        },
        {
            keys: ['白洋淀', '雁翎队', '小兵张嘎', '嘎子'],
            answer: '白洋淀位于河北雄安新区，是华北最大的淡水湖。抗日战争时期，当地渔民组成“雁翎队”，凭借芦苇荡和水网伏击日军运输船，被誉为“水上神兵”。\n\n作家徐光耀以白洋淀抗战为背景创作了《小兵张嘎》，让“嘎子”成为几代人的红色记忆。白洋淀雁翎队纪念馆现为重要爱国主义教育基地。'
        },
        {
            keys: ['董存瑞'],
            answer: '董存瑞（1929—1948），河北怀来人。1948年5月25日，在解放隆化的战斗中，他担任爆破组长，为炸毁敌军桥型暗堡，毅然用身体做支架托起炸药包，高喊“为了新中国，前进！”壮烈牺牲，年仅19岁。\n\n董存瑞舍身炸碉堡的故事，是解放战争时期革命英雄主义的经典写照。'
        },
        {
            keys: ['晋察冀', '白求恩', '边区'],
            answer: '晋察冀抗日根据地是八路军在敌后创建的第一个抗日根据地，地跨河北、山西、察哈尔、热河等地，被誉为“敌后模范的抗日根据地”。\n\n国际主义战士白求恩在晋察冀军区从事医疗工作，1939年因手术感染牺牲。河北阜平的晋察冀边区革命纪念馆、白求恩柯棣华纪念馆，记录了这段历史。'
        },
        {
            keys: ['抗日战争', '抗战', '十四年抗战'],
            answer: '京津冀地区是抗日战争的重要战场：1937年七七事变在卢沟桥爆发，全民族抗战开始；八路军挺进敌后，创建晋察冀、冀中等根据地；白洋淀雁翎队、冉庄地道战、狼牙山五壮士等故事都发生在这片土地。\n\n可以把卢沟桥、冉庄、狼牙山、白洋淀串成一条“抗战烽火”研学线。'
        },
        {
            keys: ['开国大典', '新中国成立', '天安门'],
            answer: '1949年10月1日，开国大典在北京天安门广场举行，毛泽东庄严宣告中华人民共和国中央人民政府成立。\n\n此前，中共中央在香山完成筹建新中国的各项准备；天安门广场的人民英雄纪念碑，则纪念着近代以来为国牺牲的人民英雄。北京因此成为“建党—抗战—建国”红色线路的核心。'
        },
        {
            keys: ['研学', '路线', '线路', '旅游', '参观'],
            answer: '推荐一条 **5 天京津冀红色研学线路**：\n1. **北京**：北大红楼（五四运动策源地）→ 香山革命纪念馆（中共中央进京“赶考”第一站）。\n2. **天津**：周恩来邓颖超纪念馆 → 平津战役纪念馆。\n3. **河北**：西柏坡（“新中国从这里走来”）→ 狼牙山（五壮士）→ 冉庄地道战遗址。\n\n线路串起“建党—抗战—解放”三个历史阶段，既看历史现场，也读精神谱系；可把本馆“红色地图”作为行前导览。'
        },
        {
            keys: ['京津冀', '红色文化', '红色历史', '红色资源', '红色精神'],
            answer: '京津冀是一片红色热土：北京见证建党早期活动与新中国成立，天津是平津战役的重要战场，河北则留下了西柏坡、狼牙山、冉庄地道战等大量革命遗址。\n\n**一条主线**：从北大红楼的马克思主义传播，到抗日烽火中的敌后战场，再到西柏坡指挥三大战役、进京“赶考”。\n\n想深入了解，可以点击页面中的“红色地图”，选择北京、天津或河北，查看各地红色档案。'
        },
        {
            keys: ['你好', '你是谁', '介绍', '能做什么', '怎么用'],
            answer: '你好！我是京津冀红色文化 AI 助手。\n\n我可以陪你聊红色历史、革命遗址、英雄人物和研学路线。试试问我：\n- 西柏坡为什么被称为“新中国从这里走来”？\n- 狼牙山五壮士的故事\n- 三大战役与平津战役\n- 推荐一条京津冀红色研学路线'
        }
    ];

    var GENERIC_ANSWER = '这个问题我暂时没有找到对应资料。\n\n你可以试试：\n- 西柏坡为什么被称为“新中国从这里走来”？\n- 狼牙山五壮士的故事\n- 三大战役与平津战役\n\n也可以到“红色地图”里点开京津冀，查看各地的红色档案。';

    function localAnswer(question) {
        for (var i = 0; i < KNOWLEDGE.length; i++) {
            var item = KNOWLEDGE[i];
            for (var j = 0; j < item.keys.length; j++) {
                if (question.indexOf(item.keys[j]) !== -1) {
                    return item.answer;
                }
            }
        }
        return null;
    }

    /* ============================== 消息渲染 ============================== */
    function renderWelcome() {
        if (!messagesEl) { return; }
        var chips = QUICK_QUESTIONS.map(function (item) {
            return '<button type="button" class="rm-ai__chip" data-q="' + escapeHtml(item.text) + '">' +
                '<i class="fa-solid ' + item.icon + '"></i><span>' + escapeHtml(item.text) + '</span></button>';
        }).join('');

        messagesEl.innerHTML =
            '<div class="rm-ai__welcome">' +
                '<div class="rm-ai__welcome-orb"><i class="fa-solid fa-wand-magic-sparkles"></i></div>' +
                '<h4>你好，我是你的红色文化 AI 助手</h4>' +
                '<p>京津冀的革命历史、红色遗址、英雄人物、研学路线，都可以问我。</p>' +
                '<div class="rm-ai__chips">' + chips + '</div>' +
            '</div>';
        messagesEl.scrollTop = 0;
    }

    function appendUserMessage(text) {
        var row = document.createElement('div');
        row.className = 'rm-ai__msg rm-ai__msg--user';

        var bubble = document.createElement('div');
        bubble.className = 'rm-ai__bubble';
        bubble.textContent = text;

        row.appendChild(bubble);
        messagesEl.appendChild(row);
        scrollToBottom(true);
    }

    function appendAIMessage(text, tag, typing) {
        var row = document.createElement('div');
        row.className = 'rm-ai__msg rm-ai__msg--ai';
        row.innerHTML =
            '<div class="rm-ai__msg-avatar"><i class="fa-solid fa-robot"></i></div>' +
            '<div class="rm-ai__msg-body">' +
                '<div class="rm-ai__meta"><span>红色文化助手</span><span class="rm-ai__tag"></span></div>' +
                '<div class="rm-ai__bubble"></div>' +
            '</div>';

        var bubble = row.querySelector('.rm-ai__bubble');
        var tagEl = row.querySelector('.rm-ai__tag');
        tagEl.textContent = tag || 'AI';

        if (typing) {
            bubble.classList.add('is-typing');
            bubble.innerHTML = '<span class="rm-ai__dot"></span><span class="rm-ai__dot"></span><span class="rm-ai__dot"></span>';
        } else {
            bubble.innerHTML = renderRichText(text);
        }

        messagesEl.appendChild(row);
        scrollToBottom(true);

        return {
            render: function (full) {
                bubble.classList.remove('is-typing');
                if (tagEl.textContent === '思考中') { tagEl.textContent = 'DeepSeek'; }
                var stick = nearBottom();
                bubble.innerHTML = renderRichText(full) + '<span class="rm-ai__cursor"></span>';
                if (stick) { messagesEl.scrollTop = messagesEl.scrollHeight; }
            },
            finish: function (full, newTag) {
                if (newTag) { tagEl.textContent = newTag; }
                bubble.classList.remove('is-typing');
                bubble.innerHTML = renderRichText(full);
                scrollToBottom(true);
            },
            remove: function () {
                if (row.parentNode) { row.parentNode.removeChild(row); }
            }
        };
    }

    /* ============================== API 调用 ============================== */
    function parseSSELine(line, onDelta) {
        line = line.trim();
        if (line.indexOf('data:') !== 0) { return; }
        var data = line.slice(5).trim();
        if (!data || data === '[DONE]') { return; }
        try {
            var json = JSON.parse(data);
            var delta = json.choices && json.choices[0] && json.choices[0].delta &&
                json.choices[0].delta.content;
            if (delta) { onDelta(delta); }
        } catch (err) {
            /* 忽略 keep-alive 等非 JSON 行 */
        }
    }

    async function requestDeepSeek(onDelta) {
        if (!API_KEY) { throw new Error('缺少 API Key'); }

        var controller = new AbortController();
        currentController = controller;

        var messages = [{ role: 'system', content: SYSTEM_PROMPT }].concat(chatHistory.slice(-10));

        var response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY
            },
            body: JSON.stringify({
                model: MODEL,
                messages: messages,
                temperature: 0.6,
                max_tokens: 900,
                stream: true
            }),
            signal: controller.signal
        });

        if (!response.ok) {
            var detail = '';
            try { detail = await response.text(); } catch (err) { detail = ''; }
            var httpError = new Error('HTTP ' + response.status);
            httpError.status = response.status;
            httpError.detail = detail.slice(0, 400);
            throw httpError;
        }

        var contentType = response.headers.get('content-type') || '';

        if (!response.body || !response.body.getReader || contentType.indexOf('text/event-stream') === -1) {
            var json = await response.json();
            var content = json && json.choices && json.choices[0] &&
                json.choices[0].message && json.choices[0].message.content;
            if (!content) { throw new Error('返回内容为空'); }
            onDelta(content);
            return;
        }

        var reader = response.body.getReader();
        var decoder = new TextDecoder('utf-8');
        var buffer = '';

        while (true) {
            var chunk = await reader.read();
            if (chunk.done) { break; }
            buffer += decoder.decode(chunk.value, { stream: true });

            var lines = buffer.split('\n');
            buffer = lines.pop();

            for (var i = 0; i < lines.length; i++) {
                parseSSELine(lines[i], onDelta);
            }
        }

        buffer += decoder.decode();
        if (buffer) { parseSSELine(buffer, onDelta); }
    }

    /* ============================== 发送流程 ============================== */
    async function sendQuestion(rawQuestion) {
        var question = String(rawQuestion == null ? '' : rawQuestion).trim();
        if (!question || isSending) { return; }
        if (question.length > 500) { question = question.slice(0, 500); }

        var mySession = sessionToken;
        isSending = true;
        updateComposerState(true);
        setStatus('正在思考…', true);

        appendUserMessage(question);
        chatHistory.push({ role: 'user', content: question });
        trimHistory();

        var ctx = appendAIMessage('', '思考中', true);

        try {
            var full = '';
            await requestDeepSeek(function (delta) {
                if (mySession !== sessionToken) { return; }
                full += delta;
                ctx.render(full);
            });

            if (!full.trim()) { throw new Error('返回内容为空'); }

            if (mySession !== sessionToken) { return; }

            ctx.finish(full, 'DeepSeek');
            chatHistory.push({ role: 'assistant', content: full });
            trimHistory();
        } catch (err) {
            if (err && (err.name === 'AbortError' || err.code === 20)) {
                ctx.remove();
                return;
            }
            if (mySession !== sessionToken) { return; }

            console.warn('[AI] DeepSeek 暂不可用，已切换到本地知识库：',
                err && (err.message || err), err && err.detail ? err.detail : '');

            var fallback = localAnswer(question);
            var answer = fallback || GENERIC_ANSWER;
            ctx.finish(answer, fallback ? '本地知识库' : '学习提示');

            chatHistory.push({ role: 'assistant', content: answer });
            trimHistory();
        } finally {
            if (mySession === sessionToken) {
                isSending = false;
                currentController = null;
                updateComposerState(false);
                setStatus(IDLE_STATUS, false);
                scrollToBottom(true);
                if (winEl && !winEl.hidden && inputEl) {
                    try { inputEl.focus({ preventScroll: true }); } catch (e) { inputEl.focus(); }
                }
            }
        }
    }

    function sendToDeepSeek() {
        if (!inputEl || isSending) { return; }
        var question = inputEl.value.trim();
        if (!question) {
            inputEl.focus();
            return;
        }
        inputEl.value = '';
        autoGrow();
        sendQuestion(question);
    }

    /* ============================== 交互 ============================== */
    function toggleAIChat() {
        var root = document.getElementById('ai-assistant');
        var fab = root ? root.querySelector('.rm-ai__fab') : null;
        if (!winEl) { return; }

        if (winEl.hidden) {
            winEl.hidden = false;
            if (root) {
                root.classList.add('rm-ai--chat-open');
                root.classList.add('rm-ai--opened');
            }
            if (fab) { fab.setAttribute('aria-expanded', 'true'); }

            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    winEl.classList.add('is-open');
                });
            });

            setTimeout(function () {
                if (!winEl.hidden) {
                    scrollToBottom(true);
                    if (inputEl) {
                        try { inputEl.focus({ preventScroll: true }); } catch (e) { inputEl.focus(); }
                    }
                    autoGrow();
                }
            }, 130);
        } else {
            winEl.classList.remove('is-open');
            if (root) { root.classList.remove('rm-ai--chat-open'); }
            if (fab) { fab.setAttribute('aria-expanded', 'false'); }

            setTimeout(function () {
                if (!winEl.classList.contains('is-open')) { winEl.hidden = true; }
            }, 240);
        }
    }

    function toggleAIChatSize() {
        var root = document.getElementById('ai-assistant');
        if (!root) { return; }
        isExpanded = !isExpanded;
        root.classList.toggle('rm-ai--expanded', isExpanded);
        if (expandBtn) { expandBtn.textContent = isExpanded ? '还原' : '放大'; }
        setTimeout(function () { scrollToBottom(true); }, 280);
    }

    function clearAIChat() {
        sessionToken += 1;
        if (currentController) {
            try { currentController.abort(); } catch (err) { /* ignore */ }
            currentController = null;
        }
        isSending = false;
        chatHistory = [];
        updateComposerState(false);
        setStatus(IDLE_STATUS, false);
        renderWelcome();
        if (inputEl && winEl && !winEl.hidden) {
            try { inputEl.focus({ preventScroll: true }); } catch (e) { inputEl.focus(); }
        }
    }

    /* ============================== 挂载 ============================== */
    function addAIAssistant() {
        if (document.getElementById('ai-assistant')) { return; }

        var html =
            '<div id="ai-assistant" class="rm-ai">' +
                '<button type="button" class="rm-ai__fab" onclick="toggleAIChat()" ' +
                    'aria-label="打开红色文化 AI 助手" aria-expanded="false" aria-controls="ai-chat-window">' +
                    '<span class="rm-ai__fab-icon"><i class="fa-solid fa-robot"></i></span>' +
                    '<span class="rm-ai__fab-badge"></span>' +
                    '<span class="rm-ai__fab-label">红色文化 AI 助手</span>' +
                '</button>' +
                '<section id="ai-chat-window" class="rm-ai__window" role="dialog" ' +
                    'aria-label="红色文化 AI 助手" hidden>' +
                    '<header class="rm-ai__header">' +
                        '<div class="rm-ai__identity">' +
                            '<div class="rm-ai__avatar"><i class="fa-solid fa-robot"></i>' +
                                '<span class="rm-ai__presence"></span></div>' +
                            '<div class="rm-ai__title-wrap">' +
                                '<h3>红色文化 AI 助手</h3>' +
                                '<p><span class="rm-ai__status-dot" id="rm-ai-status-dot"></span>' +
                                    '<span id="rm-ai-status">' + IDLE_STATUS + '</span></p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="rm-ai__actions">' +
                            '<button type="button" class="rm-ai__text-btn" id="rm-ai-expand" ' +
                                'onclick="toggleAIChatSize()" title="放大对话窗">放大</button>' +
                            '<button type="button" class="rm-ai__text-btn" onclick="clearAIChat()" ' +
                                'title="清空对话">清空</button>' +
                            '<button type="button" class="rm-ai__text-btn rm-ai__text-btn--close" ' +
                                'onclick="toggleAIChat()" title="关闭" aria-label="关闭">×</button>' +
                        '</div>' +
                    '</header>' +
                    '<div id="ai-chat-messages" class="rm-ai__messages" role="log" aria-live="polite"></div>' +
                    '<div class="rm-ai__composer">' +
                        '<div class="rm-ai__composer-box">' +
                            '<textarea id="ai-user-input" rows="1" maxlength="500" ' +
                                'aria-label="输入你的问题" ' +
                                'placeholder="问我关于京津冀红色历史、革命遗址、英雄故事…"></textarea>' +
                            '<button type="button" class="rm-ai__send" id="rm-ai-send" ' +
                                'onclick="sendToDeepSeek()" aria-label="发送">' +
                                '<i class="fa-solid fa-paper-plane"></i></button>' +
                        '</div>' +
                        '<div class="rm-ai__composer-hint">' +
                            '<span><kbd>Enter</kbd> 发送 · <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行</span>' +
                            '<span>内容由 AI 生成，仅作学习参考</span>' +
                        '</div>' +
                    '</div>' +
                '</section>' +
            '</div>';

        document.body.insertAdjacentHTML('beforeend', html);

        messagesEl = document.getElementById('ai-chat-messages');
        inputEl = document.getElementById('ai-user-input');
        sendBtn = document.getElementById('rm-ai-send');
        winEl = document.getElementById('ai-chat-window');
        statusEl = document.getElementById('rm-ai-status');
        statusDotEl = document.getElementById('rm-ai-status-dot');
        expandBtn = document.getElementById('rm-ai-expand');

        renderWelcome();

        inputEl.addEventListener('input', autoGrow);
        inputEl.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && !event.shiftKey && !event.isComposing && event.keyCode !== 229) {
                event.preventDefault();
                sendToDeepSeek();
            }
        });

        messagesEl.addEventListener('click', function (event) {
            var target = event.target;
            while (target && target !== messagesEl) {
                if (target.classList && target.classList.contains('rm-ai__chip')) {
                    var question = target.getAttribute('data-q');
                    if (question) { sendQuestion(question); }
                    return;
                }
                target = target.parentNode;
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && winEl && !winEl.hidden) {
                toggleAIChat();
            }
        });
    }

    function mount() {
        if (document.getElementById('ai-assistant')) { return; }
        addAIAssistant();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount);
    } else {
        setTimeout(mount, 500);
    }

    /* ============================== 对外接口 ============================== */
    window.addAIAssistant = addAIAssistant;
    window.toggleAIChat = toggleAIChat;
    window.toggleAIChatSize = toggleAIChatSize;
    window.clearAIChat = clearAIChat;
    window.sendToDeepSeek = sendToDeepSeek;
})();
