const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(()=>chromium.launch());
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + __dirname + '/carrusel-puntaje-v2.html');
  await p.waitForTimeout(1500);
  for (let i = 1; i <= 6; i++) await p.locator('#s' + i).screenshot({ path: `out/slide${i}.png` });
  await b.close();
})();
