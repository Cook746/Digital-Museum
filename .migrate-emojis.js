// 一次性迁移脚本：把 index.html / script.js 里的 Emoji 换成 Font Awesome 标签
// 用法：node .migrate-emojis.js [html|js]   (迁移完成后可删除)
const fs = require('fs');
const MAP = require('./.emoji-map.js');
const TEXT_FALLBACK = require('./.text-fallback.js');

const keys = Object.keys(MAP).sort((a, b) => b.length - a.length);
const starts = new Set(keys.map((k) => k.codePointAt(0)));

// 这些行属于纯文本上下文（原生弹窗 / 文本节点 / 标题）：只降级成文字，不插入 HTML 标签
const isPlainTextLine = (line) =>
    /alert\s*\(|confirm\s*\(|console\.(log|warn|error)\s*\(|\.textContent\s*=|title\s*[:=]/.test(line);

function convertLine(line) {
    const plain = isPlainTextLine(line);
    let out = '';
    let count = 0;
    for (let i = 0; i < line.length; ) {
        const cp = line.codePointAt(i);
        if (!starts.has(cp)) { out += line[i]; i++; continue; }
        let matched = null;
        for (const k of keys) {
            if (line.startsWith(k, i)) { matched = k; break; }
        }
        if (!matched) { out += line[i]; i++; continue; }
        if (plain) {
            const t = TEXT_FALLBACK[matched];
            out += t !== undefined ? t : '<' + MAP[matched].replace('fa-', '') + '>';
        } else {
            out += '<i class="fa-solid ' + MAP[matched] + '"></i>';
        }
        i += matched.length;
        count++;
    }
    return { text: out, count };
}

function walk(file) {
    const src = fs.readFileSync(file, 'utf8');
    const eol = src.includes('\r\n') ? '\r\n' : '\n';
    const lines = src.split(/\r?\n/);
    let changed = 0;
    const out = lines.map((line) => {
        if (!line) return line;
        const r = convertLine(line);
        changed += r.count;
        return r.text;
    });
    fs.writeFileSync(file, out.join(eol), 'utf8');
    console.log(file + ': ' + changed + ' replacements');
}

const target = process.argv[2];
if (target === 'html') walk('index.html');
else if (target === 'js') walk('script.js');
else { walk('index.html'); walk('script.js'); }

module.exports = { convertLine };
