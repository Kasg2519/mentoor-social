const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/post-app-inicio.html');
  await p.waitForTimeout(1200);
  await p.locator('#p1').screenshot({ path: 'out/post-app-inicio.png' });
  await b.close();
})();
