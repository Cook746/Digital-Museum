
// ============================================
// 1. 文物数据 - 模拟数据库
// ============================================
const artifactsData = [
    {
        id: 1,
        title: "革命家书",
        category: "文献资料",
        era: "解放战争时期",
        location: "中国人民革命军事博物馆",
        year: "1948年",
        description: "这是一封珍贵的革命家书，写于1948年解放战争时期。信的作者是一位年轻的革命战士，在奔赴前线前写给家人的最后一封信。",
        detailedDesc: `
            <h3>文物详情</h3>
            <p><strong>年代：</strong>1948年</p>
            <p><strong>出土地点：</strong>河北省石家庄市</p>
            <p><strong>材质：</strong>纸质</p>
            <p><strong>尺寸：</strong>21cm × 15cm</p>
            <p><strong>保存状况：</strong>良好，字迹清晰</p>
            
            <h4>历史背景</h4>
            <p>1948年正值解放战争的关键时期，这封家书反映了当时革命战士的崇高理想和坚定信念。信中既有对家人的思念，更有对革命胜利的坚定信心。</p>
            
            <h4>教育意义</h4>
            <ul>
                <li>展现了革命者的家国情怀</li>
                <li>体现了革命乐观主义精神</li>
                <li>是革命传统教育的生动教材</li>
            </ul>
        `,
        funFact: "这封家书的收信人一直珍藏着它，直到2005年才捐赠给博物馆。",
        image: '<i class="fa-solid fa-envelope-open-text"></i>'
    },
    {
        id: 2,
        title: "军用匕首",
        category: "武器装备",
        era: "抗日战争时期",
        location: "中国人民抗日战争纪念馆",
        year: "1938年",
        description: "抗战时期游击队使用的武器，见证了艰苦卓绝的革命岁月。",
        detailedDesc: `
            <h3>文物详情</h3>
            <p><strong>年代：</strong>1938年</p>
            <p><strong>使用部队：</strong>冀中军区游击队</p>
            <p><strong>材质：</strong>钢质刀身，木质刀柄</p>
            <p><strong>长度：</strong>32.5厘米</p>
            <p><strong>重量：</strong>485克</p>
            
            <h4>历史背景</h4>
            <p>1938年，冀中军区游击队在艰苦条件下开展敌后斗争。这把匕首由当地铁匠手工打造，虽然简陋，但在多次战斗中发挥了重要作用。</p>
            
            <h4>战斗经历</h4>
            <ul>
                <li>参与过夜袭日军据点的行动</li>
                <li>曾用于切断敌军通讯线路</li>
                <li>见证了多场重要战斗</li>
            </ul>
        `,
        funFact: "刀柄上的磨损痕迹显示了它的长期使用历史。",
        image: '<i class="fa-solid fa-khanda"></i>'
    },
    {
        id: 3,
        title: "革命报刊",
        category: "宣传资料",
        era: "新文化运动时期",
        location: "国家博物馆",
        year: "1919年",
        description: "《新青年》等进步刊物，传播革命思想的重要载体。",
        detailedDesc: `
            <h3>文物详情</h3>
            <p><strong>刊物名称：</strong>《新青年》第七卷第一号</p>
            <p><strong>出版时间：</strong>1919年12月</p>
            <p><strong>主编：</strong>陈独秀</p>
            <p><strong>页数：</strong>128页</p>
            <p><strong>印刷：</strong>铅印</p>
            
            <h4>历史意义</h4>
            <p>《新青年》是五四运动时期最重要的进步刊物之一，对马克思主义在中国的传播起到了关键作用。这一期发表了李大钊的《我的马克思主义观》等重要文章。</p>
            
            <h4>主要内容</h4>
            <ul>
                <li>宣传民主与科学思想</li>
                <li>介绍马克思主义理论</li>
                <li>批判封建礼教</li>
                <li>倡导文学革命</li>
            </ul>
        `,
        funFact: "这一期《新青年》在当时发行量达到1.5万份，影响广泛。",
        image: '<i class="fa-solid fa-newspaper"></i>'
    },
    {
        id: 4,
        title: "荣誉勋章",
        category: "荣誉证章",
        era: "解放战争时期",
        location: "平津战役纪念馆",
        year: "1949年",
        description: "授予革命英雄的荣誉勋章，彰显革命精神的光辉。",
        detailedDesc: `
            <h3>文物详情</h3>
            <p><strong>勋章名称：</strong>解放华北纪念章</p>
            <p><strong>颁发时间：</strong>1949年10月</p>
            <p><strong>颁发机构：</strong>华北军区</p>
            <p><strong>材质：</strong>铜质镀金</p>
            <p><strong>直径：</strong>3.5厘米</p>
            
            <h4>颁发背景</h4>
            <p>为表彰在解放华北战役中作出突出贡献的指战员，华北军区于1949年10月颁发此纪念章。获得者需参加解放华北的重要战役并立有战功。</p>
            
            <h4>设计含义</h4>
            <ul>
                <li>红色五角星：象征革命</li>
                <li>麦穗和齿轮：代表工农联盟</li>
                <li"华北"二字：标明战役区域</li>
                <li>绶带颜色：红色象征革命胜利</li>
            </ul>
        `,
        funFact: "这枚勋章的主人是参加过平津战役的老战士，后捐赠给纪念馆。",
        image: '<i class="fa-solid fa-medal"></i>'
    }
];

// ============================================
// 2. 用户学习进度管理
// ============================================
let userProgress = {
    completedTasks: [],
    visitedArtifacts: [],
    collectedAchievements: [],
    lastVisit: new Date().toISOString(),
    mapLocations: {
        visited: []  // 添加地图地点访问记录
    }
};

// 检查本地是否有保存的学习进度
function loadUserProgress() {
    const saved = localStorage.getItem('redMuseumProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
        // 确保mapLocations存在
        if (!userProgress.mapLocations) {
            userProgress.mapLocations = { visited: [] };
        }
        console.log('已加载用户学习进度');
    }
}

// 保存学习进度到本地
function saveUserProgress() {
    userProgress.lastVisit = new Date().toISOString();
    localStorage.setItem('redMuseumProgress', JSON.stringify(userProgress));
    console.log('学习进度已保存');
}

// 检查并加载用户进度（不再弹出“欢迎回来”弹窗）
function checkUserProgress() {
    loadUserProgress();
}

// ============================================
// 3. 文物详情弹窗功能
// ============================================
function showArtifactDetail(artifactId) {
    // 查找文物数据
    const artifact = artifactsData.find(item => item.id === artifactId);
    if (!artifact) {
        alert('文物信息加载失败');
        return;
    }
    
    // 记录用户访问
    if (!userProgress.visitedArtifacts.includes(artifactId)) {
        userProgress.visitedArtifacts.push(artifactId);
        saveUserProgress();
    }
    
    // 创建弹窗HTML
    const modalHTML = `
        <div class="artifact-modal-overlay" id="artifactModal">
            <div class="artifact-modal">
                <div class="modal-header">
                    <h2>${artifact.image} ${artifact.title}</h2>
                    <button onclick="closeModal()" class="close-btn">×</button>
                </div>
                
                <div class="modal-body">
                    <div class="artifact-basic-info">
                        <div class="info-row">
                            <span class="info-label"><i class="fa-solid fa-calendar-days"></i> 年代：</span>
                            <span class="info-value">${artifact.year}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label"><i class="fa-solid fa-landmark"></i> 馆藏：</span>
                            <span class="info-value">${artifact.location}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label"><i class="fa-solid fa-folder-open"></i> 类别：</span>
                            <span class="info-value">${artifact.category}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label"><i class="fa-solid fa-hourglass-half"></i> 时期：</span>
                            <span class="info-value">${artifact.era}</span>
                        </div>
                    </div>
                    
                    <div class="artifact-description">
                        <h3><i class="fa-solid fa-book"></i> 文物简介</h3>
                        <p>${artifact.description}</p>
                        
                        <div class="detailed-content">
                            ${artifact.detailedDesc}
                        </div>
                    </div>
                    
                    <div class="artifact-fun-fact">
                        <h3><i class="fa-solid fa-lightbulb"></i> 你知道吗？</h3>
                        <p>${artifact.funFact}</p>
                    </div>
                    
                    <div class="learning-tips">
                        <h3><i class="fa-solid fa-bullseye"></i> 学习建议</h3>
                        <ul>
                            <li>思考这件文物反映了怎样的历史背景</li>
                            <li>了解相关历史人物的故事</li>
                            <li>与其他文物对比，发现历史脉络</li>
                            <li>写下你的观后感想</li>
                        </ul>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <div class="progress-info">
                        这是你参观的第 <strong>${userProgress.visitedArtifacts.length}</strong> 件文物
                    </div>
                    <div class="modal-actions">
                        <button onclick="markAsLearned(${artifactId})" class="learn-btn">
                            <i class="fa-solid fa-circle-check"></i> 标记为已学习
                        </button>
                        <button onclick="closeModal()" class="close-modal-btn">
                            关闭
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModal() {
    const modal = document.getElementById('artifactModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// 标记为已学习
function markAsLearned(artifactId) {
    if (!userProgress.collectedAchievements.includes(artifactId)) {
        userProgress.collectedAchievements.push(artifactId);
        saveUserProgress();
        
        // 显示成就提示
        const achievementMsg = document.createElement('div');
        achievementMsg.className = 'achievement-toast';
        achievementMsg.innerHTML = `
            <div class="achievement-content">
                <span class="achievement-icon"><i class="fa-solid fa-trophy"></i></span>
                <div>
                    <strong>成就达成！</strong>
                    <p>已学习 "${artifactsData.find(a => a.id === artifactId)?.title}"</p>
                </div>
            </div>
        `;
        document.body.appendChild(achievementMsg);
        
        // 3秒后自动消失
        setTimeout(() => {
            achievementMsg.remove();
        }, 3000);
    }
    closeModal();
}

// ============================================
// 4. 任务系统功能
// ============================================
function startTask(taskId) {
    const taskData = {
        1: {
            title: "文物解说员",
            description: "选择一件文物，从以下角度撰写解说词：\n\n1. 文物基本信息\n2. 历史背景\n3. 革命意义\n4. 当代价值",
            requirements: "字数：200-300字\n格式：Word文档或PDF\n提交截止：一周内",
            tips: "可以参考博物馆官方解说，加入自己的理解"
        },
        2: {
            title: "时间轴制作",
            description: "梳理1919-1949年京津冀地区重大革命事件",
            requirements: "包含至少10个重要事件\n每个事件需有日期、地点、简介\n制作成时间轴图",
            tips: "可以使用PPT、在线时间轴工具制作"
        },
        3: {
            title: "红色足迹地图",
            description: "在京津冀地图上标记重要革命遗址",
            requirements: "标记至少8处遗址\n每处需有照片、简介、历史意义\n制作成电子地图或手绘地图",
            tips: "可以使用百度地图API或手工绘制"
        }
    };
    
    const task = taskData[taskId];
    if (!task) return;
    
    const userChoice = confirm(
        `<i class="fa-solid fa-clipboard-list"></i> 任务详情\n\n` +
        `任务名称：${task.title}\n\n` +
        `任务描述：${task.description}\n\n` +
        `任务要求：${task.requirements}\n\n` +
        `<i class="fa-solid fa-lightbulb"></i> 小提示：${task.tips}\n\n` +
        `是否开始这个任务？`
    );
    
    if (userChoice) {
        // 记录任务开始
        if (!userProgress.completedTasks.includes(taskId)) {
            // 显示任务面板
            showTaskPanel(taskId, task.title);
        } else {
            alert('你已经完成过这个任务了！');
        }
    }
}

// 显示任务面板
function showTaskPanel(taskId, taskTitle) {
    const panelHTML = `
        <div class="task-panel-overlay" id="taskPanel">
            <div class="task-panel">
                <div class="task-header">
                    <h2><i class="fa-solid fa-file-pen"></i> ${taskTitle}</h2>
                    <button onclick="closeTaskPanel()" class="close-btn">×</button>
                </div>
                
                <div class="task-content">
                    <div class="task-section">
                        <h3><i class="fa-solid fa-clipboard-list"></i> 任务要求</h3>
                        <p>请按照任务提示完成作品，完成后可以：</p>
                        <ul>
                            <li>上传文件（图片、文档等）</li>
                            <li>填写作品描述</li>
                            <li>提交给老师或小组讨论</li>
                        </ul>
                    </div>
                    
                    <div class="task-section">
                        <h3><i class="fa-solid fa-upload"></i> 提交作品</h3>
                        <textarea id="taskSubmission" 
                                  placeholder="请描述你的作品内容、创作思路和学习收获..." 
                                  rows="5"></textarea>
                        
                        <div class="upload-area" onclick="simulateUpload()">
                            <div class="upload-icon"><i class="fa-solid fa-paperclip"></i></div>
                            <p>点击上传文件（支持图片、PDF、Word）</p>
                            <p class="upload-hint">或将文件拖拽到这里</p>
                        </div>
                    </div>
                    
                    <div class="task-section">
                        <h3><i class="fa-solid fa-trophy"></i> 完成任务奖励</h3>
                        <div class="rewards">
                            <div class="reward-item">
                                <span class="reward-icon"><i class="fa-solid fa-star"></i></span>
                                <span>学习积分 +50</span>
                            </div>
                            <div class="reward-item">
                                <span class="reward-icon"><i class="fa-solid fa-scroll"></i></span>
                                <span>电子证书一份</span>
                            </div>
                            <div class="reward-item">
                                <span class="reward-icon"><i class="fa-solid fa-palette"></i></span>
                                <span>作品展示机会</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="task-actions">
                    <button onclick="saveTaskDraft(${taskId})" class="draft-btn">
                        <i class="fa-solid fa-floppy-disk"></i> 保存草稿
                    </button>
                    <button onclick="submitTask(${taskId})" class="submit-btn">
                        <i class="fa-solid fa-circle-check"></i> 提交任务
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', panelHTML);
    document.body.style.overflow = 'hidden';
}

// 关闭任务面板
function closeTaskPanel() {
    const panel = document.getElementById('taskPanel');
    if (panel) {
        panel.remove();
        document.body.style.overflow = 'auto';
    }
}

// 模拟文件上传
function simulateUpload() {
    alert('文件上传功能演示\n\n实际项目中可以连接后端服务器实现真实文件上传。\n目前为演示版本，已模拟上传成功。');
    
    // 显示上传成功提示
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        uploadArea.innerHTML = `
            <div class="upload-success">
                <span class="success-icon"><i class="fa-solid fa-circle-check"></i></span>
                <p>文件上传成功！</p>
                <p class="file-info">示例文件.jpg (2.3MB)</p>
            </div>
        `;
    }
}

// 保存任务草稿
function saveTaskDraft(taskId) {
    const textarea = document.getElementById('taskSubmission');
    const content = textarea.value;
    
    if (content.trim()) {
        // 保存到本地存储
        localStorage.setItem(`taskDraft_${taskId}`, content);
        alert('草稿已保存！下次可以继续编辑。');
    } else {
        alert('请输入作品描述再保存草稿');
    }
}

// 提交任务
function submitTask(taskId) {
    const textarea = document.getElementById('taskSubmission');
    const content = textarea.value;
    
    if (!content.trim()) {
        alert('请填写作品描述再提交！');
        return;
    }
    
    if (!userProgress.completedTasks.includes(taskId)) {
        userProgress.completedTasks.push(taskId);
        saveUserProgress();
        
        // 显示提交成功
        alert(`[完成] 任务提交成功！\n\n感谢你的参与，作品将进入评审环节。\n你已获得学习积分和电子证书。`);
        
        // 更新页面上的任务状态
        updateTaskDisplay(taskId);
        
        // 关闭面板
        closeTaskPanel();
    }
}

