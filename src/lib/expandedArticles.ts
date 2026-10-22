import {articles} from "@/lib/articles";
import {guidesA} from "@/lib/articleGuidesA";
import {guidesB} from "@/lib/articleGuidesB";
import {guidesC} from "@/lib/articleGuidesC";
import {applicationsA} from "@/lib/articleApplicationsA";
import {applicationsB} from "@/lib/articleApplicationsB";
import {applicationsC} from "@/lib/articleApplicationsC";
export type EditorialSection={heading:string;paragraphs:readonly string[]};
const deepGuidance:Record<string,readonly (readonly string[])[]>={...guidesA,...guidesB,...guidesC};
const practicalGuidance:Record<string,readonly (readonly string[])[]>={...applicationsA,...applicationsB,...applicationsC};
const rawGuidance:Record<string,readonly (readonly string[])[]>=Object.fromEntries(
 Object.entries(deepGuidance).map(([slug,sections])=>[slug,[...sections,...(practicalGuidance[slug]||[])]])
);
const guidance:Record<string,EditorialSection[]>=Object.fromEntries(Object.entries(rawGuidance).map(([slug,sections])=>[slug,sections.map(([heading,...paragraphs])=>({heading,paragraphs}))]));
function countWords(s:string){return (s.trim().match(/[\p{L}\p{N}]+(?:[-–—'][\p{L}\p{N}]+)*/gu)||[]).length;}
export function estimateReadingMinutes(sections:readonly EditorialSection[],title=""){
 const all=[title,...sections.flatMap(s=>[s.heading,...s.paragraphs])].join(" ");
 return Math.max(1,Math.ceil(countWords(all)/170));
}
export const expandedArticles=articles.map(a=>{
 const sections:EditorialSection[]=[...a.sections,...(guidance[a.slug]||[])];
 return {...a,sections,readingMinutes:estimateReadingMinutes(sections,a.title)};
});
