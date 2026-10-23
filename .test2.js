const MAP = require('./.emoji-map.js');
const keys = Object.keys(MAP).sort((a, b) => b.length - a.length);
const starts = new Set(keys.map((k) => k.codePointAt(0)));
const line = 'alert("x \u{1F389} y");';
for (let i = 0; i < line.length; i++) {
    const cp = line.codePointAt(i);
    if (cp > 0x2000) {
        console.log('i=' + i, 'cp=U+' + cp.toString(16).toUpperCase(), 'starts.has=' + starts.has(cp), 'startsWith=' + keys.filter((k) => line.startsWith(k, i)).join('|'));
    }
}
console.log('map keys with 1F389 ->', Object.entries(MAP).filter(([k]) => k.codePointAt(0) === 0x1f389).map(([k, v]) => JSON.stringify(k) + '=' + v));
console.log('total starts', starts.size);
