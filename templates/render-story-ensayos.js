const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/story-ensayos.html'); await p.waitForTimeout(900);
  await p.locator('#st').screenshot({ path: 'out/story-ensayos.png' });
  await b.close();
})();
