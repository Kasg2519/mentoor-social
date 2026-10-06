const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-calculadora-amiga.html'); await p.waitForTimeout(1000);
  for (const id of ['i1','o1']) await p.locator('#'+id).screenshot({ path: 'out/reel-calc-'+id+'.png' });
  await b.close();
})();
