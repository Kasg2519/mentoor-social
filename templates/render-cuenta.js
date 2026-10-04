const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/post-cuenta-regresiva.html');
  await p.waitForTimeout(1200);
  await p.locator('#p2').screenshot({ path: 'out/post-cuenta-regresiva.png' });
  await b.close();
})();
