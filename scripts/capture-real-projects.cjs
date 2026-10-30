const {chromium}=require("playwright");
const fs=require("node:fs/promises");
const path=require("node:path");
const projects=[
 {slug:"klarwerk",base:"https://www.premium-remont-miele.pro",detail:"/services.html",detailName:"services"},
 {slug:"rembyttehnika",base:"https://rembyttehnika.pro",detail:"/services.html",detailName:"services"}
];
(async()=>{
 const browser=await chromium.launch({headless:true});
 const out=path.join(process.cwd(),"public","projects");
 await fs.mkdir(out,{recursive:true});
 for(const project of projects){
  const desktop=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
  await desktop.goto(project.base,{waitUntil:"networkidle",timeout:90000});
  await desktop.evaluate(()=>window.scrollTo(0,0));
  await desktop.screenshot({path:path.join(out,project.slug+"-desktop.webp"),type:"webp",quality:88,fullPage:false});
  await desktop.goto(project.base+project.detail,{waitUntil:"networkidle",timeout:90000});
  await desktop.evaluate(()=>window.scrollTo(0,0));
  await desktop.screenshot({path:path.join(out,project.slug+"-"+project.detailName+".webp"),type:"webp",quality:88,fullPage:false});
  await desktop.close();
  const mobile=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true});
  await mobile.goto(project.base,{waitUntil:"networkidle",timeout:90000});
  await mobile.evaluate(()=>window.scrollTo(0,0));
  await mobile.screenshot({path:path.join(out,project.slug+"-mobile.webp"),type:"webp",quality:90,fullPage:false});
  await mobile.close();
 }
 await browser.close();
})();