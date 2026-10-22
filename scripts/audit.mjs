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
 const prefix="export const "+name+" = ";
 const start=src.indexOf(prefix),end=src.lastIndexOf(" as const;");
 if(start<0||end<=start)throw Error("Could not read guide "+name);
 return JSON.parse(src.slice(start+prefix.length,end));
}
const guideData={...loadGuide("src/lib/articleGuidesA.ts","guidesA"),...loadGuide("src/lib/articleGuidesB.ts","guidesB"),...loadGuide("src/lib/articleGuidesC.ts","guidesC")};
const applicationData={...loadGuide("src/lib/articleApplicationsA.ts","applicationsA"),...loadGuide("src/lib/articleApplicationsB.ts","applicationsB"),...loadGuide("src/lib/articleApplicationsC.ts","applicationsC")};
const countWords=s=>s.trim().split(/\s+/).filter(Boolean).length;
for(const a of articles){
 const deep=guideData[a.slug];
 const handsOn=applicationData[a.slug];
 if(!deep||deep.length<5||!handsOn||handsOn.length<2){problems.push("Missing in-depth practical chapters: "+a.slug);continue;}
 const all=a.sections.flatMap(s=>[s.heading,...s.paragraphs]).join(" ")+" "+deep.flat().join(" ")+" "+handsOn.flat().join(" ");
 if(countWords(all)<700)problems.push("Article still too short: "+a.slug+" ("+countWords(all)+" words)");
}
if(Object.keys(guideData).length!==articles.length||Object.keys(applicationData).length!==articles.length)problems.push("Guide and article counts disagree.");
const enrichedSource=readFileSync(join(root,"src/lib/expandedArticles.ts"),"utf8");
if(!enrichedSource.includes("estimateReadingMinutes"))problems.push("Dynamic reading-time calculator missing.");


const newPages=loadTsArray("src/lib/newServicePages.ts","newServicePages");
const newArticles=loadTsArray("src/lib/newArticles.ts","newArticles");
const newFieldNotes=loadGuide("src/lib/newArticleFieldNotes.ts","newArticleFieldNotes");
if(newPages.length!==56)problems.push("Expected 56 new commercial landings, found "+newPages.length);
if(newArticles.length!==24)problems.push("Expected 24 new articles, found "+newArticles.length);
const sectionCounts={};
const knownSlugs=new Set(solutions.map(s=>s.slug));
const seenNew=new Set();
for(const x of newPages){
 const key=x.group+"/"+x.slug;
 sectionCounts[x.group]=(sectionCounts[x.group]||0)+1;
 if(seenNew.has(key))problems.push("Duplicate new commercial page: "+key);
 seenNew.add(key);
 if(knownSlugs.has(x.slug))problems.push("Commercial slug duplicates an original solution: "+x.slug);
 const art="public/art/new/"+key+".svg";
 if(!existsSync(join(root,art)))problems.push("Missing custom landing artwork: "+art);
 if(!x.title||!x.subtitle||!x.audience||!x.scenarios||!x.integrations||!x.risks||!x.delivery)problems.push("Thin landing specification: "+key);
 if(!existsSync(join(root,"src/app/"+x.group+"/[slug]/page.tsx")))problems.push("Missing new landing route: "+x.group);
}
for(const [group,count] of [["website-types",12],["industries",20],["technologies",12],["seo",12]]){
 if(sectionCounts[group]!==count)problems.push("Bad catalog count: "+group+" / "+sectionCounts[group]);
 if(!existsSync(join(root,"src/app/"+group+"/page.tsx")))problems.push("Missing catalog overview: "+group);
}
const oldArticleSlugs=new Set(articles.map(a=>a.slug));
const seenNewArticles=new Set();
for(const a of newArticles){
 if(oldArticleSlugs.has(a.slug)||seenNewArticles.has(a.slug))problems.push("Duplicate journal slug: "+a.slug);
 seenNewArticles.add(a.slug);
 const art="public/art/blog/"+a.slug+".svg";
 if(!existsSync(join(root,art)))problems.push("Missing new article cover: "+art);
 if(a.sections.length<10)problems.push("New article missing chapter depth: "+a.slug);
 if(!newFieldNotes[a.slug]?.length)problems.push("Missing unique article case study: "+a.slug);
 const words=countWords([a.title,...a.sections.flatMap(s=>[s.heading,...s.paragraphs]),...(newFieldNotes[a.slug]||[]).flatMap(s=>[s.heading,...s.paragraphs])].join(" "));
 if(words<900)problems.push("New article insufficient: "+a.slug+" / "+words+" words");
}
for(const s of solutions)if(!existsSync(join(root,"public/art/legacy/solutions/"+s.slug+".svg")))problems.push("Missing original solution artwork: "+s.slug);
for(const a of articles)if(!existsSync(join(root,"public/art/legacy/blog/"+a.slug+".svg")))problems.push("Missing original blog artwork: "+a.slug);
for(const s of ["razrabotka-sajtov","ux-ui-dizajn","seo","veb-prilozheniya","avtomatizaciya","podderzhka"])
 if(!existsSync(join(root,"public/art/legacy/services/"+s+".svg")))problems.push("Missing core service artwork: "+s);
