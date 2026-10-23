// 修正迁移后遗留的问题：评分星星、收藏星标、空 textContent
const fs = require('fs');
const file = 'script.js';
const src = fs.readFileSync(file, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';
const lines = src.split(/\r?\n/);
const report = [];

const replaceAll = (idx, oldText, newText, label) => {
    const l = lines[idx];
    if (l === undefined) { report.push('MISS ' + label + ' (line ' + (idx + 1) + ')'); return; }
    if (!l.includes(oldText)) { report.push('NOFIND ' + label + ' (line ' + (idx + 1) + '): ' + l.trim().slice(0, 120)); return; }
    lines[idx] = l.split(oldText).join(newText);
    report.push('OK ' + label + ' (line ' + (idx + 1) + ')');
};

// 1) 反馈评分星星：textContent 设为空，视觉交给 CSS 伪元素
for (const n of [1910, 1913, 1990]) {
    replaceAll(n - 1, "star.textContent = '*';", "star.textContent = '';", 'star.textContent line ' + n);
}

// 2) 反馈列表里的星星：有分数用实心，无分数用空心
replaceAll(2050 - 1,
    "starsHTML += i <= feedback.rating ? '<i class=\"fa-solid fa-star\"></i>' : '<i class=\"fa-solid fa-star\"></i>';",
    "starsHTML += i <= feedback.rating ? '<i class=\"fa-solid fa-star\"></i>' : '<i class=\"fa-regular fa-star\"></i>';",
    'feedback list stars');

// 3) 资源收藏按钮：已收藏实心，未收藏空心
replaceAll(1576 - 1,
    "${isCollected ? '<i class=\"fa-solid fa-star\"></i> 已收藏' : '<i class=\"fa-solid fa-star\"></i> 收藏'}",
    "${isCollected ? '<i class=\"fa-solid fa-star\"></i> 已收藏' : '<i class=\"fa-regular fa-star\"></i> 收藏'}",
    'resource collect star');

fs.writeFileSync(file, lines.join(eol), 'utf8');
console.log(report.join('\n'));
