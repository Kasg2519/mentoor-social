const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
(async () => {
  const o = process.argv[2]; fs.mkdirSync(o,{recursive:true});
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-calc21-amiga.html'); await p.waitForTimeout(1000);
  const dur = [4,5,4,4,4,6];
  let list = '';
  for (let i=1;i<=6;i++) { await p.locator('#s'+i).screenshot({ path: `${o}/s${i}.png` }); list += `file 's${i}.png'\nduration ${dur[i-1]}\n`; }
  list += `file 's6.png'\n`;
  fs.writeFileSync(o+'/lista.txt', list);
  execSync(`cd ${o} && ffmpeg -y -loglevel error -f concat -safe 0 -i lista.txt -vf fps=30,format=yuv420p -c:v libx264 -crf 18 reel.mp4 && rm s?.png lista.txt`);
  await b.close();
})();
