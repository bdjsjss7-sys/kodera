"use client";
import {useMemo,useState} from "react";
import PortfolioArtwork from "@/components/PortfolioArtwork";
import Link from "next/link";
import {portfolioCategories} from "@/lib/portfolioWorks";
type Item={slug:string;name:string;kind:string;sector:string;pitch:string;short:string;category:string;level:string;cover:string;accent:string;tags:readonly string[]};
const levels=["Все уровни","Старт","Бизнес","Премиум","Флагман"];
export default function ShowcaseExplorer({items}:{items:readonly Item[]}){
 const [category,setCategory]=useState("all");
 const [level,setLevel]=useState("Все уровни");
 const [query,setQuery]=useState("");
 const [visible,setVisible]=useState(18);
 const filtered=useMemo(()=>items.filter(x=>{
  if(category!=="all"&&x.category!==category)return false;
  if(level!=="Все уровни"&&x.level!==level)return false;
  const terms=query.toLocaleLowerCase("ru").trim().split(/\s+/).filter(Boolean);
  return terms.every(t=>[x.name,x.sector,x.kind,x.short,x.pitch,...x.tags].join(" ").toLocaleLowerCase("ru").includes(t));
 }),[items,category,level,query]);
 const shown=filtered.slice(0,visible);
 const choose=(id:string)=>{setCategory(id);setVisible(18)};
 return <div id="portfolio-catalog" className="scroll-mt-24">
 <div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-8"><div><p className="text-xs tracking-[.26em] text-[#d5b58f]">КАТАЛОГ / 90 КОНЦЕПТОВ</p><h2 className="mt-4 text-4xl font-light tracking-[-.05em] md:text-6xl">Найдите свой <span className="text-[#d5b58f]">ориентир.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/50">От простой страницы для малого бизнеса до сложной флагманской платформы.</p></div>
 <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Фильтр по направлениям">{portfolioCategories.map(c=><button key={c.id} type="button" aria-pressed={category===c.id} onClick={()=>choose(c.id)} className={`rounded-full border px-4 py-3 text-[11px] transition ${category===c.id?"border-[#d5b58f] bg-[#d5b58f] text-[#181512]":"border-[#d5b58f]/20 bg-white/[.025] text-white/65 hover:border-[#d5b58f]/60 hover:text-white"}`}>{c.label}</button>)}</div>
 <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]"><label className="relative"><span className="sr-only">Поиск по примерам</span><span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d5b58f]">⌕</span><input type="search" value={query} onChange={e=>{setQuery(e.target.value);setVisible(18)}} placeholder="Например: стоматология, интернет-магазин, SaaS…" className="w-full rounded-[16px] border border-white/20 bg-[#17181d] py-4 pl-11 pr-5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d5b58f]"/></label><label className="flex items-center gap-3 rounded-[16px] border border-white/20 bg-[#17181d] px-4 text-xs text-white/45">Уровень <select value={level} onChange={e=>{setLevel(e.target.value);setVisible(18)}} className="min-h-[52px] bg-transparent text-sm text-[#e6c59a] outline-none">{levels.map(x=><option key={x} value={x} className="bg-[#1a1b21] text-white">{x}</option>)}</select></label></div>
 <div className="mt-6 flex justify-between gap-4 text-xs text-white/45"><p role="status" aria-live="polite">Найдено {filtered.length} · показано {shown.length}</p>{(category!=="all"||query||level!=="Все уровни")&&<button onClick={()=>{setCategory("all");setLevel("Все уровни");setQuery("");setVisible(18)}} type="button" className="text-[#d5b58f] underline underline-offset-4">Сбросить фильтры</button>}</div>
 {shown.length===0?<div className="mt-10 rounded-[24px] border border-white/10 p-14 text-center"><h3 className="text-2xl">Ничего не найдено</h3><p className="mt-4 text-white/50">Попробуйте другую тему или сбросьте фильтры.</p></div>:<div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{shown.map((item,i)=><Link key={item.slug} href={`/works/${item.slug}`} className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#191a1e] transition duration-300 hover:-translate-y-1 hover:border-[#d5b58f]/60 hover:shadow-[0_24px_55px_#0008]">
 <figure className="relative aspect-[16/10] overflow-hidden bg-[#2a292c]"><PortfolioArtwork work={item} scene={0} compact/><figcaption className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-[#141419]/90 px-3 py-2 text-[9px] uppercase tracking-[.13em] text-[#e6c49b]">Дизайн-концепт / не клиентский заказ</figcaption></figure>
 <div className="flex flex-1 flex-col p-6"><div className="flex items-start justify-between gap-3"><p className="text-[10px] uppercase tracking-[.13em] text-[#d5b58f]">{item.sector}</p><span className="shrink-0 text-[#d5b58f]">↗</span></div><h3 className="mt-4 text-[25px] font-light tracking-[-.04em]">{item.name}</h3><p className="mt-3 text-sm leading-7 text-white/55">{item.short}</p><div className="mt-auto flex flex-wrap gap-2 pt-6"><span className="rounded-full border border-[#d5b58f]/30 px-3 py-2 text-[10px] text-[#d5b58f]">{item.level}</span><span className="rounded-full border border-white/15 px-3 py-2 text-[10px] text-white/45">{item.kind}</span></div></div></Link>)}</div>}
 {visible<filtered.length&&<div className="mt-11 text-center"><button type="button" onClick={()=>setVisible(v=>v+18)} className="rounded-full border border-[#d5b58f]/50 px-8 py-4 text-sm text-[#d5b58f] hover:bg-[#d5b58f]/10">Показать ещё {Math.min(18,filtered.length-visible)} примеров ↓</button></div>}
 </div>;
}
