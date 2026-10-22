import {articles} from "@/lib/articles";
import {guidesA} from "@/lib/articleGuidesA";
import {guidesB} from "@/lib/articleGuidesB";
import {guidesC} from "@/lib/articleGuidesC";
export type EditorialSection={heading:string;paragraphs:readonly string[]};
const guidance:Record<string,readonly EditorialSection[]>={...guidesA,...guidesB,...guidesC};
function countWords(s:string){return (s.trim().match(/[\p{L}\p{N}]+(?:[-–—'][\p{L}\p{N}]+)*/gu)||[]).length;}
export function estimateReadingMinutes(sections:readonly EditorialSection[],title=""){
 const all=[title,...sections.flatMap(s=>[s.heading,...s.paragraphs])].join(" ");
 return Math.max(1,Math.ceil(countWords(all)/170));
}
export const expandedArticles=articles.map(a=>{
 const sections:EditorialSection[]=[...a.sections,...(guidance[a.slug]||[])];
 return {...a,sections,readingMinutes:estimateReadingMinutes(sections,a.title)};
});
