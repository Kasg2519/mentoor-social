const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-fuentes.html'); await p.waitForTimeout(1000);
  const dur = [4,4,6,6,6,5];
  let list = '';
  for (let i=1;i<=6;i++) { await p.locator('#s'+i).screenshot({ path: `out/fuen-s${i}.png` }); list += `file 'fuen-s${i}.png'\nduration ${dur[i-1]}\n`; }
  list += `file 'fuen-s6.png'\n`;
  fs.writeFileSync('out/fuen.txt', list);
  execSync("cd out && ffmpeg -y -loglevel error -f concat -safe 0 -i fuen.txt -vf fps=30,format=yuv420p -c:v libx264 -crf 18 fuen.mp4");
  await b.close();
})();
