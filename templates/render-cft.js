const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/amiga-cft.html'); await p.waitForTimeout(900);
  for (let i=1;i<=4;i++) await p.locator('#b'+i).screenshot({ path: `out/cft-${i}.png` });
  await b.close();
})();
