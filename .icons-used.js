const fs = require('fs');
const set = new Set();
for (const f of ['index.html', 'script.js', 'style.css']) {
    const s = fs.readFileSync(f, 'utf8');
    for (const m of s.matchAll(/fa-(solid|regular|brands)\s+(fa-[a-z0-9-]+)/g)) set.add(m[1] + ' ' + m[2]);
}
const list = [...set].sort();
console.log('total', list.length);
console.log(list.join('\n'));
