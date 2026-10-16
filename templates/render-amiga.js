const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const [f,id,o] of [['amiga-fuas','m1','amiga-fuas'],['amiga-odonto','m2','amiga-odonto'],['amiga-progreso','m3','amiga-progreso']]) {
    await p.goto('file://' + __dirname + '/'+f+'.html'); await p.waitForTimeout(900);
    await p.locator('#'+id).screenshot({ path: 'out/'+o+'.png' });
  }
  await b.close();
})();
