const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/amiga-1mes.html'); await p.waitForTimeout(900);
  await p.locator('#m1').screenshot({ path: 'out/post-1mes.png' });
  await b.close();
})();
