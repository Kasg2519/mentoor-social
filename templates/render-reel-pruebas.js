const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-pruebas-amiga.html'); await p.waitForTimeout(1000);
  for (const id of ['p1','p2','p3','p4','p5','p6']) await p.locator('#'+id).screenshot({ path: 'out/reel-pruebas-'+id+'.png' });
  await b.close();
})();
