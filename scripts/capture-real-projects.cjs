const {chromium}=require("playwright");
const fs=require("node:fs/promises");
const path=require("node:path");
const projects=[
 {slug:"klarwerk",base:"https://www.premium-remont-miele.pro",detail:"/services.html",detailName:"services"},
 {slug:"rembyttehnika",base:"https://rembyttehnika.pro",detail:"/services.html",detailName:"services"}
];
async function anonymize(page){
 await page.evaluate(()=>{
  const replacements=[
   [/\+?7[\s()\-]*\d{3}[\s()\-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}/g,"Контакт скрыт"],
   [/\+?375[\s()\-]*\d{2}[\s()\-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}/g,"Контакт скрыт"],
   [/[\w.+-]+@[\w.-]+\.[A-Za-zА-Яа-я]{2,}/g,"Email скрыт"],
   [/Больш\w*\s+Троицк\w*,?\s*48/gi,"Адрес мастерской"],
   [/ИП\s*[«"]?Петревич Диана Олеговна[»"]?/gi,"Реквизиты исполнителя"],
   [/УНП\s*591963341/gi,"УНП скрыт"],
   [/BY34\s*ALFA\s*3013\s*2D59\s*7700\s*1027\s*0000/gi,"Расчётный счёт скрыт"],
   [/ALFABY2X/gi,"БИК скрыт"]
  ];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){let value=node.nodeValue||"";for(const [pattern,next] of replacements)value=value.replace(pattern,next);node.nodeValue=value;}
  for(const link of document.querySelectorAll('a[href^="tel:"],a[href^="mailto:"]')){link.removeAttribute("href");link.setAttribute("aria-label","Контакт скрыт");}
  for(const input of document.querySelectorAll('input[type="tel"],input[type="email"]')){input.setAttribute("placeholder","Контакт скрыт");input.value="";}
 });
}
(async()=>{
 const browser=await chromium.launch({headless:true});
 const out=path.join(process.cwd(),"public","projects");
 await fs.mkdir(out,{recursive:true});
 for(const project of projects){
  const desktop=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
  await desktop.goto(project.base,{waitUntil:"networkidle",timeout:90000});
  await anonymize(desktop);
  await desktop.evaluate(()=>window.scrollTo(0,0));
  await desktop.screenshot({path:path.join(out,project.slug+"-desktop.webp"),type:"webp",quality:88,fullPage:false});
  await desktop.goto(project.base+project.detail,{waitUntil:"networkidle",timeout:90000});
  await anonymize(desktop);
  await desktop.evaluate(()=>window.scrollTo(0,0));
  await desktop.screenshot({path:path.join(out,project.slug+"-"+project.detailName+".webp"),type:"webp",quality:88,fullPage:false});
  await desktop.close();
  const mobile=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true});
  await mobile.goto(project.base,{waitUntil:"networkidle",timeout:90000});
  await anonymize(mobile);
  await mobile.evaluate(()=>window.scrollTo(0,0));
  await mobile.screenshot({path:path.join(out,project.slug+"-mobile.webp"),type:"webp",quality:90,fullPage:false});
  await mobile.close();
 }
 await browser.close();
})();