"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import ArticleArtwork from "@/components/ArticleArtwork";
type Entry={slug:string;title:string;category:string;description:string;readingMinutes:number};
export default function ArticleExplorer({items}:{items:readonly Entry[]}){
 const [query,setQuery]=useState("");const [category,setCategory]=useState("Все темы");
 const categories=useMemo(()=>["Все темы",...Array.from(new Set(items.map(a=>a.category)))], [items]);
 const filtered=useMemo(()=>items.filter(a=>(category==="Все темы"||a.category===category)&&[a.title,a.description,a.category].join(" ").toLocaleLowerCase("ru").includes(query.trim().toLocaleLowerCase("ru"))),[items,category,query]);
 return <div className="mt-16">
  <div className="flex flex-col gap-5 border-y border-white/10 py-7 md:flex-row md:items-center md:justify-between">
   <label className="flex max-w-xl flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/[.04] px-5 py-4"><span aria-hidden="true" className="text-[#d5b58f]">⌕</span><span className="sr-only">Поиск статей</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Найти статью по теме..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"/></label>
   <p aria-live="polite" className="text-sm text-white/45">Найдено материалов: {filtered.length}</p>
  </div>
  <nav aria-label="Темы статей" className="mt-7 flex flex-wrap gap-2">{categories.map(c=><button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)} className={`rounded-full border px-4 py-2.5 text-xs transition ${category===c?"border-[#d5b58f] bg-[#d5b58f] text-[#141414]":"border-white/15 text-white/65 hover:border-[#d5b58f] hover:text-[#d5b58f]"}`}>{c}</button>)}</nav>
  {filtered.length===0?<div className="mt-14 rounded-3xl border border-white/10 p-12"><h2 className="text-2xl font-light">Материалы не найдены.</h2><p className="mt-3 text-white/50">Попробуйте другой запрос или сбросьте фильтр.</p><button type="button" onClick={()=>{setQuery("");setCategory("Все темы")}} className="mt-6 text-[#d5b58f] underline underline-offset-4">Показать все статьи</button></div>:
  <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((a,i)=><Link key={a.slug} href={`/blog/${a.slug}`} className="group flex min-h-[420px] flex-col justify-between rounded-[26px] border border-white/10 bg-[#1b1c20] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d5b58f]/60 md:p-7"><div><ArticleArtwork category={a.category} slug={a.slug} className="!min-h-0 h-48 mb-7" /><div className="flex justify-between gap-4 text-[11px] uppercase tracking-[.15em] text-[#d5b58f]"><span>{a.category}</span><span>↗</span></div></div><div><h2 className="text-2xl font-light leading-tight tracking-[-.03em] md:text-3xl">{a.title}</h2><p className="mt-5 text-sm leading-7 text-white/55">{a.description}</p><p className="mt-7 text-xs text-white/40">≈ {a.readingMinutes} мин чтения</p></div></Link>)}</div>}
 </div>;
}
