const { convertLine } = require('./.migrate-emojis.js');
const MAP = require('./.emoji-map.js');
const keys = Object.keys(MAP).sort((a, b) => b.length - a.length);
const starts = new Set(keys.map((k) => k.codePointAt(0)));
const cases = [
    'alert("x \u{1F389} y");',
    'alert("x \u{1F3AF} y");',
    'alert("\u2705 ok");',
    'alert("\u{1F389} 任务提交成功");'
];
const dump = (s) => Array.from(s).map((c) => { const cp = c.codePointAt(0); return cp > 0x7e ? '<U+' + cp.toString(16).toUpperCase() + '>' : c; }).join('');
for (const c of cases) {
    const r = convertLine(c);
    console.log('IN :', dump(c));
    console.log('OUT:', dump(r.text), 'count=' + r.count);
}
// 直接模拟循环
const line = 'alert("x \u{1F389} y");';
for (let i = 0; i < line.length; ) {
    const cp = line.codePointAt(i);
    if (!starts.has(cp)) { i++; continue; }
    const matched = keys.find((k) => line.startsWith(k, i));
    console.log('i=' + i + ' cp=U+' + cp.toString(16) + ' matched=' + (matched ? dump(matched) : 'NONE'));
    if (matched) { i += Math.max(1, matched.length); } else { i++; }
}
