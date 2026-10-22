import {readFileSync,existsSync} from "node:fs";
import {join} from "node:path";
const root=process.cwd();
const problems=[];
function loadTsArray(rel,name){
 const src=readFileSync(join(root,rel),"utf8");
 const match=src.match(new RegExp("export const "+name+" = (\\[[\\s\\S]*?\\]) as const;"));
 if(!match)throw Error("Could not parse "+name+" in "+rel);
 return JSON.parse(match[1]);
}
const solutions=loadTsArray("src/lib/solutions.ts","solutions");
const articles=loadTsArray("src/lib/articles.ts","articles");
function loadGuide(rel,name){
 const src=readFileSync(join(root,rel),"utf8");
 const match=src.match(new RegExp("export const "+name+" = (\\\\{[\\\\s\\\\S]*?\\\\}) as const;"));
 if(!match)throw Error("Could not read guide "+name);
 return JSON.parse(match[1]);
}
const guideData={...loadGuide("src/lib/articleGuidesA.ts","guidesA"),...loadGuide("src/lib/articleGuidesB.ts","guidesB"),...loadGuide("src/lib/articleGuidesC.ts","guidesC")};
const countWords=s=>(s.match(/[\\p{L}\\p{N}]+(?:[-–—'][\\p{L}\\p{N}]+)*/gu)||[]).length;
for(const a of articles){
 const deep=guideData[a.slug];
 if(!deep||deep.length<5){problems.push("Insufficient deep guide: "+a.slug);continue;}
 const all=a.sections.flatMap(s=>[s.heading,...s.paragraphs]).join(" ")+" "+deep.flat().join(" ");
 if(countWords(all)<500)problems.push("Article still too short: "+a.slug+" ("+countWords(all)+" words)");
}
if(Object.keys(guideData).length!==articles.length)problems.push("Guide and article counts disagree.");
const enrichedSource=readFileSync(join(root,"src/lib/expandedArticles.ts"),"utf8");
if(!enrichedSource.includes("estimateReadingMinutes"))problems.push("Dynamic reading-time calculator missing.");

const seen=new Set();
for(const s of solutions){
 if(seen.has(s.slug))problems.push("Duplicate solution slug: "+s.slug);seen.add(s.slug);
 if(!s.title||!s.description&& !s.subtitle)problems.push("Missing title/summary: "+s.slug);
 if(!s.challenge||s.challenge.startsWith("Главная задача —"))problems.push("Generic challenge: "+s.slug);
 if(!s.deliverable||s.deliverable.startsWith("По итогам проекта"))problems.push("Generic deliverable: "+s.slug);
 if((s.editorial||[]).length<1||!s.faq?.length)problems.push("Insufficient content: "+s.slug);
}
const articleSlugs=new Set();for(const a of articles){if(articleSlugs.has(a.slug))problems.push("Duplicate article: "+a.slug);articleSlugs.add(a.slug);if((a.sections||[]).length<4)problems.push("Short article: "+a.slug);}
for(const rel of ["src/app/page.tsx","src/app/solutions/page.tsx","src/app/solutions/[slug]/page.tsx","src/app/blog/page.tsx","src/app/blog/[slug]/page.tsx","src/app/ru/page.tsx","src/app/by/page.tsx","src/app/pricing/page.tsx","src/app/process/page.tsx","src/app/contact/page.tsx","src/app/privacy/page.tsx","src/app/sitemap.ts","src/app/robots.ts","src/components/MobileNavigation.tsx","src/components/SolutionDepth.tsx"]){if(!existsSync(join(root,rel)))problems.push("Missing file: "+rel);}

const home=readFileSync(join(root,"src/app/page.tsx"),"utf8");
const homeInteractions=readFileSync(join(root,"src/components/CinematicHero.tsx"),"utf8");
const comparison=readFileSync(join(root,"src/components/InterfaceComparison.tsx"),"utf8");
for(const [label,source,marker] of [
 ["Hero demo",home,"<CinematicHero/>"],
 ["Project picker",home,"<ProjectSelector/>"],
 ["Interactive process",home,"<InteractiveProcess/>"],
 ["UX comparison",home,"<InterfaceComparison/>"],
 ["Lead form",home,"<LeadForm compact/>"],
 ["Mobile navigation",home,"<MobileNavigation/>"],
 ["Region selector",home,"/ru"],
 ["SEO and blog crosslinks",home,"/blog"],
 ["Four interactive modes",homeInteractions,'id:"seo"'],
 ["Comparison component",comparison,"aria-pressed"],
 ["Hero image sources",homeInteractions,"visualAssets.headphones"],
 ["Hero interaction",homeInteractions,"onMouseEnter={()=>setMode(t.id)}"]
]){if(!source.includes(marker))problems.push("Homepage check failed: "+label);}


// Verify committed illustration assets and their use in rendered pages.
const visuals=["sculpture","web-experience","commerce-experience","service-experience","data-experience"];
for(const name of visuals){if(!existsSync(join(root,"public/art/"+name+".svg")))problems.push("Missing visual: "+name);}
for(const rel of ["src/app/page.tsx","src/app/services/[slug]/page.tsx","src/app/solutions/[slug]/page.tsx","src/app/ru/page.tsx","src/app/by/page.tsx"]){
 const source=readFileSync(join(root,rel),"utf8");
 if(!source.includes("EditorialVisual")&&!source.includes('/art/'))problems.push("Page missing visual integration: "+rel);
}


const editorialVisual=readFileSync(join(root,"src/components/EditorialVisual.tsx"),"utf8");
const articleVisual=readFileSync(join(root,"src/components/ArticleArtwork.tsx"),"utf8");
const explorer=readFileSync(join(root,"src/components/ArticleExplorer.tsx"),"utf8");
const article=readFileSync(join(root,"src/app/blog/[slug]/page.tsx"),"utf8");
const calculator=readFileSync(join(root,"src/components/ScopeCalculator.tsx"),"utf8");
const service=readFileSync(join(root,"src/app/services/[slug]/page.tsx"),"utf8");
const solutionExplorer=readFileSync(join(root,"src/components/SolutionExplorer.tsx"),"utf8");
for(const [label,source,needles] of [
 ["Journal cards",explorer,["ArticleArtwork","aria-pressed","filtered.map"]],
 ["Article presentation",article,["ArticleArtwork","ArticleActions","generateMetadata"]],
 ["Article art direction",articleVisual,["EditorialVisual","categoryArt"]],
 ["Calculator live details",calculator,["detail.addons","aria-live","scope-pages","Сбросить параметры"]],
 ["Service leads",service,["/contact","/pricing","СМЕЖНАЯ ЭКСПЕРТИЗА","services.filter"]],
 ["Catalog navigation",solutionExplorer,["sort===","onChange","filtered.map"]],
 ["Visual fallback",editorialVisual,["onError","art.fallback"]]
]){for(const needle of needles){if(!source.includes(needle))problems.push("UI check failed: "+label+" / "+needle);}}
if(!existsSync(join(root,"src/components/ArticleActions.tsx")))problems.push("Missing article sharing tools.");

console.log("KODERA audit: "+solutions.length+" solutions, "+articles.length+" articles");
if(problems.length){for(const x of problems)console.error("FAIL:",x);process.exitCode=1;}else console.log("PASS: Content structure and required routes found.");
