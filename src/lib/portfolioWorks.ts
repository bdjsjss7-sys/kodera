import {portfolioConcepts} from "@/lib/portfolioConcepts";
import {showcases} from "@/lib/showcases";
export const portfolioCategories=[
 {id:"all",label:"Все концепты"},
 {id:"ecommerce",label:"Магазины"},
 {id:"corporate",label:"Корпоративные"},
 {id:"landing",label:"Лендинги"},
 {id:"saas",label:"SaaS"},
 {id:"healthcare",label:"Медицина"},
 {id:"real-estate",label:"Недвижимость"},
 {id:"hospitality",label:"Отели и рестораны"},
 {id:"education",label:"Образование"},
 {id:"finance",label:"Финансы"},
 {id:"industrial",label:"Промышленность"},
 {id:"media",label:"Медиа"},
 {id:"creative",label:"Студии"}
] as const;
type Entry={slug:string;name:string;kind:string;category:string;sector:string;accent:string;pitch:string;short:string;level:string;tags:readonly string[];audience:string;problem:string;idea:string;features:readonly string[];process:readonly string[];results:readonly string[];note:string;related:string;cover:string;mobileCover:string;isOriginal:boolean};
const oldCategory:Record<string,string>={"atelier-audio":"ecommerce","nord-clinic":"healthcare","form-architecture":"creative","flux-workspace":"saas","terra-stay":"hospitality","vector-industry":"industrial"};
export const portfolioWorks:Entry[]=[
 ...portfolioConcepts.map(x=>({...x,cover:`/art/portfolio/${x.slug}-desktop.svg`,mobileCover:`/art/portfolio/${x.slug}-mobile.svg`,isOriginal:false})),
 ...showcases.map(x=>({...x,category:oldCategory[x.slug]||"creative",level:"Премиум",cover:`/art/works/${x.slug}-desktop.svg`,mobileCover:`/art/works/${x.slug}-mobile.svg`,isOriginal:true}))
];
export function findPortfolioWork(slug:string){return portfolioWorks.find(x=>x.slug===slug)}
export function relatedPortfolioWorks(slug:string,category:string,limit=3){const matching=portfolioWorks.filter(x=>x.slug!==slug&&x.category===category);return [...matching,...portfolioWorks.filter(x=>x.slug!==slug&&x.category!==category)].slice(0,limit)}
