// 查看迁移后的关键片段
const fs = require('fs');
const lines = fs.readFileSync('script.js', 'utf8').split('\n');
const regions = [[165,175],[244,258],[330,345],[405,415],[485,495],[715,735],[780,800],[862,875],[1150,1170],[1570,1580],[1688,1700],[1900,1915],[1985,1995],[2045,2055],[2170,2180],[2895,2905],[3065,3100],[3195,3215],[3225,3240],[3288,3300],[3690,3700],[3980,3985],[4095,4115],[4190,4200],[4245,4305],[4740,4755],[5070,5085]];
for (const [a, b] of regions) {
    console.log('---- ' + (a + 1) + '-' + b);
    for (let i = a; i < b; i++) {
        const l = lines[i];
        if (l === undefined) continue;
        if (l.includes('fa-solid') || l.includes('\u2605') || l.includes('\u2606') || l.includes('\u2713') || l.includes('textContent')) {
            console.log((i + 1) + ': ' + l.trim().slice(0, 170));
        }
    }
}
