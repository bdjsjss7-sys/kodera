// Crawl every published URL, not just a manually maintained shortlist.
const origin=process.env.SMOKE_ORIGIN||"http://127.0.0.1:3000";
const prod="https://www.kodera.pro";
const sitemap=await fetch(origin+"/sitemap.xml",{signal:AbortSignal.timeout(15000)});
if(!sitemap.ok)throw Error("Sitemap HTTP "+sitemap.status);
const xml=await sitemap.text();
const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1].replaceAll("&amp;","&"));
if(urls.length<200)throw Error("Unexpectedly short sitemap: "+urls.length);
const unique=new Set(urls);
if(unique.size!==urls.length)throw Error("Duplicate sitemap URLs: "+(urls.length-unique.size));
let next=0;
const issues=[];
let passed=0;
const examples=[];
async function check(){
 while(next<urls.length){
  const i=next++;
  const url=urls[i];
  if(!url.startsWith(prod+"/")&&url!==prod) {issues.push("Unexpected origin: "+url);continue;}
  const path=url.slice(prod.length)||"/";
  try{
   const res=await fetch(origin+path,{signal:AbortSignal.timeout(18000),redirect:"manual"});
   if(res.status!==200){issues.push(path+" -> HTTP "+res.status);continue;}
   const html=await res.text();
   if(html.length<1000){issues.push(path+" -> unusually short HTML");continue;}
   if(!/<h1[\s>]/i.test(html)){issues.push(path+" -> no H1");continue;}
   const links=[...html.matchAll(/<link\b[^>]*>/gi)].map(m=>m[0]);
   const canonical=links.find(tag=>/rel=["']canonical["']/.test(tag));
   if(!canonical){issues.push(path+" -> missing canonical");continue;}
   const match=canonical.match(/href=["']([^"']+)/);
   if(!match||match[1]!==url){issues.push(path+" -> unexpected canonical "+(match?.[1]||"none"));continue;}
   if(html.includes("Application error: a server-side exception")){issues.push(path+" -> server exception");continue;}
   passed++;
  }catch(e){issues.push(path+" -> "+(e instanceof Error?e.message:String(e)));}
 }
}
await Promise.all(Array.from({length:8},()=>check()));
console.log("Sitemap route test: "+passed+"/"+urls.length+" OK");
if(issues.length){console.error(issues.slice(0,70).join("\n"));process.exitCode=1;}
