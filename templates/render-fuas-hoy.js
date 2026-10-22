const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/amiga-fuas-hoy.html'); await p.waitForTimeout(900);
  await p.locator('#m4').screenshot({ path: 'out/amiga-fuas-hoy.png' });
  await b.close();
})();