const sitemapSrc=readFileSync(join(root,"src/app/sitemap.ts"),"utf8");
if(!sitemapSrc.includes("newServicePages")||!sitemapSrc.includes("expandedArticles"))problems.push("Sitemap missing new website and journal routes.");

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

const extendedConcepts=loadTsArray("src/lib/portfolioConcepts.ts","portfolioConcepts");
if(extendedConcepts.length!==84)problems.push("Expected 84 new tailored portfolio mockups.");
const extendedSlugs=new Set();
for(const item of extendedConcepts){
 if(extendedSlugs.has(item.slug))problems.push("Duplicate portfolio mockup slug: "+item.slug);
 extendedSlugs.add(item.slug);
 for(const device of ["desktop","mobile"]){
  const filename="public/art/portfolio/"+item.slug+"-"+device+".svg";
  if(!existsSync(join(root,filename)))problems.push("Missing portfolio screenshot: "+filename);
 }
 if(!item.problem||!item.idea||!item.short||!item.features?.length)problems.push("Incomplete portfolio presentation: "+item.slug);
}
const portfolioHub=readFileSync(join(root,"src/app/works/page.tsx"),"utf8");
const portfolioDetail=readFileSync(join(root,"src/app/works/[slug]/page.tsx"),"utf8");
if(!portfolioHub.includes("portfolioWorks")||!portfolioDetail.includes("portfolioWorks"))problems.push("Portfolio routes still use partial catalogue.");
const showcaseConcepts=loadTsArray("src/lib/showcases.ts","showcases");
if(showcaseConcepts.length!==6)problems.push("Expected six distinct portfolio concepts.");
for(const s of showcaseConcepts){
 if(!s.slug||!s.name||!s.problem||!s.idea||!s.audience||!s.note||!s.features?.length)problems.push("Incomplete concept case: "+s.slug);
 for(const device of ["desktop","mobile"]){
  const asset="public/art/works/"+s.slug+"-"+device+".svg";
  if(!existsSync(join(root,asset)))problems.push("Missing concept device artwork: "+asset);
 }
}
for(const rel of ["src/app/works/page.tsx","src/app/works/[slug]/page.tsx","src/app/explore/page.tsx","src/components/ShowcasePreview.tsx","src/components/ShowcaseExplorer.tsx","src/components/SearchExplorer.tsx","src/components/SiteSearchOverlay.tsx","src/components/MegaNavigation.tsx","src/lib/siteCatalog.ts"])if(!existsSync(join(root,rel)))problems.push("Missing portfolio or navigation page: "+rel);
const layoutSource=readFileSync(join(root,"src/app/layout.tsx"),"utf8");
const homeSource=readFileSync(join(root,"src/app/page.tsx"),"utf8");
const navSource=readFileSync(join(root,"src/components/MobileNavigation.tsx"),"utf8");
const mobileDockSource=readFileSync(join(root,"src/components/MobileSiteDock.tsx"),"utf8");
const sitemapShowcaseSource=readFileSync(join(root,"src/app/sitemap.ts"),"utf8");
if(!layoutSource.includes("<SiteSearchOverlay"))problems.push("Sitewide search not mounted.");
if(!homeSource.includes("<MegaNavigation/>")||!homeSource.includes('id="works"'))problems.push("Home navigation or visible work samples missing.");
if(!navSource.includes("/works")||!mobileDockSource.includes("/works"))problems.push("Work samples inaccessible in mobile menus.");
if(!sitemapShowcaseSource.includes("portfolioWorks.map"))problems.push("Portfolio missing from sitemap.");

console.log("KODERA audit: "+(solutions.length+newPages.length)+" commercial directions, "+(articles.length+newArticles.length)+" journal articles; "+(newPages.length+newArticles.length+solutions.length+articles.length+6)+" tailored visual assets.");
if(problems.length){for(const x of problems)console.error("FAIL:",x);process.exitCode=1;}else console.log("PASS: Content structure and required routes found.");
