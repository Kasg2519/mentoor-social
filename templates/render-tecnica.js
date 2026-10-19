const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const out = process.argv[2]; fs.mkdirSync(out,{recursive:true});
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/amiga-tecnica.html'); await p.waitForTimeout(1000);
  for (let i=1;i<=5;i++) await p.locator('#m'+i).screenshot({ path: `${out}/0${i}.png` });
  await b.close();
})();
