const fs=require('fs');
const re=/[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{23FF}\u{2460}-\u{24FF}\u{25A0}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2E80}-\u{303F}\u{3299}\u{FE00}-\u{FE0F}]/u;
for(const f of ['index.html','script.js','style.css']){
  const lines=fs.readFileSync(f,'utf8').split('\n');
  const hits=[];
  lines.forEach((l,i)=>{ if(re.test(l)) hits.push((i+1)+': '+l.trim().slice(0,160)); });
  console.log('=== '+f+' hits='+hits.length);
  console.log(hits.join('\n'));
}
