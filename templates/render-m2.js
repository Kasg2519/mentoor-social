const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/amiga-m2.html'); await p.waitForTimeout(900);
  await p.locator('#m2').screenshot({ path: 'out/post-m2.png' });
  await b.close();
})();