// 更新任务显示状态
function updateTaskDisplay(taskId) {
    const taskButtons = document.querySelectorAll(`[onclick*="startTask(${taskId})"]`);
    taskButtons.forEach(button => {
        button.innerHTML = '<i class="fa-solid fa-circle-check"></i> 已完成';
        button.style.backgroundColor = '#27ae60';
        button.onclick = null;
    });
}

// ============================================
// 5. 虚拟展厅功能
// ============================================
function enterMuseum() {
    const modalHTML = `
        <div class="museum-modal-overlay" id="museumModal">
            <div class="museum-modal">
                <div class="museum-header">
                    <h2><i class="fa-solid fa-landmark"></i> 虚拟展厅体验</h2>
                    <button onclick="closeMuseumModal()" class="close-btn">×</button>
                </div>
                
                <div class="museum-content">
                    <div class="museum-preview">
                        <div class="preview-scene">
                            <div class="scene-placeholder">
                                <div class="loading-3d"></div>
                                <p>3D展厅加载中...</p>
                            </div>
                        </div>
                        
                        <div class="scene-controls">
                            <button onclick="navigateScene('left')" class="nav-btn"><i class="fa-solid fa-arrow-left"></i></button>
                            <button onclick="navigateScene('right')" class="nav-btn"><i class="fa-solid fa-arrow-right"></i></button>
                            <button onclick="zoomScene('in')" class="zoom-btn">+</button>
                            <button onclick="zoomScene('out')" class="zoom-btn">-</button>
                        </div>
                    </div>
                    
                    <div class="museum-info">
                        <h3>展厅介绍</h3>
                        <p>这是一个模拟的3D虚拟展厅，展示了京津冀地区的红色革命历史。</p>
                        
                        <div class="exhibition-list">
                            <h4><i class="fa-solid fa-tent"></i> 主题展览</h4>
                            <ul>
                                <li onclick="selectExhibition(1)">冀中革命斗争展</li>
                                <li onclick="selectExhibition(2)">平津战役专题展</li>
                                <li onclick="selectExhibition(3)">革命先驱人物展</li>
                                <li onclick="selectExhibition(4)">红色文艺作品展</li>
                            </ul>
                        </div>
                        
                        <div class="visitor-stats">
                            <h4><i class="fa-solid fa-users"></i> 参观统计</h4>
                            <p>今日参观人数：<strong>1,248</strong> 人</p>
                            <p>累计参观人数：<strong>45,672</strong> 人</p>
                        </div>
                    </div>
                </div>
                
                <div class="museum-actions">
                    <button onclick="startGuidedTour()" class="tour-btn">
                        <i class="fa-solid fa-headphones"></i> 开始语音导览
                    </button>
                    <button onclick="takeScreenshot()" class="screenshot-btn">
                        <i class="fa-solid fa-camera-retro"></i> 展厅截图
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// 展厅相关函数
function closeMuseumModal() {
    const modal = document.getElementById('museumModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function navigateScene(direction) {
    alert(`展厅视角${direction === 'left' ? '向左' : '向右'}移动`);
}

function zoomScene(action) {
    alert(`展厅${action === 'in' ? '放大' : '缩小'}`);
}

function selectExhibition(id) {
    const exhibitions = {
        1: "冀中革命斗争展：展示冀中平原的革命斗争历史",
        2: "平津战役专题展：展示平津战役全过程",
        3: "革命先驱人物展：介绍京津冀地区的革命先驱",
        4: "红色文艺作品展：展示革命时期的文艺作品"
    };
    alert(`已选择：${exhibitions[id]}`);
}

function startGuidedTour() {
    alert("语音导览开始播放...\n\n现在为您介绍冀中革命斗争展。\n冀中平原是抗日战争的重要战场...");
}

function takeScreenshot() {
    alert("展厅截图已保存！\n\n可以分享给同学或用于学习报告。");
}

// ============================================
// 6. 页面加载时初始化
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("红色数字博物馆平台初始化完成");
    
    // 加载用户进度
    loadUserProgress();
    
    // 更新文物卡片的事件
    setTimeout(() => {
        updateArtifactCards();
    }, 500);
});

// 更新文物卡片的事件绑定
function updateArtifactCards() {
    // 移除旧的事件绑定
    const cards = document.querySelectorAll('.artifact-card .artifact-btn');
    cards.forEach((card, index) => {
        // 移除原来的onclick属性
        card.removeAttribute('onclick');
        // 添加新的事件监听
        card.addEventListener('click', function(e) {
            e.preventDefault();
            showArtifactDetail(index + 1);
        });
    });
}// ============================================
// 学习进度管理功能
// ============================================

// 学习记录数据结构
userProgress.learningHistory = userProgress.learningHistory || [];

// 添加学习记录
function addLearningRecord(type, content) {
    const record = {
        id: Date.now(),
        type: type, // 'artifact', 'task', 'achievement'
        content: content,
        time: new Date().toISOString(),
        timestamp: Date.now()
    };
    
    userProgress.learningHistory.unshift(record); // 添加到开头
    if (userProgress.learningHistory.length > 20) {
        userProgress.learningHistory = userProgress.learningHistory.slice(0, 20); // 只保留20条
    }
    
    saveUserProgress();
    updateProgressDashboard();
}

// 更新进度仪表盘
function updateProgressDashboard() {
    // 计算进度
    const totalArtifacts = artifactsData.length;
    const visitedArtifacts = userProgress.visitedArtifacts.length;
    const completedTasks = userProgress.completedTasks.length;
    const totalAchievements = userProgress.collectedAchievements.length;
    
    // 总体进度（文物参观占50%，任务完成占30%，成就占20%）
    const progress = Math.min(100, 
        (visitedArtifacts / totalArtifacts) * 50 + 
        (completedTasks / 3) * 30 + 
        (totalAchievements / 5) * 20
    );
    
    // 更新总体进度
    const percentElement = document.querySelector('.progress-percent');
    const fillElement = document.querySelector('.progress-fill');
    if (percentElement) {
        percentElement.textContent = `${Math.round(progress)}%`;
    }
    if (fillElement) {
        fillElement.style.width = `${progress}%`;
    }
    
    // 更新统计数字
    const statValues = document.querySelectorAll('.stat-value');
    if (statValues.length >= 3) {
        statValues[0].textContent = visitedArtifacts;
        statValues[1].textContent = completedTasks;
        
        // 计算学习时长（每次学习记录算5分钟）
        const learningMinutes = userProgress.learningHistory.length * 5;
        statValues[2].textContent = learningMinutes;
    }
    
    // 更新详细记录
    updateProgressList();
    
    // 更新学习建议
    updateLearningSuggestions();
}

// 更新学习记录列表
function updateProgressList() {
    const progressList = document.getElementById('progressList');
    if (!progressList) return;
    
    if (userProgress.learningHistory.length === 0) {
        progressList.innerHTML = `
            <div class="empty-state">
                <div style="font-size: 3rem; color: #bdc3c7;"><i class="fa-solid fa-book-open"></i></div>
                <p>还没有学习记录，快去探索文物吧！</p>
                <button onclick="showArtifactDetail(1)" style="margin-top: 1rem; padding: 0.5rem 1.5rem; background-color: #b71c1c; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    开始学习
                </button>
            </div>
        `;
        return;
    }
    
    // 生成记录列表
    let listHTML = '';
    userProgress.learningHistory.forEach(record => {
        let icon = '<i class="fa-solid fa-book"></i>';
        let color = '#3498db';
        
        switch (record.type) {
            case 'artifact':
                icon = '<i class="fa-solid fa-landmark"></i>';
                color = '#b71c1c';
                break;
            case 'task':
                icon = '<i class="fa-solid fa-circle-check"></i>';
                color = '#27ae60';
                break;
            case 'achievement':
                icon = '<i class="fa-solid fa-trophy"></i>';
                color = '#f39c12';
                break;
        }
        
        const time = new Date(record.time).toLocaleString('zh-CN', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        listHTML += `
            <div class="progress-item" style="border-left-color: ${color}">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.2rem;">${icon}</span>
                    <div>
                        <div style="font-weight: 500;">${record.content}</div>
                        <div class="progress-time">${time}</div>
                    </div>
                </div>
                <span style="font-size: 0.9rem; color: #666;">完成</span>
            </div>
        `;
    });
    
    progressList.innerHTML = listHTML;
}

// 更新学习建议
function updateLearningSuggestions() {
    const suggestionsList = document.getElementById('suggestionsList');
    if (!suggestionsList) return;
    
    const visitedCount = userProgress.visitedArtifacts.length;
    const taskCount = userProgress.completedTasks.length;
    const suggestions = [];
    
    // 基于用户进度生成个性化建议
    if (visitedCount === 0) {
        suggestions.push('开始参观第一件文物，了解革命历史');
        suggestions.push('从"革命家书"开始，感受革命者的家国情怀');
    } else if (visitedCount < 3) {
        suggestions.push('继续探索其他文物，了解更多革命故事');
        suggestions.push('尝试完成一个学习任务，巩固所学知识');
    } else if (visitedCount >= 3 && taskCount === 0) {
        suggestions.push('很棒！你已经参观了多件文物，现在可以挑战学习任务了');
        suggestions.push('尝试"文物解说员"任务，展示你的理解');
    } else if (taskCount > 0) {
        suggestions.push('恭喜你完成任务！可以继续探索虚拟展厅');
        suggestions.push('查看你的学习成就，继续努力获得更多徽章');
    }
    
    if (userProgress.visitedArtifacts.length === artifactsData.length) {
        suggestions.push('<i class="fa-solid fa-champagne-glasses"></i> 太棒了！你已经参观了所有文物！');
        suggestions.push('考虑整理学习笔记，形成完整的红色文化认知体系');
    }
    
    let suggestionsHTML = '';
    suggestions.forEach((suggestion, index) => {
        suggestionsHTML += `
            <li>
                <span class="suggestion-icon">${index === 0 ? '<i class="fa-solid fa-hand-point-right"></i>' : '<i class="fa-solid fa-thumbtack"></i>'}</span>
                ${suggestion}
            </li>
        `;
    });
    
    suggestionsList.innerHTML = suggestionsHTML;
}

// 修改原有的函数，添加学习记录
function enhancedShowArtifactDetail(artifactId) {
    const originalFunc = showArtifactDetail;
    return function() {
        // 调用原始函数
        const result = originalFunc.apply(this, arguments);
        
        // 添加学习记录
        const artifact = artifactsData.find(a => a.id === artifactId);
        if (artifact) {
            addLearningRecord('artifact', `参观了文物：${artifact.title}`);
        }
        
        return result;
    };
}

// 重写原有的showArtifactDetail函数
const originalShowArtifactDetail = showArtifactDetail;
showArtifactDetail = function(artifactId) {
    // 调用原始函数
    originalShowArtifactDetail(artifactId);
    
    // 添加学习记录
    const artifact = artifactsData.find(a => a.id === artifactId);
    if (artifact) {
        addLearningRecord('artifact', `参观了文物：${artifact.title}`);
    }
};

// 修改任务提交函数，添加学习记录
function enhancedSubmitTask(taskId) {
    const originalFunc = submitTask;
    return function() {
        // 调用原始函数
        const result = originalFunc.apply(this, arguments);
        
        // 添加学习记录
        const taskTitles = {
            1: '文物解说员',
            2: '时间轴制作',
            3: '红色足迹地图'
        };
        
        addLearningRecord('task', `完成了任务：${taskTitles[taskId]}`);
        
        return result;
    };
}

// 在导航栏添加"学习进度"入口
function addProgressNavItem() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer && !document.querySelector('.nav-progress')) {
        const progressNav = document.createElement('a');
        progressNav.href = '#progress';
        progressNav.className = 'nav-link nav-progress';
        progressNav.innerHTML = '<i class="fa-solid fa-chart-simple"></i> 学习进度';
        progressNav.onclick = function(e) {
            e.preventDefault();
            showProgressDashboard();
        };
        navContainer.appendChild(progressNav);
    }
}

// 显示进度仪表盘
function showProgressDashboard() {
    // 显示进度区域
    const progressSection = document.getElementById('progress');
    if (progressSection) {
        progressSection.style.display = 'block';
        
        // 滚动到进度区域
        progressSection.scrollIntoView({ behavior: 'smooth' });
        
        // 更新数据
        updateProgressDashboard();
    }
}
// ============================================
// 成就系统
// ============================================

// 成就数据
const achievementsData = [
    {
        id: 1,
        title: "初识红色",
        description: "参观第一件文物",
        icon: '<i class="fa-solid fa-magnifying-glass"></i>',
        requirement: { type: "artifact", count: 1 },
        points: 10,
        unlocked: false
    },
    {
        id: 2,
        title: "文物探索者",
        description: "参观所有文物",
        icon: '<i class="fa-solid fa-landmark"></i>',
        requirement: { type: "artifact", count: 4 },
        points: 50,
        unlocked: false
    },
    {
        id: 3,
        title: "任务达人",
        description: "完成第一个学习任务",
        icon: '<i class="fa-solid fa-circle-check"></i>',
        requirement: { type: "task", count: 1 },
        points: 20,
        unlocked: false
    },
    {
        id: 4,
        title: "全能学者",
        description: "完成所有学习任务",
        icon: '<i class="fa-solid fa-graduation-cap"></i>',
        requirement: { type: "task", count: 3 },
        points: 100,
        unlocked: false
    },
    {
        id: 5,
        title: "连续学习者",
        description: "连续学习3天",
        icon: '<i class="fa-solid fa-fire"></i>',
        requirement: { type: "streak", count: 3 },
        points: 30,
        unlocked: false
    },
    {
        id: 6,
        title: "红色文化传承者",
        description: "获得所有基础成就",
        icon: '<i class="fa-solid fa-trophy"></i>',
        requirement: { type: "combo", count: 4 },
        points: 200,
        unlocked: false
    },
    {
        id: 7,
        title: "深度思考者",
        description: "为3件文物撰写感想",
        icon: '<i class="fa-solid fa-comment-dots"></i>',
        requirement: { type: "reflection", count: 3 },
        points: 40,
        unlocked: false
    },
    {
        id: 8,
        title: "分享大使",
        description: "分享学习成果3次",
        icon: '<i class="fa-solid fa-bullhorn"></i>',
        requirement: { type: "share", count: 3 },
        points: 25,
        unlocked: false
    }
];

// 初始化用户成就数据
userProgress.achievements = userProgress.achievements || {
    unlocked: [],
    points: 0,
    streak: 0,
    lastVisit: null
};

// 检查并更新成就
function checkAchievements() {
    const visitedCount = userProgress.visitedArtifacts.length;
    const taskCount = userProgress.completedTasks.length;
    
    // 更新连续学习天数
    updateStreak();
    
    // 检查每个成就
    achievementsData.forEach(achievement => {
        if (userProgress.achievements.unlocked.includes(achievement.id)) {
            return; // 已经解锁
        }
        
        let requirementMet = false;
        
        switch (achievement.requirement.type) {
            case 'artifact':
                requirementMet = visitedCount >= achievement.requirement.count;
                break;
            case 'task':
                requirementMet = taskCount >= achievement.requirement.count;
                break;
            case 'streak':
                requirementMet = userProgress.achievements.streak >= achievement.requirement.count;
                break;
            case 'combo':
                // 解锁基础成就的数量
                const basicAchievements = [1, 2, 3, 4];
                const unlockedBasic = basicAchievements.filter(id => 
                    userProgress.achievements.unlocked.includes(id)
                ).length;
                requirementMet = unlockedBasic >= achievement.requirement.count;
                break;
        }
        
        if (requirementMet) {
            unlockAchievement(achievement.id);
        }
    });
    
    saveUserProgress();
    updateAchievementsDisplay();
}

// 解锁成就 小邓好累
function unlockAchievement(achievementId) {
    if (userProgress.achievements.unlocked.includes(achievementId)) {
        return; // 已经解锁
    }
    
    const achievement = achievementsData.find(a => a.id === achievementId);
    if (!achievement) return;
    
    // 添加到已解锁列表
    userProgress.achievements.unlocked.push(achievementId);
    userProgress.achievements.points += achievement.points;
    
    // 添加学习记录
    addLearningRecord('achievement', `获得成就：${achievement.title}`);
    
    // 显示解锁通知
    showAchievementNotification(achievement);
    
    saveUserProgress();
}

// 显示成就解锁通知
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${achievement.icon}</div>
            <div class="notification-text">
                <div class="notification-title"><i class="fa-solid fa-trophy"></i> 成就解锁！</div>
                <div class="notification-achievement">${achievement.title}</div>
                <div class="notification-desc">${achievement.description}</div>
                <div class="notification-points">+${achievement.points} 积分</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动消失
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 更新连续学习天数
function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = userProgress.achievements.lastVisit;
    
    if (!lastVisit) {
        // 第一次访问
        userProgress.achievements.streak = 1;
    } else {
        const lastVisitDate = new Date(lastVisit);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisitDate.toDateString() === yesterday.toDateString()) {
            // 连续访问
            userProgress.achievements.streak++;
        } else if (lastVisitDate.toDateString() !== today) {
            // 中断，重新开始
            userProgress.achievements.streak = 1;
        }
    }
    
    userProgress.achievements.lastVisit = new Date().toISOString();
}

// 更新成就显示
function updateAchievementsDisplay() {
    const totalAchievements = document.getElementById('totalAchievements');
    const achievementProgress = document.getElementById('achievementProgress');
    const currentStreak = document.getElementById('currentStreak');
    const achievementsGrid = document.getElementById('achievementsGrid');
    
    if (!achievementsGrid) return;
    
    // 更新统计数据
    if (totalAchievements) {
        totalAchievements.textContent = userProgress.achievements.unlocked.length;
    }
    
    if (achievementProgress) {
        const progress = Math.round((userProgress.achievements.unlocked.length / achievementsData.length) * 100);
        achievementProgress.textContent = `${progress}%`;
    }
    
    if (currentStreak) {
        currentStreak.textContent = userProgress.achievements.streak;
    }
    
    // 生成成就卡片
    let gridHTML = '';
    achievementsData.forEach(achievement => {
        const isUnlocked = userProgress.achievements.unlocked.includes(achievement.id);
        const cardClass = isUnlocked ? 'achievement-card unlocked' : 'achievement-card locked';
        
        let progressHTML = '';
        if (!isUnlocked) {
            let current = 0;
            switch (achievement.requirement.type) {
                case 'artifact':
                    current = userProgress.visitedArtifacts.length;
                    break;
                case 'task':
                    current = userProgress.completedTasks.length;
                    break;
                case 'streak':
                    current = userProgress.achievements.streak;
                    break;
                case 'combo':
                    const basicAchievements = [1, 2, 3, 4];
                    current = basicAchievements.filter(id => 
                        userProgress.achievements.unlocked.includes(id)
                    ).length;
                    break;
            }
            
            const progressPercent = Math.min(100, (current / achievement.requirement.count) * 100);
            progressHTML = `
                <div class="achievement-progress">
                    <div class="achievement-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">
                    ${current}/${achievement.requirement.count}
                </div>
            `;
        }
        
        gridHTML += `
            <div class="${cardClass}">
                ${isUnlocked ? '<div class="achievement-badge"><i class="fa-solid fa-check"></i></div>' : ''}
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-desc">${achievement.description}</div>
                ${progressHTML}
                <div style="font-size: 0.8rem; color: #f39c12; margin-top: 0.5rem;">
                    ${achievement.points} 积分
                </div>
            </div>
        `;
    });
    
    achievementsGrid.innerHTML = gridHTML;
}

// 在导航栏添加成就入口
function addAchievementsNavItem() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer && !document.querySelector('.nav-achievements')) {
        const achievementsNav = document.createElement('a');
        achievementsNav.href = '#achievements';
        achievementsNav.className = 'nav-link nav-achievements';
        achievementsNav.innerHTML = '<i class="fa-solid fa-trophy"></i> 我的成就';
        achievementsNav.onclick = function(e) {
            e.preventDefault();
            showAchievementsDashboard();
        };
        navContainer.appendChild(achievementsNav);
    }
}

// 显示成就仪表盘
function showAchievementsDashboard() {
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
        achievementsSection.style.display = 'block';
        achievementsSection.scrollIntoView({ behavior: 'smooth' });
        updateAchievementsDisplay();
    }
}

// 成就通知样式
const achievementNotificationStyle = `
.achievement-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
    border-left: 4px solid #f39c12;
    max-width: 300px;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeOut {
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.notification-icon {
    font-size: 2.5rem;
}

.notification-text {
    flex: 1;
}

.notification-title {
    font-weight: bold;
    font-size: 1.1rem;
    color: #f39c12;
}

.notification-achievement {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.2rem 0;
}

.notification-desc {
    font-size: 0.9rem;
    opacity: 0.9;
}

.notification-points {
    color: #f1c40f;
    font-weight: bold;
    margin-top: 0.3rem;
}
`;

// 添加成就通知样式
const style = document.createElement('style');
style.textContent = achievementNotificationStyle;
document.head.appendChild(style);

// 修改页面加载函数
// 修改原有的参观文物和完成任务函数，自动检查成就
const originalVisitArtifact = showArtifactDetail;
showArtifactDetail = function(artifactId) {
    originalVisitArtifact(artifactId);
    
    // 延迟检查成就（确保数据已更新）
    setTimeout(() => {
        checkAchievements();
    }, 500);
};

const originalTaskSubmit = submitTask;
submitTask = function(taskId) {
    originalTaskSubmit(taskId);
    
    setTimeout(() => {
        checkAchievements();
    }, 500);
};
// ============================================
// 学习资源库功能
// ============================================

// 学习资源数据
const learningResources = [
    {
        id: 1,
        title: "《中国共产党简史》电子版",
        type: "document",
        level: "beginner",
        description: "系统介绍中国共产党发展历程的权威读物，适合初学者全面了解党史。",
        source: "中共中央党史和文献研究院",
        duration: "约15小时阅读",
        url: "#",
        tags: ["党史", "电子书", "入门"],
        collected: false
    },
    {
        id: 2,
        title: "红色家书选集",
        type: "document",
        level: "beginner",
        description: "收录革命先辈的家书信件，展现革命者的家国情怀和崇高理想。",
        source: "国家图书馆",
        duration: "约8小时阅读",
        url: "#",
        tags: ["家书", "革命精神", "情感教育"],
        collected: false
    },
    {
        id: 3,
        title: "党史专题讲座视频",
        type: "video",
        level: "beginner",
        description: "由党史专家主讲的系列讲座，生动讲解中国共产党的重要历史事件。",
        source: "学习强国平台",
        duration: "12集 × 45分钟",
        url: "#",
        tags: ["视频课程", "专家讲解", "系列讲座"],
        collected: false
    },
    {
        id: 4,
        title: "《红岩》在线阅读",
        type: "book",
        level: "intermediate",
        description: "经典革命文学作品，描写重庆解放前夕革命者的狱中斗争。",
        source: "人民文学出版社",
        duration: "约20小时阅读",
        url: "#",
        tags: ["革命文学", "经典作品", "在线阅读"],
        collected: false
    },
    {
        id: 5,
        title: "革命文物3D展示",
        type: "website",
        level: "intermediate",
        description: "利用3D技术展示珍贵革命文物，可360度查看文物细节。",
        source: "中国国家博物馆",
        duration: "互动体验",
        url: "#",
        tags: ["3D技术", "文物展示", "互动"],
        collected: false
    },
    {
        id: 6,
        title: "毛泽东选集（精选）",
        type: "document",
        level: "advanced",
        description: "收录毛泽东同志的重要著作，学习毛泽东思想的理论精髓。",
        source: "人民出版社",
        duration: "约30小时阅读",
        url: "#",
        tags: ["毛泽东著作", "理论著作", "高级阅读"],
        collected: false
    },
    {
        id: 7,
        title: "抗战历史纪录片《东方主战场》",
        type: "video",
        level: "intermediate",
        description: "全面反映中国人民抗日战争作为东方主战场历史地位的纪录片。",
        source: "中央电视台",
        duration: "8集 × 50分钟",
        url: "#",
        tags: ["纪录片", "抗日战争", "历史影像"],
        collected: false
    },
    {
        id: 8,
        title: "红色经典音乐欣赏",
        type: "website",
        level: "beginner",
        description: "在线欣赏《黄河大合唱》等红色经典音乐作品，配有历史背景介绍。",
        source: "中央音乐学院",
        duration: "音频资源",
        url: "#",
        tags: ["音乐欣赏", "红色经典", "艺术教育"],
        collected: false
    },
    {
        id: 9,
        title: "《习近平谈治国理政》学习资料",
        type: "document",
        level: "advanced",
        description: "学习习近平新时代中国特色社会主义思想的重要参考资料。",
        source: "外文出版社",
        duration: "系统学习",
        url: "#",
        tags: ["习近平著作", "治国理政", "理论学习"],
        collected: false
    },
    {
        id: 10,
        title: "革命旧址VR虚拟参观",
        type: "website",
        level: "intermediate",
        description: "利用VR技术虚拟参观延安、西柏坡等重要革命旧址。",
        source: "国家文物局",
        duration: "VR体验",
        url: "#",
        tags: ["VR技术", "虚拟参观", "沉浸式体验"],
        collected: false
    }
];

// 初始化用户资源数据
userProgress.learningResources = userProgress.learningResources || {
    collected: [],
    viewed: [],
    lastView: null
};

// 显示学习资源库
function showResourcesLibrary() {
    const resourcesSection = document.getElementById('resources');
    if (resourcesSection) {
        resourcesSection.style.display = 'block';
        resourcesSection.scrollIntoView({ behavior: 'smooth' });
        generateResourcesGrid();
        updateResourcesStats();
    }
}

// 生成资源网格
function generateResourcesGrid(filterType = 'all', filterLevel = 'all', searchTerm = '') {
    const grid = document.getElementById('resourcesGrid');
    if (!grid) return;
    
    // 筛选资源
    let filteredResources = learningResources.filter(resource => {
        // 类型筛选
        const typeMatch = filterType === 'all' || resource.type === filterType;
        // 级别筛选
        const levelMatch = filterLevel === 'all' || resource.level === filterLevel;
        // 搜索筛选
        const searchMatch = searchTerm === '' || 
            resource.title.toLowerCase().includes(searchTerm) ||
            resource.description.toLowerCase().includes(searchTerm) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return typeMatch && levelMatch && searchMatch;
    });
    
    if (filteredResources.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h3>未找到相关资源</h3>
                <p>请尝试其他筛选条件或搜索关键词</p>
                <button onclick="resetFilters()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1.5rem;
                    background: #b71c1c;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                ">重置筛选</button>
            </div>
        `;
        return;
    }
    
    // 生成资源卡片
    let gridHTML = '';
    filteredResources.forEach(resource => {
        const isCollected = userProgress.learningResources.collected.includes(resource.id);
        
        // 类型图标和颜色
        let typeIcon = '<i class="fa-solid fa-file-lines"></i>';
        let typeColor = '#666';
        switch(resource.type) {
            case 'video': 
                typeIcon = '<i class="fa-solid fa-film"></i>'; 
                typeColor = '#e74c3c';
                break;
            case 'book': 
                typeIcon = '<i class="fa-solid fa-book"></i>'; 
                typeColor = '#3498db';
                break;
            case 'website': 
                typeIcon = '<i class="fa-solid fa-globe"></i>'; 
                typeColor = '#2ecc71';
                break;
        }
        
        // 级别标签
        let levelText = '入门';
        let levelColor = '#27ae60';
        switch(resource.level) {
            case 'intermediate': 
                levelText = '进阶'; 
                levelColor = '#f39c12';
                break;
            case 'advanced': 
                levelText = '深入'; 
                levelColor = '#e74c3c';
                break;
        }
        
        gridHTML += `
            <div class="resource-card">
                <div class="resource-header">
                    <div class="resource-type" style="background: ${typeColor}20; color: ${typeColor}">
                        ${typeIcon} ${getTypeName(resource.type)}
                    </div>
                    <div class="resource-level" style="background: ${levelColor}20; color: ${levelColor}">
                        ${levelText}
                    </div>
                    <h3 class="resource-title">${resource.title}</h3>
                    <p class="resource-description">${resource.description}</p>
                </div>
                
                <div class="resource-body">
                    <div class="resource-meta">
                        <div class="resource-source">
                            <span>来源：</span>
                            <strong>${resource.source}</strong>
                        </div>
                        <div class="resource-duration">
                            <span><i class="fa-solid fa-stopwatch"></i></span>
                            <span>${resource.duration}</span>
                        </div>
                    </div>
                    
                    <div class="resource-tags">
                        ${resource.tags.map(tag => 
                            `<span style="
                                display: inline-block;
                                background: #f0f0f0;
                                color: #666;
                                padding: 0.2rem 0.6rem;
                                border-radius: 12px;
                                font-size: 0.75rem;
                                margin-right: 0.5rem;
                                margin-bottom: 0.5rem;
                            ">${tag}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="resource-footer">
                    <button class="collect-btn ${isCollected ? 'collected' : ''}" 
                            onclick="toggleCollectResource(${resource.id})">
                        ${isCollected ? '<i class="fa-solid fa-star"></i> 已收藏' : '<i class="fa-regular fa-star"></i> 收藏'}
                    </button>
                    <a href="${resource.url}" class="view-btn" target="_blank" 
                       onclick="recordResourceView(${resource.id})">
                        查看资源
                    </a>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = gridHTML;
}

// 获取类型名称
function getTypeName(type) {
    const typeNames = {
        'document': '文献资料',
        'video': '视频课程',
        'book': '书籍推荐',
        'website': '网站链接'
    };
    return typeNames[type] || type;
}

// 更新资源统计
function updateResourcesStats() {
    const total = document.getElementById('totalResources');
    const videoCount = document.getElementById('videoCount');
    const bookCount = document.getElementById('bookCount');
    const collectedCount = document.getElementById('collectedCount');
    
    if (total) total.textContent = learningResources.length;
    
    if (videoCount) {
        const videos = learningResources.filter(r => r.type === 'video').length;
        videoCount.textContent = videos;
    }
    
    if (bookCount) {
        const books = learningResources.filter(r => r.type === 'book').length;
        bookCount.textContent = books;
    }
    
    if (collectedCount) {
        collectedCount.textContent = userProgress.learningResources.collected.length;
    }
}

// 切换收藏状态
function toggleCollectResource(resourceId) {
    const index = userProgress.learningResources.collected.indexOf(resourceId);
    
    if (index === -1) {
        // 添加到收藏
        userProgress.learningResources.collected.push(resourceId);
        showNotification('资源已添加到收藏夹', 'success');
    } else {
        // 从收藏移除
        userProgress.learningResources.collected.splice(index, 1);
        showNotification('资源已从收藏夹移除', 'info');
    }
    
    saveUserProgress();
    generateResourcesGrid();
    updateResourcesStats();
}

// 记录资源查看
function recordResourceView(resourceId) {
    if (!userProgress.learningResources.viewed.includes(resourceId)) {
        userProgress.learningResources.viewed.push(resourceId);
        userProgress.learningResources.lastView = new Date().toISOString();
        saveUserProgress();
    }
}

// 搜索资源
function searchResources() {
    const searchInput = document.getElementById('resourceSearch');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // 获取当前筛选状态
    const activeType = document.querySelector('.filter-btn[data-type].active')?.dataset.type || 'all';
    const activeLevel = document.querySelector('.filter-btn[data-level].active')?.dataset.level || 'all';
    
    generateResourcesGrid(activeType, activeLevel, searchTerm);
}

// 筛选资源
function filterResources(type, level) {
    // 更新按钮状态
    document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    
    document.querySelectorAll('.filter-btn[data-level]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === level);
    });
    
    const searchInput = document.getElementById('resourceSearch');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    generateResourcesGrid(type, level, searchTerm);
}

// 重置筛选
function resetFilters() {
    document.getElementById('resourceSearch').value = '';
    filterResources('all', 'all');
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `resource-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : type === 'error' ? '<i class="fa-solid fa-circle-xmark"></i>' : '<i class="fa-solid fa-circle-info"></i>'}
            </span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动消失
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 添加通知样式
const resourceNotificationStyle = `
.resource-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    z-index: 9999;
    animation: slideInRight 0.3s ease;
    border-left: 4px solid #b71c1c;
}

.resource-notification.success {
    border-left-color: #27ae60;
}

.resource-notification.error {
    border-left-color: #e74c3c;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.notification-icon {
    font-size: 1.2rem;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;

// 添加样式到页面
const resourceStyle = document.createElement('style');
resourceStyle.textContent = resourceNotificationStyle;
document.head.appendChild(resourceStyle);

// 在导航栏添加资源库入口
function addResourcesNavItem() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer && !document.querySelector('.nav-resources')) {
        const resourcesNav = document.createElement('a');
        resourcesNav.href = '#resources';
        resourcesNav.className = 'nav-link nav-resources';
        resourcesNav.innerHTML = '<i class="fa-solid fa-book-open"></i> 资源库';
        resourcesNav.onclick = function(e) {
            e.preventDefault();
            showResourcesLibrary();
        };
        
        // 在关于我们链接前插入
        const aboutLink = navContainer.querySelector('a[href="#about"]');
        if (aboutLink) {
            navContainer.insertBefore(resourcesNav, aboutLink);
        } else {
            navContainer.appendChild(resourcesNav);
        }
        
        console.log("已添加资源库导航链接");
    }
}

