const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-fuas3-amiga.html'); await p.waitForTimeout(1000);
  const dur = [4,4,5,5,5,4,7,6];
  let list = '';
  fs.mkdirSync('out',{recursive:true});
  for (let i=1;i<=8;i++) { await p.locator('#s'+i).screenshot({ path: `out/fuas3-s${i}.png` }); list += `file 'fuas3-s${i}.png'\nduration ${dur[i-1]}\n`; }
  list += `file 'fuas3-s8.png'\n`;
  fs.writeFileSync('out/fuas3.txt', list);
  execSync("cd out && ffmpeg -y -loglevel error -f concat -safe 0 -i fuas3.txt -vf fps=30,format=yuv420p -c:v libx264 -crf 18 fuas3.mp4");
  await b.close();
})();
