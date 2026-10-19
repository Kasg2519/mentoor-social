const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
const base='/mnt/project-files/posts/';
(async () => {
  const b = await chromium.launch();
  const mk=async(h,w,hh)=>{const p=await b.newPage({viewport:{width:w,height:hh}});await p.goto('file://'+__dirname+'/'+h);await p.waitForTimeout(1000);return p;};
  let p=await mk('amiga-fuas-hoy.html',1080,1920);
  let d=base+'2026-10-22-fuas-hoy/'; fs.mkdirSync(d,{recursive:true});
  await p.locator('#p1').screenshot({path:d+'post.png'}); await p.addStyleTag({content:'#p1{display:none}'}); await p.locator('#st').screenshot({path:d+'story.png'});
  p=await mk('amiga-despues-fuas.html',1080,1350);
  d=base+'2026-10-23-carrusel-despues-fuas/'; fs.mkdirSync(d,{recursive:true});
  for(let i=1;i<=5;i++) await p.locator('#m'+i).screenshot({path:`${d}0${i}.png`});
  p=await mk('reel-progreso24-amiga.html',1080,1920);
  d=base+'2026-10-24-reel-progreso/'; fs.mkdirSync(d,{recursive:true});
  const dur=[4,5,4,4,5,6]; let list='';
  for(let i=1;i<=6;i++){await p.locator('#s'+i).screenshot({path:`${d}s${i}.png`});list+=`file 's${i}.png'\nduration ${dur[i-1]}\n`;}
  list+="file 's6.png'\n"; fs.writeFileSync(d+'lista.txt',list);
  execSync(`cd ${d} && ffmpeg -y -loglevel error -f concat -safe 0 -i lista.txt -vf fps=30,format=yuv420p -c:v libx264 -crf 18 reel.mp4 && rm s?.png lista.txt`);
  await b.close();
})();