// 页面加载时初始化资源库
// 添加反馈消息样式
const feedbackMessageStyle = `
.feedback-message {
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    border-left: 4px solid #b71c1c;
    animation: slideDown 0.3s ease;
}

.feedback-message.success {
    border-left-color: #27ae60;
}

.feedback-message.error {
    border-left-color: #e74c3c;
}

.message-content {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.message-icon {
    font-size: 1.2rem;
}

@keyframes slideDown {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;

// 添加样式到页面
const feedbackStyle = document.createElement('style');
feedbackStyle.textContent = feedbackMessageStyle;
document.head.appendChild(feedbackStyle);
// ============================================
// 京津冀红色星图 —— Canvas 粒子 + ECharts 中国地图
// ============================================

const JINGJINJI = ['北京', '天津', '河北'];

// 京津冀点击跳转页面（各自独立页面）
const JJJ_PAGES = { '北京': 'beijing.html', '天津': 'tianjin.html', '河北': 'hebei.html' };

// ------------------------------------------------------------
// 省份红色文化档案
// ------------------------------------------------------------
const PROVINCE_DATA = {
    北京: {
        kicker: '五四风雷 · 革命中枢',
        brief: '五四运动在此爆发，马克思主义从这里广泛传播，开国大典在这里举行。',
        chips: ['天安门广场', '北大红楼', '卢沟桥', '香山革命纪念地'],
        sections: [
            { icon: 'fa-hourglass-half', title: '历史坐标', text: '1919 年五四运动在天安门广场爆发，新文化运动与马克思主义传播由此走向高潮；1920 年北京共产党早期组织成立；1949 年 10 月 1 日，开国大典在天安门广场隆重举行。' },
            { icon: 'fa-location-dot', title: '红色地标', text: '天安门广场、北大红楼（新文化运动纪念馆）、卢沟桥与宛平城抗战遗迹、香山革命纪念地、李大钊故居。' },
            { icon: 'fa-flag', title: '精神传承', text: '从五四精神、抗战精神到“赶考”精神，北京见证了中国革命从星火初燃到走向胜利的关键历程。' }
        ]
    },
    天津: {
        kicker: '觉悟社摇篮 · 平津决战',
        brief: '近代北方革命重镇，觉悟社诞生之地，平津战役在这里落下关键一子。',
        chips: ['觉悟社旧址', '周恩来邓颖超纪念馆', '平津战役纪念馆', '大沽口炮台'],
        sections: [
            { icon: 'fa-hourglass-half', title: '历史坐标', text: '1919 年周恩来、邓颖超等创建觉悟社；中共天津地委领导工人运动蓬勃发展；1949 年 1 月平津战役胜利，天津宣告解放。' },
            { icon: 'fa-location-dot', title: '红色地标', text: '觉悟社旧址、周恩来邓颖超纪念馆、平津战役纪念馆、天津烈士陵园、大沽口炮台遗址。' },
            { icon: 'fa-flag', title: '精神传承', text: '继承革命先驱的爱国情怀与战斗精神，铭记平津战役这一战略决战关键胜利的历史意义。' }
        ]
    },
    河北: {
        kicker: '西柏坡精神 · 敌后战场',
        brief: '西柏坡精神的诞生地，晋察冀、冀中抗日根据地的主战场。',
        chips: ['西柏坡纪念馆', '冉庄地道战遗址', '狼牙山五壮士', '129 师司令部旧址'],
        sections: [
            { icon: 'fa-hourglass-half', title: '历史坐标', text: '西柏坡中共中央旧址在此指挥辽沈、淮海、平津三大战役，召开七届二中全会；晋察冀、冀中根据地蓬勃发展；狼牙山五壮士、董存瑞等英模事迹传颂至今。' },
            { icon: 'fa-location-dot', title: '红色地标', text: '西柏坡纪念馆、冉庄地道战遗址、狼牙山五壮士陈列馆、八路军 129 师司令部旧址、喜峰口长城抗战遗址。' },
            { icon: 'fa-flag', title: '精神传承', text: '“两个务必”与“赶考”精神从这里走向全国，燕赵大地铸就了不畏牺牲、勇毅前行的革命品格。' }
        ]
    },
    山西: { kicker: '太行烽火', brief: '八路军总部与三大主力师在此转战，太行精神世代传承。' },
    内蒙古: { kicker: '草原星火', brief: '大青山抗日游击根据地与内蒙古自治区成立的红色记忆。' },
    辽宁: { kicker: '东北抗联军魂', brief: '抗日义勇军兴起之地，抗美援朝出征地，工业重镇红色基因深厚。' },
    吉林: { kicker: '白山黑水', brief: '抗联英雄活动区域与东北民主联军重要战场。' },
    黑龙江: { kicker: '极地抗联', brief: '东北抗联在这片黑土地上坚持战斗达十余年。' },
    上海: { kicker: '党的诞生地', brief: '中共一大在此召开，中国共产党由此启航，红色文化源头所在。' },
    江苏: { kicker: '雨花英烈', brief: '雨花台烈士群雕与渡江战役用鲜血写下信仰的注脚。' },
    浙江: { kicker: '红船起航', brief: '南湖红船宣告中国共产党诞生，中国革命航船从这里启程。' },
    安徽: { kicker: '淮海与渡江', brief: '淮海战役主战场之一，渡江战役在此拉开序幕。' },
    福建: { kicker: '中央苏区', brief: '中央苏区的重要组成部分，古田会议在这片土地上召开。' },
    江西: { kicker: '革命摇篮', brief: '井冈山、南昌起义、瑞金中央苏区——中国革命的摇篮。' },
    山东: { kicker: '沂蒙精神', brief: '沂蒙六姐妹与孟良崮战役，军民水乳交融的红色热土。' },
    河南: { kicker: '红旗渠精神', brief: '鄂豫皖根据地重要组成部分，红旗渠精神诞生于此。' },
    湖北: { kicker: '首义之城', brief: '辛亥革命首义之地，武昌农讲所与八七会址见证历史转折。' },
    湖南: { kicker: '伟人故里', brief: '韶山伟人故里，秋收起义与湘南起义在此点燃红色火种。' },
    广东: { kicker: '北伐与农运', brief: '孙中山故乡与北伐战争策源地，农民运动讲习所在此开办。' },
    广西: { kicker: '百色起义', brief: '邓小平同志领导的百色起义在此打响，红七军由此出发。' },
    海南: { kicker: '琼崖纵队', brief: '琼崖纵队坚持革命斗争二十三载红旗不倒，孤岛奋战。' },
    重庆: { kicker: '红岩精神', brief: '红岩村、渣滓洞与歌乐山烈士陵园，红岩精神的淬炼之地。' },
    四川: { kicker: '长征印记', brief: '强渡大渡河、飞夺泸定桥、翻越夹金山，长征经典在此上演。' },
    贵州: { kicker: '遵义会议', brief: '遵义会议在此召开，红军长征实现了伟大转折。' },
    云南: { kicker: '西南联大', brief: '西南联大南迁之地，重走长征路的重要节点。' },
    西藏: { kicker: '雪域新生', brief: '和平解放与川藏公路修建中留下的大量红色印记。' },
    陕西: { kicker: '延安精神', brief: '延安十三载，党中央在这里指挥抗战与解放全国人民。' },
    甘肃: { kicker: '会师圣地', brief: '红军三大主力在会宁会师，长征在甘肃画上圆满句号。' },
    青海: { kicker: '雪域军魂', brief: '红军西路军浴血河西，青海见证悲壮与忠诚。' },
    宁夏: { kicker: '六盘曙光', brief: '红军长征翻越六盘山，“不到长城非好汉”的豪情在此立下。' },
    新疆: { kicker: '屯垦戍边', brief: '兵团人与进疆部队在戈壁荒漠中建起绿色的红色坐标。' },
    台湾: { kicker: '两岸同心', brief: '宝岛台湾与祖国大陆血脉相连，抗日志士的故事代代相传。' },
    香港: { kicker: '东方之珠', brief: '东江纵队港九大队浴血抗日，维多利亚港畔的红色记忆。' },
    澳门: { kicker: '濠江赤子', brief: '澳门同胞以赤子之心支援祖国抗战与解放事业。' },
    南海诸岛: { kicker: '万里海疆', brief: '守岛建岛的红色故事镌刻在碧海蓝天之间。' }
};

const PROVINCE_FALLBACK = {
    kicker: '红色文化区域',
    brief: '该区域暂未收录红色文化档案，欢迎继续探索京津冀核心展区。'
};

function getProvinceInfo(name) {
    return PROVINCE_DATA[name] || PROVINCE_FALLBACK;
}

// ------------------------------------------------------------
// 右侧毛玻璃信息面板
// ------------------------------------------------------------
function renderProvincePanel(name) {
    const info = getProvinceInfo(name);
    const inJJJ = JINGJINJI.indexOf(name) >= 0;
    const content = document.getElementById('panelContent');
    const titleEl = document.getElementById('panelTitle');
    if (!content) return;

    let html = '<div class="province-block">';
    html += '<div class="province-head">';
    html += '<span class="province-name">' + name + '</span>';
    html += '<span class="province-tag' + (inJJJ ? '' : ' cyan') + '">' +
        (inJJJ ? '京津冀核心区' : '红色文化区域') + '</span>';
    html += '</div>';
    if (info.kicker) html += '<p class="province-lead">' + info.kicker + ' · ' + (info.brief || '') + '</p>';
    else html += '<p class="province-lead">' + (info.brief || '') + '</p>';
    if (info.chips && info.chips.length) {
        html += '<div class="province-chips">';
        info.chips.forEach(function (c) { html += '<span class="province-chip">' + c + '</span>'; });
        html += '</div>';
    }
    if (info.sections) {
        info.sections.forEach(function (s) {
            html += '<div class="province-section">';
            html += '<h4><i class="fa-solid ' + s.icon + '"></i>' + s.title + '</h4>';
            html += '<p>' + s.text + '</p>';
            html += '</div>';
        });
    }
    html += '</div>';

    content.innerHTML = html;
    // 平滑淡入：先移除再强制重排后重新添加，确保动画每次触发
    content.classList.remove('panel-fade');
    void content.offsetWidth;
    content.classList.add('panel-fade');

    if (titleEl) {
        titleEl.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + name + ' · 红色档案';
    }
}

// ------------------------------------------------------------
// Canvas 粒子网
// ------------------------------------------------------------
function initParticleField(canvas) {
    const ctx = canvas.getContext('2d');
    const COLORS = [
        { r: 63, g: 224, b: 255 },  // 青色
        { r: 73, g: 217, b: 255 },  // 淡青
        { r: 139, g: 30, b: 43 },   // 暗红
        { r: 163, g: 38, b: 38 }    // 猩红
    ];
    const LINK_DIST = 130;
    const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;

    function hostSize() {
        const host = canvas.parentElement;
        if (!host) return { w: 640, h: 480 };
        const rect = host.getBoundingClientRect();
        return { w: rect.width || 640, h: rect.height || 480 };
    }

    function makeParticle() {
        const isRed = Math.random() >= 0.72;
        const c = isRed ? COLORS[2 + Math.floor(Math.random() * 2)] : COLORS[Math.floor(Math.random() * 2)];
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7 || 0.2,
            vy: (Math.random() - 0.5) * 0.7 || 0.2,
            r: 0.7 + Math.random() * 1.6,
            c: c
        };
    }

    function spawn() {
        const count = Math.max(24, Math.min(70, Math.round((width * height) / 16000)));
        particles = [];
        for (let i = 0; i < count; i++) particles.push(makeParticle());
    }

    function resize() {
        const size = hostSize();
        width = size.w;
        height = size.h;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        spawn();
        draw();
    }

    function step() {
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < p.r || p.x > width - p.r) {
                p.vx = -p.vx;
                p.x = Math.max(p.r, Math.min(width - p.r, p.x));
            }
            if (p.y < p.r || p.y > height - p.r) {
                p.vy = -p.vy;
                p.y = Math.max(p.r, Math.min(height - p.r, p.y));
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 0.6;

        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < LINK_DIST * LINK_DIST) {
                    const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.25;
                    const isRed = a.c.r > 200 || b.c.r > 200;
                    ctx.strokeStyle = isRed
                        ? 'rgba(170, 30, 45, ' + (alpha * 0.6).toFixed(3) + ')'
                        : 'rgba(80, 220, 255, ' + (alpha * 0.7).toFixed(3) + ')';
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + p.c.r + ', ' + p.c.g + ', ' + p.c.b + ', 0.9)';
            ctx.shadowColor = 'rgba(' + p.c.r + ', ' + p.c.g + ', ' + p.c.b + ', 0.95)';
            ctx.shadowBlur = 8;
            ctx.fill();
        }
        ctx.shadowBlur = 0;
    }

    function loop() {
        if (document.hidden) {
            rafId = null;
            return;
        }
        step();
        draw();
        rafId = requestAnimationFrame(loop);
    }

    function start() {
        if (REDUCED) return; // 减少动效偏好：仅静态绘制
        if (!rafId) rafId = requestAnimationFrame(loop);
    }

    document.addEventListener('visibilitychange', function () {
        if (!document.hidden && !REDUCED && !rafId) start();
    });

    resize();
    start();

    return { resize: resize };
}

// ------------------------------------------------------------
// 资源加载（CDN，带多个备用源）
// ------------------------------------------------------------
const ECHARTS_CDN = [
    'https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js',
    'https://unpkg.com/echarts@5.5.0/dist/echarts.min.js'
];
const CHINA_GEO_CDN = [
    'https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/china.json',
    'https://unpkg.com/echarts@4.9.0/map/json/china.json'
];

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = function () { resolve(); };
        s.onerror = function () { reject(new Error('script load failed: ' + src)); };
        document.head.appendChild(s);
    });
}

async function loadEChartsLib() {
    if (window.echarts) return window.echarts;
    for (let i = 0; i < ECHARTS_CDN.length; i++) {
        try {
            await loadScript(ECHARTS_CDN[i]);
            if (window.echarts) return window.echarts;
        } catch (e) { /* 尝试下一个源 */ }
    }
    throw new Error('ECharts 加载失败（网络不可用）');
}

async function loadChinaGeo() {
    for (let i = 0; i < CHINA_GEO_CDN.length; i++) {
        try {
            const res = await fetch(CHINA_GEO_CDN[i], { cache: 'force-cache' });
            if (!res.ok) continue;
            const geo = await res.json();
            if (geo && geo.features && geo.features.length) return geo;
        } catch (e) { /* 尝试下一个源 */ }
    }
    throw new Error('中国地图 GeoJSON 加载失败（网络不可用）');
}

// ------------------------------------------------------------
// ECharts 配置
// ------------------------------------------------------------
// 京津冀三省各自的常态 / 悬浮爆发样式：同为红色系轮廓，但色相、线型、标签色互不相同，相互区分
const JJJ_STYLE = {
    北京: {
        labelColor: '#ffb3b3',
        normal: { areaColor: 'rgba(255, 51, 85, 0.30)', borderColor: '#ff3355', borderWidth: 1.8, borderType: 'solid', shadowColor: 'rgba(255, 51, 85, 0.50)', shadowBlur: 10 },
        burst:  { areaColor: 'rgba(255, 51, 85, 0.12)', borderColor: '#ff1f3d', borderWidth: 3.8, shadowColor: 'rgba(255, 31, 61, 0.95)', shadowBlur: 44 }
    },
    天津: {
        labelColor: '#ffcc99',
        normal: { areaColor: 'rgba(255, 138, 60, 0.30)', borderColor: '#ff8a3c', borderWidth: 1.8, borderType: 'dashed', shadowColor: 'rgba(255, 138, 60, 0.50)', shadowBlur: 10 },
        burst:  { areaColor: 'rgba(255, 138, 60, 0.12)', borderColor: '#ff6a00', borderWidth: 3.8, shadowColor: 'rgba(255, 106, 0, 0.95)', shadowBlur: 44 }
    },
    河北: {
        labelColor: '#ff99c8',
        normal: { areaColor: 'rgba(224, 72, 140, 0.28)', borderColor: '#ff4d94', borderWidth: 1.8, borderType: 'dotted', shadowColor: 'rgba(255, 77, 148, 0.50)', shadowBlur: 10 },
        burst:  { areaColor: 'rgba(224, 72, 140, 0.12)', borderColor: '#ff2e7e', borderWidth: 3.8, shadowColor: 'rgba(255, 46, 126, 0.95)', shadowBlur: 44 }
    }
};

// 普通省份的悬浮高亮（青蓝）
const PROVINCE_EMPHASIS_BASE = {
    areaColor: 'rgba(64, 196, 255, 0.30)',
    borderColor: '#4de1ff',
    borderWidth: 2,
    shadowColor: 'rgba(0, 229, 255, 0.85)',
    shadowBlur: 26
};

function buildMapOption() {

    return {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(6, 12, 22, 0.92)',
            borderColor: 'rgba(77, 225, 255, 0.45)',
            borderWidth: 1,
            padding: [10, 14],
            textStyle: { color: '#dbe9f6', fontSize: 12, lineHeight: 20 },
            extraCssText: 'backdrop-filter: blur(8px); box-shadow: 0 0 24px rgba(0,229,255,.25);',
            formatter: function (p) {
                const n = p.name || '';
                const info = getProvinceInfo(n);
                const inJJJ = JINGJINJI.indexOf(n) >= 0;
                return (
                    '<div style="font-weight:700;letter-spacing:.08em;color:#fff;font-size:13px;' +
                    (inJJJ ? 'text-shadow:0 0 12px rgba(255,59,59,.8);' : 'text-shadow:0 0 12px rgba(77,225,255,.6);') + '">' + n + '</div>' +
                    '<div style="margin-top:4px;color:#9fb6cc;max-width:230px;white-space:normal;line-height:1.7;">' + (info.brief || '') + '</div>'
                );
            }
        },
        geo: {
            map: 'china',
            roam: false,
            zoom: 1.06,
            layoutCenter: ['50%', '52%'],
            layoutSize: '112%',
            label: {
                show: true,
                color: 'rgba(150, 221, 255, 0.55)',
                fontSize: 10,
                letterSpacing: 2
            },
            itemStyle: {
                areaColor: 'rgba(13, 44, 74, 0.38)',
                borderColor: 'rgba(64, 196, 255, 0.68)',
                borderWidth: 0.9,
                shadowColor: 'rgba(0, 229, 255, 0.35)',
                shadowBlur: 10
            },
            emphasis: {
                itemStyle: PROVINCE_EMPHASIS_BASE,
                label: { color: '#eaffff', fontSize: 12 }
            },
            regions: JINGJINJI.map(function (name) {
                const st = JJJ_STYLE[name];
                return { name: name, itemStyle: st.normal, label: { color: st.labelColor } };
            }),
            tooltip: { show: true }
        }
    };
}

// ------------------------------------------------------------
// 初始化地图模块
// ------------------------------------------------------------
function initChinaMap() {
    const stage = document.getElementById('mapStage');
    if (!stage) return;

    const canvas = document.getElementById('particleCanvas');
    const particleField = canvas ? initParticleField(canvas) : null;

    const mapEl = document.getElementById('chinaMap');
    const loadingEl = document.getElementById('mapLoading');
    const errorEl = document.getElementById('mapError');
    if (!mapEl) return;

    function showError(message) {
        if (loadingEl) loadingEl.classList.add('hidden');
        if (errorEl) {
            const msg = errorEl.querySelector('p');
            if (msg && message) msg.textContent = message;
            errorEl.hidden = false;
            errorEl.style.display = 'flex';
        }
    }

    Promise.all([loadEChartsLib(), loadChinaGeo()])
        .then(function (results) {
            const echarts = results[0];
            const geoJson = results[1];
            const chart = echarts.init(mapEl, null, { renderer: 'canvas' });
            echarts.registerMap('china', geoJson);
            chart.setOption(buildMapOption());

            const regionNames = {};
            geoJson.features.forEach(function (f) {
                if (f.properties && f.properties.name) regionNames[f.properties.name] = true;
            });

            // 京津冀经纬度包围盒（转像素后用于“鼠标靠近即高亮”）
            const jjjGeoBoxes = {};
            (function () {
                function walk(coords, box) {
                    for (let i = 0; i < coords.length; i++) {
                        const c = coords[i];
                        if (Array.isArray(c) && typeof c[0] === 'number') {
                            if (c[0] < box.minLng) box.minLng = c[0];
                            if (c[0] > box.maxLng) box.maxLng = c[0];
                            if (c[1] < box.minLat) box.minLat = c[1];
                            if (c[1] > box.maxLat) box.maxLat = c[1];
                        } else if (Array.isArray(c)) {
                            walk(c, box);
                        }
                    }
                }
                geoJson.features.forEach(function (f) {
                    const n = f.properties && f.properties.name;
                    if (JINGJINJI.indexOf(n) >= 0 && f.geometry && f.geometry.coordinates) {
                        const box = { minLng: 180, maxLng: -180, minLat: 90, maxLat: -90 };
                        walk(f.geometry.coordinates, box);
                        jjjGeoBoxes[n] = box;
                    }
                });
            })();

            const countEl = document.getElementById('panelCount');
            if (countEl) countEl.textContent = '共 ' + geoJson.features.length + ' 个省级区域 · 点击查看红色档案';

            // 点击省份 → 右侧面板
            chart.on('click', function (params) {
                if (!params || !params.name) return;
                const page = JJJ_PAGES[params.name];
                if (page) {
                    window.location.href = page;
                    return;
                }
                if (regionNames[params.name]) {
                    renderProvincePanel(params.name);
                }
            });

            // 京津冀悬浮 → 各自颜色的轮廓爆发（填充变透、边框加粗、强外发光）
            // 动态改写 geo.emphasis（作用于当前悬浮省份），让该省轮廓在粒子背景上高亮凸显
            const jjjHover = new Set();
            const setJJJBoost = function (name, active) {
                const st = active && JJJ_STYLE[name];
                chart.setOption({
                    geo: {
                        emphasis: {
                            itemStyle: st ? st.burst : PROVINCE_EMPHASIS_BASE,
                            label: active
                                ? { color: '#ffe3e6', fontSize: 12, fontWeight: 700 }
                                : { color: '#eaffff', fontSize: 12 }
                        }
                    }
                });
            };

            // 悬浮（进入省界）与“靠近”（距离包围盒 46px 内）共用同一个高亮状态
            let currentBoost = null;
            const applyBoost = function (name) {
                if (name === currentBoost) return;
                if (currentBoost) setJJJBoost(currentBoost, false);
                currentBoost = name;
                if (name) setJJJBoost(name, true);
            };
            const geoHover = new Set();
            let nearName = null;

            chart.on('mouseover', function (params) {
                if (params && params.componentType === 'geo' && JINGJINJI.indexOf(params.name) >= 0) {
                    geoHover.add(params.name);
                    applyBoost(params.name);
                }
            });
            chart.on('mouseout', function (params) {
                if (params && params.name && JINGJINJI.indexOf(params.name) >= 0) {
                    geoHover.delete(params.name);
                    if (geoHover.size === 0) applyBoost(nearName);
                }
            });
            chart.on('globalout', function () {
                geoHover.clear();
                applyBoost(null);
            });

            // 鼠标靠近京津冀（不进入省界内）即高亮：靠近像素包围盒 46px 内触发
            const jjjPixelBoxes = {};
            const NEAR_DIST = 46;
            const ensurePixelBoxes = function () {
                if (Object.keys(jjjPixelBoxes).length) return true;
                let ok = true;
                Object.keys(jjjGeoBoxes).forEach(function (name) {
                    const b = jjjGeoBoxes[name];
                    const p1 = chart.convertToPixel({ geoIndex: 0 }, [b.minLng, b.minLat]);
                    const p2 = chart.convertToPixel({ geoIndex: 0 }, [b.maxLng, b.maxLat]);
                    if (!p1 || !p2 || isNaN(p1[0]) || isNaN(p2[0])) { ok = false; return; }
                    jjjPixelBoxes[name] = [
                        Math.min(p1[0], p2[0]), Math.min(p1[1], p2[1]),
                        Math.max(p1[0], p2[0]), Math.max(p1[1], p2[1])
                    ];
                });
                return ok;
            };
            chart.getZr().on('mousemove', function (e) {
                if (!ensurePixelBoxes()) return;
                let near = null;
                for (let i = 0; i < JINGJINJI.length; i++) {
                    const name = JINGJINJI[i];
                    const b = jjjPixelBoxes[name];
                    if (!b) continue;
                    const dx = e.offsetX < b[0] ? b[0] - e.offsetX : (e.offsetX > b[2] ? e.offsetX - b[2] : 0);
                    const dy = e.offsetY < b[1] ? b[1] - e.offsetY : (e.offsetY > b[3] ? e.offsetY - b[3] : 0);
                    if (Math.sqrt(dx * dx + dy * dy) <= NEAR_DIST) { near = name; break; }
                }
                if (near === nearName) return;
                nearName = near;
                if (geoHover.size === 0) applyBoost(nearName);
            });
            if (mapEl) {
                mapEl.addEventListener('mouseleave', function () {
                    nearName = null;
                    geoHover.clear();
                    applyBoost(null);
                });
            }

            if (window.ResizeObserver) {
                new ResizeObserver(function () { chart.resize(); }).observe(mapEl.parentElement);
            }
            window.addEventListener('resize', function () {
                chart.resize();
                if (particleField) particleField.resize();
            });

            if (loadingEl) loadingEl.classList.add('hidden');
            window.__chinaMapChart = chart;
        })
        .catch(function (err) {
            console.warn('[china-map]', err);
            showError('地图资源加载失败：' + err.message + '。本页需要联网（CDN）加载 ECharts 与地图数据，请检查网络后刷新。');
        });
}

document.addEventListener('DOMContentLoaded', initChinaMap);
// ============================================
// 虚拟展厅 - 全景展示功能（0基础版）
// ============================================

// 1. 展厅数据
const exhibitionsData = {
    xibaipo: {
        title: "西柏坡纪念馆",
        description: "中国革命最后一个农村指挥所，中共中央在此指挥了三大战役，召开了七届二中全会。",
        image: "images/panorama/xibaipo.jpg", // 你的图片路径
        hotspots: [
            {
                id: 1,
                title: "七届二中全会会场",
                description: "1949年3月5日至13日，中共七届二中全会在此召开，毛泽东提出'两个务必'重要论述。",
                position: { yaw: 120, pitch: -5 }
            },
            {
                id: 2,
                title: "毛泽东旧居",
                description: "毛泽东同志在西柏坡期间的住所，条件简陋但战略部署影响深远。",
                position: { yaw: 45, pitch: 10 }
            },
            {
                id: 3,
                title: "中央军委作战室",
                description: "三大战役的指挥中枢，被誉为'世界上最小的指挥所'。",
                position: { yaw: 200, pitch: 0 }
            }
        ],
        audio: "西柏坡是新中国诞生的摇篮..."
    },
    yanan: {
        title: "延安革命纪念馆",
        description: "中共中央在延安十三年的历史见证，中国革命从胜利走向胜利的圣地。",
        image: "images/panorama/yanan.jpg",
        hotspots: [
            {
                id: 4,
                title: "宝塔山",
                description: "延安的标志性建筑，革命圣地的象征。",
                position: { yaw: 90, pitch: 0 }
            }
        ]
    },
    lugouqiao: {
        title: "卢沟桥事变遗址",
        description: "全民族抗战的爆发地，中国人民抗日战争纪念馆所在地。",
        image: "images/panorama/lugouqiao.jpg",
        hotspots: [
            {
                id: 5,
                title: "卢沟桥石狮",
                description: "'卢沟桥的狮子数不清'，见证了七七事变的爆发。",
                position: { yaw: 180, pitch: -5 }
            }
        ]
    }
};

// 2. 加载全景展厅
function loadPanorama(exhibitionId) {
    console.log("加载展厅:", exhibitionId);
    
    const exhibition = exhibitionsData[exhibitionId];
    if (!exhibition) {
        alert("展厅数据加载失败，请稍后重试");
        return;
    }
    
    // 更新按钮状态
    document.querySelectorAll('.exhibition-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 更新展厅信息
    document.getElementById('exhibitionTitle').textContent = exhibition.title;
    document.getElementById('exhibitionDesc').textContent = exhibition.description;
    
    // 显示加载状态
    const container = document.getElementById('panoramaContainer');
    container.innerHTML = `
        <div class="loading-panorama">
            <div class="loading-spinner"></div>
            <p>正在加载 ${exhibition.title}...</p>
        </div>
    `;
    
    // 延迟加载全景图（模拟网络请求）
    setTimeout(() => {
        initPanoramaViewer(exhibition);
    }, 800);
}

// 3. 初始化全景查看器（最简单版本）
function initPanoramaViewer(exhibition) {
    const container = document.getElementById('panoramaContainer');
    
    // 如果没有全景图片，显示替代内容
    if (!exhibition.image || exhibition.image.includes('panorama/')) {
        container.innerHTML = `
            <div style="
                width: 100%;
                height: 500px;
                background: linear-gradient(135deg, #2c3e50, #34495e);
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                text-align: center;
                padding: 40px;
            ">
                <div style="font-size: 60px; margin-bottom: 20px;"><i class="fa-solid fa-landmark"></i></div>
                <h3 style="margin-bottom: 15px;">${exhibition.title}</h3>
                <p style="margin-bottom: 25px; color: #ccc; max-width: 500px;">
                    ${exhibition.description}
                </p>
                <p style="color: #999; font-size: 14px;">
                    提示：请将全景图片放入 images/panorama/ 文件夹<br>
                    命名为 ${exhibition.title.substring(0, 2)}.jpg
                </p>
                
                <!-- 模拟热点 -->
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 30%;
                    width: 30px;
                    height: 30px;
                    background: rgba(183, 28, 28, 0.8);
                    border: 2px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    animation: pulse 2s infinite;
                " onclick="showHotspotInfo(1)" title="点击查看详情"></div>
                
                <div style="
                    position: absolute;
                    top: 40%;
                    right: 40%;
                    width: 30px;
                    height: 30px;
                    background: rgba(183, 28, 28, 0.8);
                    border: 2px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    animation: pulse 2s infinite;
                    animation-delay: 0.5s;
                " onclick="showHotspotInfo(2)" title="点击查看详情"></div>
            </div>
        `;
        return;
    }
    
    // 如果有全景图，使用Pannellum（需要引入库）
    // 这里先使用模拟效果
    container.innerHTML = `
        <div class="panorama-viewer">
            <img src="${exhibition.image}" 
                 alt="${exhibition.title}" 
                 style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
            
            <!-- 热点标记 -->
            ${exhibition.hotspots.map(hotspot => `
                <div class="hotspot-marker" 
                     style="position:absolute; 
                            top: ${50 + hotspot.position.pitch}%; 
                            left: ${50 + hotspot.position.yaw/3.6}%;
                            transform:translate(-50%,-50%);"
                     onclick="showHotspotInfo(${hotspot.id})">
                    <div class="hotspot-dot"></div>
                    <div class="hotspot-label">${hotspot.title}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // 添加热点样式
    const style = document.createElement('style');
    style.textContent = `
        .panorama-viewer {
            position: relative;
            width: 100%;
            height: 500px;
            overflow: hidden;
            border-radius: 12px;
        }
        .hotspot-marker {
            cursor: pointer;
            z-index: 100;
        }
        .hotspot-dot {
            width: 25px;
            height: 25px;
            background: rgba(183, 28, 28, 0.9);
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            animation: pulse 2s infinite;
        }
        .hotspot-label {
            position: absolute;
            top: -35px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        }
        .hotspot-marker:hover .hotspot-label {
            opacity: 1;
        }
    `;
    container.appendChild(style);
}

// 4. 显示热点信息
function showHotspotInfo(hotspotId) {
    // 找到对应的热点数据
    let hotspotData = null;
    let exhibitionName = '';
    
    for (const [key, exhibition] of Object.entries(exhibitionsData)) {
        const found = exhibition.hotspots.find(h => h.id === hotspotId);
        if (found) {
            hotspotData = found;
            exhibitionName = exhibition.title;
            break;
        }
    }
    
    if (!hotspotData) return;
    
    // 显示信息卡片
    const cardHTML = `
        <div class="hotspot-card">
            <div class="card-header">
                <h4><i class="fa-solid fa-location-dot"></i> ${hotspotData.title}</h4>
                <button onclick="closeHotspotCard()" class="close-card">×</button>
            </div>
            <div class="card-body">
                <p>${hotspotData.description}</p>
                <p style="font-size:12px; color:#999; margin-top:10px;">
                    所属展厅：${exhibitionName}
                </p>
            </div>
            <div class="card-footer">
                <button onclick="markHotspotVisited(${hotspotId})" class="mark-btn">
                    <i class="fa-solid fa-check"></i> 标记为已学习
                </button>
            </div>
        </div>
    `;
    
    // 移除现有的卡片
    const existingCard = document.querySelector('.hotspot-card');
    if (existingCard) existingCard.remove();
    
    // 添加新卡片
    document.body.insertAdjacentHTML('beforeend', cardHTML);
    
    // 添加卡片样式
    const cardStyle = document.createElement('style');
    cardStyle.textContent = `
        .hotspot-card {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 9999;
            width: 90%;
            max-width: 400px;
            animation: fadeIn 0.3s ease;
        }
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        .card-header h4 {
            margin: 0;
            color: #b71c1c;
        }
        .close-card {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        .close-card:hover {
            background: #f5f5f5;
            color: #333;
        }
        .card-body p {
            color: #333;
            line-height: 1.6;
            margin: 0;
        }
        .card-footer {
            margin-top: 20px;
            text-align: right;
        }
        .mark-btn {
            background: #27ae60;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    `;
    document.head.appendChild(cardStyle);
}

// 5. 其他控制函数
function closeHotspotCard() {
    const card = document.querySelector('.hotspot-card');
    if (card) card.remove();
}

function markHotspotVisited(hotspotId) {
    alert(`已标记点位 ${hotspotId} 为已学习！\n\n学习进度已更新。`);
    closeHotspotCard();
}

function enterFullscreen() {
    const panorama = document.querySelector('.panorama-container');
    if (panorama.requestFullscreen) {
        panorama.requestFullscreen();
    }
    alert("已进入全屏模式，按ESC键退出");
}

function toggleAudioGuide() {
    alert("语音导览功能开发中...\n\n设计内容：讲述展厅历史背景和革命故事");
}

function showHotspotList() {
    const currentExhibition = document.querySelector('.exhibition-btn.active');
    if (!currentExhibition) return;
    
    const exhibitionId = currentExhibition.textContent.includes('西柏坡') ? 'xibaipo' : 
                       currentExhibition.textContent.includes('延安') ? 'yanan' : 'lugouqiao';
    
    const exhibition = exhibitionsData[exhibitionId];
    
    let listHTML = `<h3>${exhibition.title} - 所有历史点位</h3><ul>`;
    exhibition.hotspots.forEach(hotspot => {
        listHTML += `<li><strong>${hotspot.title}</strong><br>${hotspot.description}</li>`;
    });
    listHTML += '</ul>';
    
    alert(listHTML);
}

function takeScreenshot() {
    alert("[截图] 展厅截图已保存！\n\n可以分享给同学或用于学习报告。");
}

function startExhibitionTask() {
    alert("[目标] 学习任务开始！\n\n请在展厅中找到以下3个重要点位：\n1. 七届二中全会会场\n2. 毛泽东旧居\n3. 中央军委作战室\n\n每找到一个点位，点击标记了解详情。");
}

// 6. 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 如果没有全景图片文件夹，创建提示
    setTimeout(() => {
        if (!document.querySelector('.panorama-container img')) {
            loadPanorama('xibaipo');
        }
    }, 1000);
});
// ============================================
// 虚拟展厅 - 嵌入720云功能（简化版）
// ============================================

// 展厅数据配置 - 只保留两个展厅
const exhibitionsConfig = {
    xibaipo: {
        title: "西柏坡纪念馆",
        url: "https://www.720yun.com/vr/1eaj5Oyarn9",
        description: "中国革命最后一个农村指挥所，七届二中全会会址",
        address: "河北省石家庄市平山县",
        year: "1948-1949年",
        tips: [
            "观察七届二中全会会场布置",
            "了解三大战役指挥过程", 
            "感受'两个务必'精神内涵"
        ]
    },
    yanan: {
        title: "延安革命纪念馆",
        url: "https://www.720yun.com/t/c7vkteqmrim?scene_id=70013971",
        description: "中共中央在延安十三年的历史见证，中国革命从胜利走向胜利的圣地",
        address: "陕西省延安市",
        year: "1937-1948年",
        tips: [
            "了解延安整风运动历史",
            "观察毛泽东旧居陈设",
            "学习延安精神核心内涵"
        ]
    }
};

// 当前展厅ID
let currentExhibitionId = 'xibaipo';

// ============================================
// 加载展厅（修正版）
// ============================================
function loadExhibition(exhibitionId, event) {
    console.log('切换展厅:', exhibitionId);
    
    // 安全处理：如果有event参数才更新按钮样式
    if (event && event.target && event.target.classList) {
        document.querySelectorAll('.exhibition-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    } else {
        // 如果没有event，根据exhibitionId设置active
        document.querySelectorAll('.exhibition-btn').forEach(btn => {
            const isActive = (exhibitionId === 'xibaipo' && btn.textContent.includes('西柏坡')) ||
                            (exhibitionId === 'yanan' && btn.textContent.includes('延安'));
            btn.classList.toggle('active', isActive);
        });
    }
    
    const exhibition = exhibitionsConfig[exhibitionId];
    if (!exhibition) return;
    
    // 清空容器
    const container = document.getElementById('exhibitionContainer');
    if (!container) return;
    
    container.innerHTML = '';
    container.style.background = 'black';
    
    // 加载iframe
    setTimeout(() => {
        const iframe = document.createElement('iframe');
        iframe.id = '720yunIframe';
        iframe.src = exhibition.url;
        iframe.title = exhibition.title + ' - 360度虚拟展厅';
        iframe.allow = 'fullscreen; vr; xr-spatial-tracking';
        iframe.allowFullscreen = true;
        iframe.frameBorder = '0';
        iframe.scrolling = 'no';
        iframe.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        `;
        
        container.appendChild(iframe);
        updateSidebarInfo(exhibition);
        
        // 安全调用记录函数
        if (typeof recordExhibitionVisit === 'function') {
            recordExhibitionVisit(exhibitionId);
        }
    }, 300);
}

// 更新侧边栏信息
function updateSidebarInfo(exhibition) {
    const sidebar = document.querySelector('.exhibition-sidebar');
    if (!sidebar) return;
    
    // 更新标题
    sidebar.querySelector('h3').textContent = exhibition.title;
    
    // 更新信息内容
    let infoHTML = `
        <p><strong><i class="fa-solid fa-location-dot"></i> 地址：</strong>${exhibition.address}</p>
        <p><strong><i class="fa-solid fa-calendar-days"></i> 年代：</strong>${exhibition.year}</p>
        <p><strong><i class="fa-solid fa-book"></i> 简介：</strong>${exhibition.description}</p>
    `;
    
    sidebar.querySelector('.exhibition-info').innerHTML = infoHTML;
    
    // 更新学习要点
    let tipsHTML = '<h4><i class="fa-solid fa-bullseye"></i> 参观学习要点</h4><ul>';
    exhibition.tips.forEach(tip => {
        tipsHTML += `<li>${tip}</li>`;
    });
    tipsHTML += '</ul>';
    
    const tipsElement = sidebar.querySelector('.learning-tips');
    if (tipsElement) {
        tipsElement.innerHTML = tipsHTML;
    }
}

// 辅助功能函数
function enterFullscreen() {
    const iframe = document.getElementById('720yunIframe');
    if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe && iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else {
        alert("点击展厅内部的全屏按钮效果更好");
    }
}

function openInNewWindow() {
    const exhibition = exhibitionsConfig[currentExhibitionId];
    if (exhibition && exhibition.url) {
        window.open(exhibition.url, '_blank', 'width=1200,height=800');
    }
}

function recordVisit() {
    alert("[完成] 参观记录已保存！\n\n学习进度已更新，继续加油！");
    // 这里可以集成到你的学习进度系统
}

function toggleGuide() {
    const exhibition = exhibitionsConfig[currentExhibitionId];
    const guideText = `
        ${exhibition.title}参观指南：
        
        1. 鼠标操作：
           • 左键拖动 - 旋转视角
           • 滚轮滚动 - 缩放画面
           • 点击地面箭头 - 移动位置
        
        2. 移动端操作：
           • 单指拖动 - 旋转视角
           • 双指缩放 - 调整远近
        
        3. 学习建议：
           • 每个展厅建议参观5-10分钟
           • 关注历史文物和场景布置
           • 结合侧边栏信息理解历史背景
    `;
    alert(guideText);
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    // 默认加载西柏坡展厅
    setTimeout(() => {
        // 直接加载，不显示加载提示
        const container = document.getElementById('exhibitionContainer');
        const exhibition = exhibitionsConfig['xibaipo'];
        
        if (exhibition) {
            const iframe = document.createElement('iframe');
            iframe.id = '720yunIframe';
            iframe.src = exhibition.url;
            iframe.title = exhibition.title + ' - 360度虚拟展厅';
            iframe.allow = 'fullscreen; vr';
            iframe.allowFullscreen = true;
            iframe.frameBorder = '0';
            iframe.scrolling = 'no';
            iframe.style.cssText = `
                width: 100%;
                height: 100%;
                border: none;
                display: block;
            `;
            
            container.appendChild(iframe);
            updateSidebarInfo(exhibition);
        }
    }, 500);
});
// ============================================
// DeepSeek AI助手
// ============================================
const DEEPSEEK_API_KEY = 'sk-9a4891b1ca1749bbad994465b44d52dc'; 

// 在页面上添加AI助手浮窗
function addAIAssistant() {
    // 先看看有没有已经加过了
    if (document.getElementById('ai-assistant')) return;
    
    // 创建浮窗HTML
    const aiHTML = `
        <div id="ai-assistant" style="
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
        ">
            <!-- 聊天按钮 -->
            <button onclick="toggleAIChat()" style="
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #b71c1c;
                border: none;
                box-shadow: 0 4px 12px rgba(183,28,28,0.3);
                cursor: pointer;
                font-size: 30px;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            ">
                <i class="fa-solid fa-robot"></i>
            </button>
            
            <!-- 聊天窗口（默认隐藏） -->
            <div id="ai-chat-window" style="
                display: none;
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                overflow: hidden;
                border: 1px solid #eee;
            ">
            <!-- 窗口头部 - 加了缩放按钮 -->
<div style="
    background: #b71c1c;
    color: white;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
">
    <div>
        <span style="font-weight: bold; font-size: 16px;"><i class="fa-solid fa-robot"></i> 京津冀红色文化助手</span>
        <div style="font-size: 11px; opacity: 0.9;">只回答红色文化相关问题</div>
    </div>
    <div style="display: flex; gap: 8px;">
        <!-- 缩小按钮 -->
        <button onclick="changeWindowSize('small'); event.stopPropagation();" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        " title="小窗口">−</button>
        
        <!-- 中等按钮 -->
        <button onclick="changeWindowSize('medium'); event.stopPropagation();" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        " title="中窗口"><i class="fa-solid fa-record-vinyl"></i></button>
        
        <!-- 放大按钮 -->
        <button onclick="changeWindowSize('large'); event.stopPropagation();" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        " title="大窗口">+</button>
        
        <!-- 关闭按钮 -->
        <button onclick="toggleAIChat()" style="
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
        ">×</button>
    </div>
</div>
                
                <!-- 聊天记录区 -->
                <div id="ai-chat-messages" style="
                    height: 360px;
                    overflow-y: auto;
                    padding: 15px;
                    background: #f5f5f5;
                ">
                    <div style="
                        background: white;
                        padding: 10px;
                        border-radius: 10px;
                        margin-bottom: 10px;
                        max-width: 80%;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    ">
                        <i class="fa-solid fa-hand"></i> 你好！我是你的红色文化学习助手。有什么关于京津冀红色历史、革命故事的问题都可以问我！
                    </div>
                </div>
                
                <!-- 输入区 -->
                <div style="
                    padding: 15px;
                    background: white;
                    border-top: 1px solid #eee;
                    display: flex;
                    gap: 10px;
                ">
                    <input id="ai-user-input" type="text" placeholder="输入你的问题..." style="
                        flex: 1;
                        padding: 10px;
                        border: 2px solid #ddd;
                        border-radius: 8px;
                        outline: none;
                    ">
                    <button onclick="sendToDeepSeek()" style="
                        background: #b71c1c;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: bold;
                    ">发送</button>
                </div>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', aiHTML);
}

// 切换聊天窗口显示/隐藏
function toggleAIChat() {
    const window = document.getElementById('ai-chat-window');
    if (window) {
        window.style.display = window.style.display === 'none' ? 'block' : 'none';
    }
}

// 发送消息给DeepSeek
async function sendToDeepSeek() {
    const input = document.getElementById('ai-user-input');
    const question = input.value.trim();
    
    if (!question) {
        alert('请输入问题');
        return;
    }
    
    // 清空输入框
    input.value = '';
    
    // 显示用户消息
    addMessage(question, 'user');
    
    // 显示"正在输入"提示
    const loadingId = showLoading();
    
    try {
        // 调用DeepSeek API
        const response = await callDeepSeekAPI(question);
        
        // 移除"正在输入"
        removeLoading(loadingId);
        
        // 显示AI回复
        addMessage(response, 'ai');
        
    } catch (error) {
        // 移除"正在输入"
        removeLoading(loadingId);
        
        // 显示错误消息
        addMessage('抱歉，我现在有点忙，请稍后再试。', 'ai');
        console.error('AI出错：', error);
    }
}

// 调用DeepSeek API
async function callDeepSeekAPI(question) {
    // deepseek API密钥
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: [
                {
                    role: 'system',
                    content: '你是一个专业的红色文化学习助手，专门回答关于京津冀中国革命历史、红色文化、革命遗址、革命人物等方面的问题。回答要准确、生动、有教育意义。'
                },
                {
                    role: 'user',
                    content: question
                }
            ],
            temperature: 0.7,
            max_tokens: 1000
        })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}

// 在聊天窗口添加一条消息
function addMessage(text, sender) {
    const messagesDiv = document.getElementById('ai-chat-messages');
    if (!messagesDiv) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        margin-bottom: 15px;
        display: flex;
        ${sender === 'user' ? 'justify-content: flex-end;' : 'justify-content: flex-start;'}
    `;
    
    messageDiv.innerHTML = `
        <div style="
            max-width: 80%;
            padding: 12px;
            border-radius: 15px;
            background: ${sender === 'user' ? '#b71c1c' : 'white'};
            color: ${sender === 'user' ? 'white' : '#333'};
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        ">
            ${text}
        </div>
    `;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 显示"正在输入"提示
function showLoading() {
    const messagesDiv = document.getElementById('ai-chat-messages');
    const id = 'loading-' + Date.now();
    
    const loadingDiv = document.createElement('div');
    loadingDiv.id = id;
    loadingDiv.style.cssText = `
        margin-bottom: 15px;
        display: flex;
        justify-content: flex-start;
    `;
    
    loadingDiv.innerHTML = `
        <div style="
            background: white;
            padding: 12px 20px;
            border-radius: 15px;
            color: #999;
        ">
            <span style="display: inline-block; animation: dots 1.5s infinite;">.</span>
            <span style="display: inline-block; animation: dots 1.5s infinite 0.5s;">.</span>
            <span style="display: inline-block; animation: dots 1.5s infinite 1s;">.</span>
        </div>
    `;
    
    messagesDiv.appendChild(loadingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    return id;
}

// 移除"正在输入"
function removeLoading(id) {
    const loading = document.getElementById(id);
    if (loading) loading.remove();
}

// 添加上面的动画样式
const aiStyle = document.createElement('style');
aiStyle.textContent = `
    @keyframes dots {
        0%, 100% { opacity: 0; transform: translateY(0); }
        50% { opacity: 1; transform: translateY(-5px); }
    }
`;
document.head.appendChild(aiStyle);
// 改变窗口大小
function changeWindowSize(size) {
    const window = document.getElementById('ai-chat-window');
    if (!window) return;
    
    switch(size) {
        case 'small':
            window.style.width = '300px';
            window.style.height = '450px';
            break;
        case 'medium':
            window.style.width = '400px';
            window.style.height = '550px';
            break;
        case 'large':
            window.style.width = '600px';
            window.style.height = '700px';
            break;
    }
}

// 页面加载
setTimeout(addAIAssistant, 2000);
// ===== 新增：登录系统代码（添加在这里）=====

// ============================================
// 用户认证系统
// ============================================

// 当前登录用户（CloudBase UserInfo，未登录时为 null）
let currentUser = null;

// ============================================
// CloudBase 初始化
// ============================================

// CloudBase 环境 ID（在云开发控制台 -> 环境设置 中查看）
const CLOUDBASE_ENV_ID = 'dry-aardvark-d7gimp6kg13904822';

// CloudBase 应用 / 认证 / 数据库实例（懒初始化）
let cloudbaseApp = null;
let auth = null;
let db = null;

// 注册时"获取验证码"接口返回的 verification_id
let registerVerificationId = null;

// 验证码倒计时定时器
let sendCodeCountdownTimer = null;

// 初始化 CloudBase SDK（优先用 CDN 全量包，失败时用本地 cloudbase.full.js）
function initCloudbase() {
    if (cloudbaseApp) return cloudbaseApp;

    if (typeof cloudbase === 'undefined' || typeof cloudbase.init !== 'function') {
        console.error('[CloudBase] SDK 未加载：请检查网络，或确认 cloudbase.full.js 已正确引入');
        return null;
    }

    cloudbaseApp = cloudbase.init({ env: CLOUDBASE_ENV_ID });
    auth = cloudbaseApp.auth();
    db = cloudbaseApp.database();
    return cloudbaseApp;
}

// 读取当前登录用户（优先走网络刷新，失败时回退本地登录态）
async function fetchCurrentUser() {
    if (!auth) return null;
    try {
        const user = await auth.getCurrentUser();
        if (user) return user;
    } catch (err) {
        console.warn('[CloudBase] getCurrentUser 刷新失败，尝试本地登录态', err);
    }
    try {
        return (typeof auth.currentUser !== 'undefined' && auth.currentUser) || null;
    } catch (err) {
        return null;
    }
}

// 初始化用户系统：恢复 CloudBase 登录态并刷新界面
async function initAuthSystem() {
    if (!initCloudbase()) return;

    // file:// 直接打开时云开发请求必被拦截，先给出明确提示，避免误报
    if (location.protocol === 'file:') {
        console.warn('[CloudBase] 检测到 file:// 直接打开页面，云开发接口请求会被安全来源拦截。请用 http://localhost 方式访问（如 python -m http.server 5000）。');
        currentUser = (auth && auth.currentUser) || null;
        updateUIForLoggedInUser();
        updateQASection();
        return;
    }

    try {
        currentUser = await fetchCurrentUser();
    } catch (err) {
        console.warn('[CloudBase] 获取登录状态失败', err);
        currentUser = null;
    }
    updateUIForLoggedInUser();
    updateQASection();
}

// ============================================
// 认证通用工具
// ============================================

// 按钮加载态
function setButtonLoading(btn, loading, loadingText) {
    if (!btn) return;
    if (loading) {
        if (!btn.dataset.originalHtml) btn.dataset.originalHtml = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = loadingText || '处理中...';
    } else {
        btn.disabled = false;
        if (btn.dataset.originalHtml) btn.innerHTML = btn.dataset.originalHtml;
        delete btn.dataset.originalHtml;
    }
}

// 是否为网络层错误（CORS 拦截 / 断网 / DNS 失败等，浏览器里通常表现为 "Failed to fetch"）
function isNetworkError(err) {
    if (!err) return false;
    const msg = String(err.message || err.errMsg || '');
    return err instanceof TypeError ||
        /failed to fetch|networkerror|load failed|network request failed|net::err/i.test(msg);
}

// 直接双击打开 HTML（file://）时，云开发跨域请求会被安全来源拦截，给出可操作提示
function checkLocalFileProtocol(actionName) {
    if (location.protocol === 'file:') {
        showAuthMessage(
            (actionName || '操作') + '失败：当前是直接双击打开的 HTML 文件（file://），浏览器会拦截云开发的跨域请求。' +
            '请改用本地 http 方式访问，例如在项目目录执行 “python -m http.server 5000”，然后打开 http://localhost:5000 ；部署后再把网站域名加入云端「安全来源/安全域名」。',
            'error'
        );
        return true;
    }
    return false;
}

// 把 CloudBase 抛出的错误翻译成友好的中文提示
function getAuthErrorMessage(err, fallback) {
    if (!err) return fallback;
    if (isNetworkError(err)) {
        return '网络请求被拦截：CloudBase 只允许「安全来源」白名单内的域名访问。' +
            (location.protocol === 'file:'
                ? '你现在是直接双击打开的 HTML（file://），请改用 http://localhost 访问（如 python -m http.server 5000）。'
                : '请把当前访问域名（' + location.origin + '）加入 CloudBase 控制台的安全来源/安全域名后重试。');
    }
    const code = String(err.code || err.error_code || '');
    const msg = String(err.message || err.error_description || err.detail || '');

    if (/verification/i.test(code + msg)) {
        return msg || '验证码错误或已过期，请重新获取';
    }
    if (/NOT_EXIST|USER_NOT_FOUND|not found/i.test(code + msg)) {
        return msg || '用户不存在，请先注册';
    }
    if (/ALREADY|EXIST|already|exist/i.test(code + msg) && /account|user|email/i.test(code + msg)) {
        return msg || '该邮箱已注册，请直接登录';
    }
    if (/password|密码/i.test(code + msg)) {
        return msg || '用户名或密码错误';
    }
    return msg || fallback;
}

// 显示登录/注册模态框
function showAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭登录/注册模态框
function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 切换登录/注册模式
function switchAuthMode(mode) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authTitle = document.getElementById('authTitle');
    const switchBtn = document.getElementById('authSwitchBtn');
    const switchText = document.getElementById('authSwitchText');

    if (mode === 'register' || loginForm.style.display !== 'none') {
        // 切换到注册
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        authTitle.textContent = '注册';
        switchText.textContent = '已有账号？';
        switchBtn.textContent = '立即登录';
    } else {
        // 切换到登录
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        authTitle.textContent = '登录';
        switchText.textContent = '还没有账号？';
        switchBtn.textContent = '立即注册';
    }
}

// ============================================
// 登录（账号密码）
// ============================================

// 处理登录
async function handleLogin(event) {
    event.preventDefault();

    if (checkLocalFileProtocol('登录')) return;
    if (!initCloudbase()) {
        showAuthMessage('CloudBase SDK 未加载，请检查网络后刷新页面', 'error');
        return;
    }

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        showAuthMessage('请输入用户名和密码', 'error');
        return;
    }

    const submitBtn = document.querySelector('#loginForm .auth-submit-btn');
    setButtonLoading(submitBtn, true, '登录中...');

    try {
        // 账号密码登录（username 支持用户名 / 邮箱 / 手机号）
        await auth.signIn({ username, password });

        currentUser = await fetchCurrentUser();
        updateUIForLoggedInUser();
        updateQASection();
        closeAuthModal();

        const name = (currentUser && currentUser.username) || username;
        showAuthMessage(`欢迎回来，${name}！`, 'success');
    } catch (err) {
        console.error('[CloudBase] 登录失败', err);
        showAuthMessage(getAuthErrorMessage(err, '登录失败，请检查用户名和密码'), 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

// ============================================
// 注册（邮箱验证码 + 用户名 + 密码）
// ============================================

// 验证码发送倒计时
function startSendCodeCountdown(seconds) {
    const btn = document.getElementById('sendCodeBtn');
    if (!btn) return;
    clearInterval(sendCodeCountdownTimer);
    let remain = seconds;
    btn.disabled = true;
    btn.textContent = `${remain}s 后重发`;
    sendCodeCountdownTimer = setInterval(() => {
        remain -= 1;
        if (remain <= 0) {
            clearInterval(sendCodeCountdownTimer);
            btn.disabled = false;
            btn.textContent = '获取验证码';
        } else {
            btn.textContent = `${remain}s 后重发`;
        }
    }, 1000);
}

// 获取邮箱验证码
async function sendRegisterCode() {
    if (checkLocalFileProtocol('发送验证码')) return;

    if (!initCloudbase()) {
        showAuthMessage('CloudBase SDK 未加载，请检查网络后刷新页面', 'error');
        return;
    }

    const email = document.getElementById('regEmail').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthMessage('请输入正确的邮箱地址', 'error');
        return;
    }

    const btn = document.getElementById('sendCodeBtn');
    if (btn.disabled) return;
    btn.disabled = true;
    btn.textContent = '发送中...';

    try {
        const res = await auth.getVerification({ email, usage: 'email' });
        registerVerificationId = res && res.verification_id;
        if (!registerVerificationId) throw new Error('未获取到 verification_id，请重试');

        showAuthMessage('验证码已发送至邮箱，请查收（10 分钟内有效）', 'success');
        startSendCodeCountdown(60);
    } catch (err) {
        console.error('[CloudBase] 获取验证码失败', err);
        btn.disabled = false;
        btn.textContent = '获取验证码';
        showAuthMessage(getAuthErrorMessage(err, '验证码发送失败，请确认邮箱正确且环境已开通邮箱登录'), 'error');
    }
}

// 处理注册
async function handleRegister(event) {
    event.preventDefault();

    if (checkLocalFileProtocol('注册')) return;
    if (!initCloudbase()) {
        showAuthMessage('CloudBase SDK 未加载，请检查网络后刷新页面', 'error');
        return;
    }

    const email = document.getElementById('regEmail').value.trim();
    const code = document.getElementById('regCode').value.trim();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthMessage('请输入正确的邮箱地址', 'error');
        return;
    }
    if (!/^\d{4,8}$/.test(code)) {
        showAuthMessage('请输入正确的邮箱验证码', 'error');
        return;
    }
    if (!/^[A-Za-z0-9_]{5,24}$/.test(username)) {
        showAuthMessage('用户名需为 5-24 位字母、数字或下划线', 'error');
        return;
    }
    if (password.length < 6 || password.length > 20) {
        showAuthMessage('密码需为 6-20 位字符', 'error');
        return;
    }
    if (!registerVerificationId) {
        showAuthMessage('请先点击「获取验证码」获取邮箱验证码', 'error');
        return;
    }

    const btn = document.getElementById('regSubmitBtn');
    setButtonLoading(btn, true, '注册中...');

    try {
        // 1) 校验验证码，换取 verification_token
        const verifyRes = await auth.verify({
            verification_id: registerVerificationId,
            verification_code: code
        });
        const verificationToken = verifyRes && verifyRes.verification_token;
        if (!verificationToken) throw new Error('验证码校验失败，请重新获取');

        // 2) 邮箱注册：传入 username 和 password（required verification_token 属于邮箱验证码）
        await auth.signUp({
            email,
            verification_token: verificationToken,
            username,
            password
        });

        // 3) 注册成功后 CloudBase 会自动登录
        currentUser = await fetchCurrentUser();
        updateUIForLoggedInUser();
        updateQASection();
        closeAuthModal();
        showAuthMessage(`注册成功，欢迎 ${username}！`, 'success');
    } catch (err) {
        console.error('[CloudBase] 注册失败', err);
        showAuthMessage(getAuthErrorMessage(err, '注册失败，请稍后重试'), 'error');
    } finally {
        setButtonLoading(btn, false);
    }
}

// 退出登录
async function logout() {
    if (auth) {
        try {
            await auth.signOut();
        } catch (err) {
            console.warn('[CloudBase] 退出登录失败', err);
        }
    }
    currentUser = null;
    location.reload();
}

// 显示认证消息（Toast）
function showAuthMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <span>${type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : type === 'error' ? '<i class="fa-solid fa-circle-xmark"></i>' : '<i class="fa-solid fa-circle-info"></i>'}</span>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// 添加认证消息样式
const authMessageStyle = document.createElement('style');
authMessageStyle.textContent = `
    .auth-message {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        border-left: 4px solid #b71c1c;
    }
    
    .auth-message.success {
        border-left-color: #27ae60;
    }
    
    .auth-message.error {
        border-left-color: #e74c3c;
    }
    
    .message-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(authMessageStyle);

// ============================================
// 学习问答（questions 集合）
// ============================================

// HTML 转义，防止 XSS
function escapeHtml(str) {
    return String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// 格式化云数据库时间
function formatQaTime(value) {
    if (!value) return '';
    try {
        const d = new Date(value);
        if (isNaN(d.getTime())) return String(value);
        return d.toLocaleString('zh-CN', { hour12: false });
    } catch (e) {
        return String(value);
    }
}

// 当前登录用户是否为管理员（用户名为 admin）
function isAdmin() {
    return !!currentUser && String(currentUser.username || '').toLowerCase() === 'admin';
}

// 根据登录状态更新问答区
function updateQASection() {
    const tip = document.getElementById('qaLoginTip');
    const askBox = document.getElementById('qaAskBox');
    const myPanel = document.getElementById('qaMyQuestions');
    const adminPanel = document.getElementById('qaAdminPanel');
    if (!tip || !askBox || !myPanel || !adminPanel) return;

    const loggedIn = !!currentUser;
    tip.style.display = loggedIn ? 'none' : 'flex';
    askBox.style.display = loggedIn ? 'block' : 'none';
    myPanel.style.display = loggedIn ? 'block' : 'none';

    if (loggedIn) {
        loadMyQuestions();
        if (isAdmin()) {
            adminPanel.style.display = 'block';
            loadPendingQuestions();
        } else {
            adminPanel.style.display = 'none';
        }
    } else {
        adminPanel.style.display = 'none';
    }
}

// 提交问题（写入 questions 集合）
async function submitQuestion() {
    if (!initCloudbase()) {
        showAuthMessage('CloudBase SDK 未加载，请检查网络后刷新页面', 'error');
        return;
    }
    if (!currentUser) {
        showAuthMessage('请先登录后再提问', 'error');
        return;
    }

    const input = document.getElementById('qaQuestionInput');
    const question = (input && input.value ? input.value : '').trim();
    if (!question) {
        showAuthMessage('问题内容不能为空', 'error');
        return;
    }
    if (question.length > 500) {
        showAuthMessage('问题内容不能超过 500 字', 'error');
        return;
    }

    const btn = document.getElementById('qaSubmitBtn');
    setButtonLoading(btn, true, '提交中...');

    try {
        await db.collection('questions').add({
            question,
            userId: currentUser.uid || '',
            answer: '',
            status: 'pending',
            createdAt: db.serverDate()
        });

        input.value = '';
        showAuthMessage('提问成功，请等待管理员回答', 'success');
        await loadMyQuestions();
        if (isAdmin()) await loadPendingQuestions();
    } catch (err) {
        console.error('[CloudBase] 提问失败', err);
        showAuthMessage('提问失败：' + (err.message || '请稍后重试'), 'error');
    } finally {
        setButtonLoading(btn, false);
    }
}

// 加载当前用户的问题列表
async function loadMyQuestions() {
    const list = document.getElementById('qaMyList');
    if (!list) return;
    if (!currentUser) {
        list.innerHTML = '';
        return;
    }

    list.innerHTML = '<p class="qa-empty">加载中…</p>';
    try {
        const res = await db.collection('questions')
            .where({ userId: currentUser.uid || '' })
            .get();
        const items = (res.data || []).sort((a, b) => {
            const ta = new Date(a.createdAt).getTime() || 0;
            const tb = new Date(b.createdAt).getTime() || 0;
            return tb - ta;
        });

        if (items.length === 0) {
            list.innerHTML = '<p class="qa-empty">暂无提问，快去提问吧</p>';
            return;
        }

        list.innerHTML = items.map(item => `
            <div class="qa-item">
                <div class="qa-item-question">
                    <span class="qa-badge qa-badge-ask">问</span>
                    <span>${escapeHtml(item.question)}</span>
                    <span class="qa-item-time">${escapeHtml(formatQaTime(item.createdAt))}</span>
                </div>
                <div class="qa-item-answer">
                    ${item.answer
                        ? `<span class="qa-badge qa-badge-answer">答</span> ${escapeHtml(item.answer)}`
                        : '<span class="qa-pending">等待管理员回答…</span>'}
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error('[CloudBase] 加载我的提问失败', err);
        list.innerHTML = '<p class="qa-empty">加载失败，请刷新页面重试</p>';
    }
}

// 管理员：加载所有 status 为 pending 的问题
async function loadPendingQuestions() {
    const list = document.getElementById('qaAdminList');
    if (!list) return;
    if (!isAdmin()) {
        list.innerHTML = '';
        return;
    }

    list.innerHTML = '<p class="qa-empty">加载中…</p>';
    try {
        const res = await db.collection('questions')
            .where({ status: 'pending' })
            .get();
        const items = (res.data || []).sort((a, b) => {
            const ta = new Date(a.createdAt).getTime() || 0;
            const tb = new Date(b.createdAt).getTime() || 0;
            return ta - tb;
        });

        if (items.length === 0) {
            list.innerHTML = '<p class="qa-empty">暂无待回答的问题</p>';
            return;
        }

        list.innerHTML = items.map(item => {
            const qid = escapeHtml(item._id || item.id || '');
            return `
            <div class="qa-item qa-admin-item">
                <div class="qa-item-question">
                    <span class="qa-badge qa-badge-ask">问</span>
                    <span>${escapeHtml(item.question)}</span>
                </div>
                <div class="qa-item-meta">
                    <span>提问用户：${escapeHtml(String(item.userId || '').slice(-8) || '未知')}</span>
                    <span>${escapeHtml(formatQaTime(item.createdAt))}</span>
                </div>
                <textarea id="qaAnswer_${qid}" class="qa-answer-input" rows="2"
                    placeholder="请输入回答内容"></textarea>
                <div class="qa-admin-actions">
                    <button type="button" class="qa-submit-btn" data-question-id="${qid}">
                        <i class="fa-solid fa-check"></i> 提交回答
                    </button>
                </div>
            </div>`;
        }).join('');

        // 绑定回答按钮
        list.querySelectorAll('button[data-question-id]').forEach(btn => {
            btn.onclick = () => submitAnswer(btn, btn.dataset.questionId);
        });
    } catch (err) {
        console.error('[CloudBase] 加载待回答的问题失败', err);
        list.innerHTML = '<p class="qa-empty">加载失败，请刷新页面重试</p>';
    }
}

// 管理员：提交回答并更新 questions 记录
async function submitAnswer(btn, questionId) {
    if (!initCloudbase()) {
        showAuthMessage('CloudBase SDK 未加载，请检查网络后刷新页面', 'error');
        return;
    }
    if (!isAdmin()) {
        showAuthMessage('只有管理员可以回答问题', 'error');
        return;
    }
    if (!questionId) return;

    const textarea = document.getElementById('qaAnswer_' + questionId);
    const answer = (textarea && textarea.value ? textarea.value : '').trim();
    if (!answer) {
        showAuthMessage('回答内容不能为空', 'error');
        return;
    }

    setButtonLoading(btn, true, '提交中...');

    try {
        await db.collection('questions').doc(questionId).update({
            answer,
            status: 'answered'
        });
        showAuthMessage('回答已提交', 'success');
        await loadPendingQuestions();
        await loadMyQuestions();
    } catch (err) {
        console.error('[CloudBase] 提交回答失败', err);
        showAuthMessage('提交回答失败：' + (err.message || '请稍后重试'), 'error');
    } finally {
        setButtonLoading(btn, false);
    }
}

// 在页面加载时初始化认证系统
document.addEventListener('DOMContentLoaded', function() {
    // 延迟执行，确保其他元素已加载
    setTimeout(() => {
        initAuthSystem();
    }, 500);
});

// ============================================
// 美化登录选项的额外功能
// ============================================

// 切换用户菜单显示/隐藏
function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    if (menu) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
            // 点击其他地方关闭菜单
            setTimeout(() => {
                document.addEventListener('click', closeUserMenuOnClickOutside);
            }, 100);
        } else {
            menu.style.display = 'none';
        }
    }
}

// 点击外部关闭菜单
function closeUserMenuOnClickOutside(event) {
    const menu = document.getElementById('userMenu');
    const profile = document.querySelector('.user-profile');
    
    if (menu && profile && !profile.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
        document.removeEventListener('click', closeUserMenuOnClickOutside);
    }
}

// 显示个人中心
function showUserProfile() {
    closeUserMenu();
    
    if (!currentUser) return;
    
    // 获取用户学习进度统计
    const visitedCount = userProgress.visitedArtifacts.length;
    const taskCount = userProgress.completedTasks.length;
    const achievementCount = userProgress.collectedAchievements.length;
    
    const modalHTML = `
        <div class="profile-modal" id="profileModal">
            <div class="profile-content">
                <div class="profile-header">
                    <h2>个人中心</h2>
                    <button onclick="closeProfileModal()" class="profile-close">&times;</button>
                </div>
                <div class="profile-body">
                    <div class="profile-avatar-large">
                        ${currentUser.username.charAt(0).toUpperCase()}
                    </div>
                    
                    <div class="profile-info-item">
                        <span class="profile-info-label">用户名</span>
                        <span class="profile-info-value">${currentUser.username || '未设置'}</span>
                    </div>
                    <div class="profile-info-item">
                        <span class="profile-info-label">邮箱</span>
                        <span class="profile-info-value">${currentUser.email || '未绑定'}</span>
                    </div>
                    <div class="profile-info-item">
                        <span class="profile-info-label">用户ID</span>
                        <span class="profile-info-value">${currentUser.uid || '—'}</span>
                    </div>
                    
                    <div class="profile-stats">
                        <div class="profile-stat-item">
                            <div class="profile-stat-number">${visitedCount}</div>
                            <div class="profile-stat-label">参观文物</div>
                        </div>
                        <div class="profile-stat-item">
                            <div class="profile-stat-number">${taskCount}</div>
                            <div class="profile-stat-label">完成任务</div>
                        </div>
                        <div class="profile-stat-item">
                            <div class="profile-stat-number">${achievementCount}</div>
                            <div class="profile-stat-label">获得成就</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// 关闭个人中心
function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// 关闭用户菜单
function closeUserMenu() {
    const menu = document.getElementById('userMenu');
    if (menu) {
        menu.style.display = 'none';
    }
}

// 显示设置
function showSettings() {
    closeUserMenu();
    alert('设置功能开发中...\n\n后续将支持：\n• 修改密码\n• 头像上传\n• 通知设置');
}

// 修改原来的 updateUIForLoggedInUser 函数
function updateUIForLoggedInUser() {
    const notLoggedIn = document.getElementById('notLoggedIn');
    const loggedIn = document.getElementById('loggedIn');
    const displayUsername = document.getElementById('displayUsername');
    const dropdownUsername = document.getElementById('dropdownUsername');
    const userInitial = document.getElementById('userInitial');
    const userPoints = document.getElementById('userPoints');
    
    if (currentUser) {
        if (notLoggedIn) notLoggedIn.style.display = 'none';
        if (loggedIn) loggedIn.style.display = 'block';
        
        // 更新用户名显示
        if (displayUsername) displayUsername.textContent = currentUser.username;
        if (dropdownUsername) dropdownUsername.textContent = currentUser.username;
        if (userInitial) userInitial.textContent = currentUser.username.charAt(0).toUpperCase();
        
        // 计算并显示积分（示例：每个文物10分，每个任务20分，每个成就30分）
        const points = (userProgress.visitedArtifacts.length * 10) + 
                       (userProgress.completedTasks.length * 20) + 
                       (userProgress.collectedAchievements.length * 30);
        if (userPoints) userPoints.textContent = points;
    } else {
        if (notLoggedIn) notLoggedIn.style.display = 'flex';
        if (loggedIn) loggedIn.style.display = 'none';
    }
}

// ============================================
// 文物资源库功能
// ============================================

// 获取所有分类
function getArtifactCategories() {
    return [...new Set(artifactsData.map(item => item.category))];
}

// 获取所有年代
function getArtifactEras() {
    return [...new Set(artifactsData.map(item => item.era))];
}

// 按条件筛选文物
function filterArtifacts({ category = '全部', era = '全部', keyword = '' } = {}) {
    return artifactsData.filter(artifact => {
        const matchCategory = category === '全部' || artifact.category === category;
        const matchEra = era === '全部' || artifact.era === era;
        const matchKeyword = keyword === '' || 
            artifact.title.includes(keyword) || 
            artifact.description.includes(keyword);
        return matchCategory && matchEra && matchKeyword;
    });
}

// 创建文物卡片 HTML
function createArtifactCard(artifact) {
    return `
        <div class="artifact-card" onclick="showArtifactDetailFromLibrary(${artifact.id})">
            <div class="artifact-image">${artifact.image}</div>
            <div class="artifact-content">
                <span class="artifact-category">${artifact.category}</span>
                <h3 class="artifact-title">${artifact.title}</h3>
                <p class="artifact-meta">
                    <span><i class="fa-solid fa-calendar-days"></i> ${artifact.year}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${artifact.location}</span>
                </p>
                <p class="artifact-desc">${artifact.description.substring(0, 60)}...</p>
                <button class="artifact-btn">查看详情 <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    `;
}

// 渲染文物列表
function renderArtifactsList() {
    const container = document.getElementById('artifactsGrid');
    if (!container) return;

    const category = document.getElementById('categoryFilter')?.value || '全部';
    const era = document.getElementById('eraFilter')?.value || '全部';
    const keyword = document.getElementById('artifactSearch')?.value.trim() || '';

    const filtered = filterArtifacts({ category, era, keyword });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i class="fa-solid fa-landmark"></i></div>
                <p>未找到符合条件的文物</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(artifact => createArtifactCard(artifact)).join('');
}

// 初始化文物筛选器
function initArtifactFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const eraFilter = document.getElementById('eraFilter');
    const searchInput = document.getElementById('artifactSearch');

    if (!categoryFilter || !eraFilter) return;

    // 填充分类选项
    const categories = ['全部', ...getArtifactCategories()];
    categoryFilter.innerHTML = categories.map(cat => 
        `<option value="${cat}">${cat}</option>`
    ).join('');

    // 填充年代选项
    const eras = ['全部', ...getArtifactEras()];
    eraFilter.innerHTML = eras.map(e => 
        `<option value="${e}">${e}</option>`
    ).join('');

    // 绑定筛选事件
    categoryFilter.addEventListener('change', renderArtifactsList);
    eraFilter.addEventListener('change', renderArtifactsList);
    searchInput.addEventListener('input', debounce(renderArtifactsList, 300));
}

// 显示文物详情（从资源库点击）
window.showArtifactDetailFromLibrary = function(artifactId) {
    const artifact = artifactsData.find(item => item.id === artifactId);
    if (!artifact) return;

    // 记录访问
    if (!userProgress.visitedArtifacts.includes(artifactId)) {
        userProgress.visitedArtifacts.push(artifactId);
        saveUserProgress();
    }

    const modal = document.createElement('div');
    modal.className = 'artifact-modal-overlay';
    modal.id = 'artifactModal';
    modal.innerHTML = `
        <div class="artifact-modal">
            <div class="modal-header">
                <h2>${artifact.image} ${artifact.title}</h2>
                <button onclick="closeArtifactModalFromLibrary()" class="close-btn">×</button>
            </div>
            <div class="modal-body">
                <div class="artifact-basic-info">
                    <div class="info-row"><span class="info-label"><i class="fa-solid fa-calendar-days"></i> 年代：</span><span>${artifact.year}</span></div>
                    <div class="info-row"><span class="info-label"><i class="fa-solid fa-landmark"></i> 馆藏：</span><span>${artifact.location}</span></div>
                    <div class="info-row"><span class="info-label"><i class="fa-solid fa-folder-open"></i> 类别：</span><span>${artifact.category}</span></div>
                    <div class="info-row"><span class="info-label"><i class="fa-solid fa-hourglass-half"></i> 时期：</span><span>${artifact.era}</span></div>
                </div>
                <div class="artifact-description">
                    <h3><i class="fa-solid fa-book"></i> 文物简介</h3>
                    <p>${artifact.description}</p>
                    <div class="detailed-content">${artifact.detailedDesc}</div>
                </div>
                <div class="artifact-fun-fact">
                    <h3><i class="fa-solid fa-lightbulb"></i> 你知道吗？</h3>
                    <p>${artifact.funFact}</p>
                </div>
            </div>
            <div class="modal-footer">
                <div class="progress-info">
                    这是你参观的第 <strong>${userProgress.visitedArtifacts.length}</strong> 件文物
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
};

// 关闭文物详情弹窗
window.closeArtifactModalFromLibrary = function() {
    const modal = document.getElementById('artifactModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
};

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 更新文物统计
function updateArtifactsCount() {
    const statElement = document.getElementById('artifactsCount');
    if (statElement) {
        statElement.textContent = artifactsData.length;
    }
}

// 初始化文物资源库
function initArtifactsLibrary() {
    const container = document.getElementById('artifactsGrid');
    if (!container) return;

    initArtifactFilters();
    renderArtifactsList();
    updateArtifactsCount();
}
