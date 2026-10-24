const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-nuevas44.html'); await p.waitForTimeout(1000);
  const dur = [4,5,6,6,7,5];
  let list = '';
  for (let i=1;i<=6;i++) { await p.locator('#s'+i).screenshot({ path: `out/n44-s${i}.png` }); list += `file 'n44-s${i}.png'\nduration ${dur[i-1]}\n`; }
  list += `file 'n44-s6.png'\n`;
  fs.writeFileSync('out/n44.txt', list);
  execSync("cd out && ffmpeg -y -loglevel error -f concat -safe 0 -i n44.txt -vf fps=30,format=yuv420p -c:v libx264 -crf 18 n44.mp4");
  await b.close();
})();
