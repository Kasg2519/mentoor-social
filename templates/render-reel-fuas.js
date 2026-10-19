const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/reel-fuas.html');
  await p.waitForTimeout(1200);
  for (const id of ['s1','s2','s3','s4','s5','s6','s7']) await p.locator('#'+id).screenshot({ path: 'out/reel-fuas-'+id+'.png' });
  await b.close();
})();
