const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/amiga-ayudas.html'); await p.waitForTimeout(900);
  for (let i=1;i<=5;i++) await p.locator('#b'+i).screenshot({ path: `out/ayudas-${i}.png` });
  await b.close();
})();
