const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-fuas7-amiga.html'); await p.waitForTimeout(1000);
  const dur = [4,4,5,5,6,5,6,5];
  let list = '';
  for (let i=1;i<=8;i++) { await p.locator('#s'+i).screenshot({ path: `out/fuas7-s${i}.png` }); list += `file 'fuas7-s${i}.png'\nduration ${dur[i-1]}\n`; }
  list += `file 'fuas7-s8.png'\n`;
  fs.writeFileSync('out/fuas7.txt', list);
  execSync("cd out && ffmpeg -y -loglevel error -f concat -safe 0 -i fuas7.txt -vf fps=30,format=yuv420p -c:v libx264 -crf 18 fuas7.mp4");
  await b.close();
})();
