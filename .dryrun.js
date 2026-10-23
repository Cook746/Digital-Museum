// 干跑：统计将被替换的数量，并列出替换后会残留的 emoji 字符
const fs = require('fs');
const MAP = require('./.emoji-map.js');
const { convertLine } = require('./.migrate-emojis.js');

const keys = Object.keys(MAP);
const starts = new Set(keys.map((k) => k.codePointAt(0)));
const EMOJI = /[\u2190-\u21FF\u2300-\u23FF\u2460-\u24FF\u25A0-\u27BF\u2B00-\u2BFF\uFE0F\u2600-\u27BF\u{1F000}-\u{1FAFF}]/gu;

for (const file of ['index.html', 'script.js']) {
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    let total = 0;
    const leftover = new Map();
    lines.forEach((line, i) => {
        const r = convertLine(line);
        total += r.count;
        const still = r.text.match(EMOJI);
        if (still) {
            still.forEach((c) => {
                const key = 'U+' + c.codePointAt(0).toString(16).toUpperCase() + ' | ' + file + ':' + (i + 1) + ' | ' + r.text.trim().slice(0, 90);
                leftover.set(key, true);
            });
        }
    });
    console.log('=== ' + file + ' would replace ' + total + ' items');
    if (leftover.size) console.log([...leftover.keys()].join('\n'));
    else console.log('no leftover emoji');
}
