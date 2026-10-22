"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {visualAssets} from "@/lib/visualAssets";

type Mode="site"|"shop"|"product"|"seo";
const tabs:{id:Mode;label:string;tag:string;href:string}[]=[
 {id:"site",label:"Сайт",tag:"01 / WEB",href:"/solutions/corporate-website"},
 {id:"shop",label:"Магазин",tag:"02 / COMMERCE",href:"/solutions/online-store"},
 {id:"product",label:"Веб-сервис",tag:"03 / PRODUCT",href:"/solutions/personal-account"},
 {id:"seo",label:"SEO",tag:"04 / PERFORMANCE",href:"/solutions/seo-audit"},
];

function ArtPhoto({src,alt,fallback,className="",priority=false}:{src:string;alt:string;fallback:string;className?:string;priority?:boolean}){
 const [broken,setBroken]=useState(false);
 return <Image src={broken?fallback:src} alt={alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1280px) 65vw, 760px" unoptimized priority={priority} onError={()=>setBroken(true)} className={className}/>;
}
function Screen({mode}:{mode:Mode}){
 if(mode==="shop")return <div className="relative flex h-full min-h-0 flex-col overflow-hidden bg-[#141215]">
  <ArtPhoto src={visualAssets.headphones} fallback="/art/commerce-experience.svg" alt="Предметная фотография наушников в концептуальном интернет-магазине" className="object-cover object-[64%_43%] opacity-95"/>
  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#100e12_0%,#120f13f7_21%,#120f1388_47%,#120f1306_82%),linear-gradient(0deg,#0b0c10ef_0%,transparent_25%,transparent_76%,#0b0c1066_100%)]"/>
  <div className="relative z-10 flex flex-1 flex-col justify-between p-5 sm:p-8">
   <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] uppercase tracking-[.2em] text-[#f0d1a8]"><span>KODERA / PREMIUM AUDIO</span><span>NEW COLLECTION 01</span></div>
   <div className="max-w-[65%]"><p className="text-[10px] tracking-[.19em] text-[#e5b982]">ЭЛЕКТРОННАЯ КОММЕРЦИЯ</p><h3 className="mt-3 text-[clamp(1.85rem,3.8vw,3.4rem)] font-light leading-[1.05] tracking-[-.055em]">Техника,<br/>которая<br/><span className="text-[#e3c096]">впечатляет.</span></h3><p className="mt-4 max-w-[215px] text-xs leading-6 text-white/75">Атмосфера продукта, удобный каталог и понятный выбор.</p><span className="mt-5 inline-flex rounded-full bg-[#e4c398] px-4 py-3 text-[11px] text-[#1b1513]">Смотреть коллекцию ↗</span></div>
   <div className="flex items-end justify-between gap-2 border-t border-white/20 pt-4"><div><p className="text-[9px] tracking-[.2em] text-[#e6c49b]">CURATED / OBJECT 01</p><p className="mt-1 text-[11px] text-white/65">Демонстрационный концепт</p></div><span className="text-[10px] tracking-wider text-white/60">01 / 03</span></div>
  </div>
 </div>;
 if(mode==="site")return <div className="relative h-full overflow-hidden bg-[#17151a]">
  <ArtPhoto src={visualAssets.studio} fallback="/art/web-experience.svg" alt="Тёмное рабочее пространство с ноутбуком и тёплым светом" className="object-cover object-[65%_40%] opacity-85"/>
  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#111115_4%,#141218ed_41%,#1b171955_78%),linear-gradient(0deg,#100e14ad,transparent_40%)]"/>
  <div className="relative flex h-full flex-col justify-between p-5 sm:p-8">
   <div className="flex items-center justify-between text-[10px] tracking-[.2em] text-[#e5c49d]"><span>ATELIER / DIGITAL</span><span>01 / EDITORIAL</span></div>
   <div className="max-w-[73%]"><p className="text-[10px] tracking-[.2em] text-[#e5c49d]">ДИЗАЙН И АРХИТЕКТУРА</p><h3 className="mt-5 text-[clamp(1.8rem,3.6vw,3.4rem)] font-light leading-[1.08] tracking-[-.06em]">Ваш бизнес.<br/><span className="text-[#e2be94]">Ваш стиль.</span></h3><p className="mt-5 max-w-64 text-sm leading-7 text-white/75">Выразительный образ и продуманная структура, которая ведёт к действию.</p><span className="mt-6 inline-flex rounded-full border border-[#dfbf98]/70 bg-[#dfbf98] px-5 py-3 text-[11px] text-[#191513]">Изучить решение ↗</span></div>
   <div className="flex justify-between gap-3 border-t border-white/20 pt-4 text-[9px] tracking-[.16em] text-[#e5c49d]"><span>FORM / PURPOSE</span><span>WEB DESIGN</span></div>
  </div>
 </div>;
 if(mode==="product")return <div className="relative flex h-full overflow-hidden bg-[#141519]">
  <ArtPhoto src={visualAssets.laptop} fallback="/art/service-experience.svg" alt="Ноутбук в вечернем рабочем пространстве как фон цифрового продукта" className="object-cover object-right opacity-40"/>
  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#101115d9,#111216bd_85%)]"/>
  <div className="relative flex h-full min-w-0"><div className="hidden w-[22%] flex-col border-r border-[#d5b58f]/15 bg-black/25 p-5 sm:flex"><p className="text-xs text-[#e0c096]">K.</p><div className="mt-9 space-y-4">{["Обзор","Проекты","Задачи","Команда"].map((x,i)=><p key={x} className={`rounded-lg px-2 py-2 text-[11px] ${i===0?"bg-[#d5b58f]/15 text-[#e2be94]":"text-white/50"}`}>{x}</p>)}</div><span className="mt-auto text-[9px] text-white/40">PRODUCT UI</span></div><div className="min-w-0 flex-1 p-5 sm:p-7"><p className="text-[10px] tracking-[.2em] text-[#e2be94]">KODERA / WORKSPACE</p><h3 className="mt-4 text-[clamp(1.6rem,3vw,2.6rem)] font-light tracking-[-.05em]">Рабочие процессы.<br/><span className="text-[#e2be94]">Под контролем.</span></h3><div className="mt-6 grid grid-cols-3 gap-2">{[["08","Задачи"],["03","Проекты"],["24","События"]].map(([num,label])=><div key={label} className="rounded-xl border border-white/15 bg-[#202127]/80 p-3"><p className="text-2xl text-[#e2be94] sm:text-3xl">{num}</p><p className="mt-2 text-[9px] text-white/55">{label}</p></div>)}</div><div className="mt-4 rounded-xl border border-white/15 bg-[#202127]/90 p-4"><p className="text-[10px] tracking-[.16em] text-[#e2be94]">ЗАДАЧИ ПРОЕКТА</p>{[76,53,91].map((x,i)=><div key={x} className="mt-4 flex items-center gap-3"><span className="text-[9px] text-white/50">0{i+1}</span><span className="h-2 flex-1 rounded-full bg-white/10"><span style={{width:x+"%"}} className="block h-full rounded-full bg-gradient-to-r from-[#98734e] to-[#e2be94]"/></span></div>)}</div></div></div>
 </div>;
 return <div className="relative h-full overflow-hidden bg-[#141519]">
  <ArtPhoto src={visualAssets.atmosphere} fallback="/art/data-experience.svg" alt="Абстрактные чёрно-золотые поверхности на фоне цифровой аналитики" className="object-cover opacity-35"/>
  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#101114]/65"/>
  <div className="relative flex h-full flex-col p-5 sm:p-8"><div className="flex justify-between gap-3 text-[10px] tracking-[.19em] text-[#e2be94]"><span>PERFORMANCE / INSIGHTS</span><span>OVERVIEW</span></div><h3 className="mt-7 text-[clamp(1.7rem,3.4vw,3rem)] font-light leading-[1.06] tracking-[-.05em]">Данные.<br/><span className="text-[#e2be94]">Не догадки.</span></h3><p className="mt-3 max-w-[260px] text-xs leading-6 text-white/65">События, интерес аудитории, воронка обращений.</p><div className="mt-auto flex h-[36%] items-end gap-2 border-b border-[#e2be94]/25 bg-[repeating-linear-gradient(to_top,transparent_0px,transparent_46px,#d5b58f12_47px)] px-2">{[22,32,29,47,42,59,51,71,66,86,80,98].map((n,i)=><span key={i} style={{height:n+"%"}} className="flex-1 rounded-t bg-gradient-to-t from-[#795636] to-[#e3c396]"/>)}</div><div className="mt-5 flex justify-between text-[10px] text-white/50"><span>01 / SOURCES</span><span>02 / EVENTS</span><span>03 / CONVERSIONS</span></div></div>
 </div>;
}
function ServiceCard({kind,title,description,href,index}:{kind:"web"|"ux"|"seo";title:string;description:string;href:string;index:number}){
 const art=kind==="web"?visualAssets.studio:kind==="ux"?visualAssets.craft:visualAssets.laptop;
 const fallback=kind==="web"?"/art/web-experience.svg":kind==="ux"?"/art/sculpture.svg":"/art/data-experience.svg";
 return <Link href={href} className="group relative flex min-h-[166px] items-center gap-5 overflow-hidden rounded-[24px] border border-[#d5b58f]/25 bg-[#171619]/85 p-4 shadow-[0_18px_50px_#0005] transition duration-300 hover:-translate-y-1 hover:border-[#e2be94]/70 sm:p-5">
  <div className="relative h-28 w-[38%] shrink-0 overflow-hidden rounded-xl border border-[#d5b58f]/15 bg-[#242126]"><ArtPhoto src={art} fallback={fallback} alt="" className="object-cover transition-transform duration-500 group-hover:scale-110"/><span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#161619]/45"/></div>
  <div className="min-w-0 flex-1"><p className="text-[10px] tracking-[.19em] text-[#d5b58f]">0{index} / {kind.toUpperCase()}</p><h3 className="mt-3 text-xl font-light tracking-[-.04em]">{title}</h3><p className="mt-3 text-xs leading-6 text-white/55">{description}</p></div><span className="text-xl text-[#d5b58f] transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
 </Link>;
}

export default function CinematicHero(){
 const [mode,setMode]=useState<Mode>("shop");
 const selected=tabs.find(x=>x.id===mode)!;
 return <section className="kodera-hero relative isolate overflow-hidden border-b border-[#d5b58f]/20 bg-[#0c0c0f]">
 <div aria-hidden className="kodera-hero-backdrop pointer-events-none absolute inset-0" />
 <div className="pointer-events-none absolute -left-20 bottom-4 h-80 w-80 rounded-full bg-[#b78549]/[.09] blur-[100px]" aria-hidden/>
 <div className="kodera-hero-grid relative mx-auto grid max-w-[1500px] gap-14 px-5 pb-14 pt-20 md:px-12 md:pt-24 lg:grid-cols-[.96fr_1.04fr] lg:items-center lg:gap-16">
 <div className="kodera-hero-copy"><p className="text-[11px] uppercase tracking-[.28em] text-[#d5b58f]">KODERA / DIGITAL STUDIO · РОССИЯ И БЕЛАРУСЬ</p><h1 className="kodera-hero-title mt-10 text-[clamp(3.4rem,6.7vw,7rem)] font-light leading-[.97] tracking-[-.075em]">Цифровые<br/>продукты.<br/><span className="text-[#e5bf94]">С характером.</span></h1><p className="kodera-hero-intro mt-9 max-w-xl text-base leading-9 text-white/70">Разрабатываем сайты и веб-сервисы с сильным дизайном, понятными сценариями и технической основой для роста.</p><div className="kodera-hero-actions mt-10 flex flex-wrap gap-3"><Link href="/contact" className="rounded-full bg-[#e0bc90] px-7 py-4 text-sm text-[#161311] transition hover:bg-[#f4d7af]">Обсудить проект ↗</Link><a href="#interactive-demo" className="rounded-full border border-white/25 bg-black/10 px-7 py-4 text-sm text-white/90 transition hover:border-[#d5b58f]">Смотреть демонстрацию ↓</a></div><div className="kodera-hero-stats mt-14 grid grid-cols-3 gap-3 border-t border-[#d5b58f]/20 pt-8">{[["44","направления"],["02","рынка"],["05","этапов"]].map(([n,label])=><div key={n}><p className="text-3xl font-light text-[#e4c199] md:text-4xl">{n}</p><p className="mt-2 text-xs text-white/50">{label}</p></div>)}</div></div>
 <div id="interactive-demo" className="kodera-hero-showcase min-w-0"><div className="flex items-center justify-between gap-3"><p className="text-[11px] uppercase tracking-[.23em] text-[#e1bc90]">ИНТЕРАКТИВНАЯ ДЕМОНСТРАЦИЯ</p><span className="text-xs text-white/60">0{tabs.findIndex(t=>t.id===mode)+1} / 04</span></div>
 <div role="group" aria-label="Выбор демонстрационного интерфейса" className="kodera-hero-tabs mt-5 flex flex-wrap gap-2">{tabs.map(t=><button key={t.id} type="button" onMouseEnter={()=>setMode(t.id)} onFocus={()=>setMode(t.id)} onClick={()=>setMode(t.id)} aria-pressed={mode===t.id} className={`rounded-full border px-4 py-3 text-xs transition ${mode===t.id?"border-[#e1bc90] bg-[#e1bc90] text-[#14110f]":"border-white/20 bg-black/25 text-white/70 hover:border-[#e1bc90]/65"}`}><span aria-hidden className="mr-2 inline-block h-2 w-2 rounded-full bg-current align-middle"/>{t.label}</button>)}</div>
 <div className="kodera-hero-device relative mt-8 [perspective:1300px]"><div aria-hidden className="pointer-events-none absolute -inset-8 rounded-[50%] bg-[#c48b52]/10 blur-3xl"/><div className="kodera-hero-tablet relative overflow-hidden rounded-[27px] border border-[#e1bc90]/60 bg-[#121113] shadow-[30px_45px_85px_#000a,0_0_42px_#bd8a5055] transition-transform duration-700 ease-out motion-reduce:transform-none [transform:rotateY(-8deg)_rotateX(3deg)_rotateZ(-2deg)] hover:[transform:rotateY(-3deg)_rotateX(1deg)_rotateZ(0deg)]"><div className="flex items-center gap-2 border-b border-[#d5b58f]/20 bg-[#151416] px-4 py-3"><div className="flex gap-1" role="group" aria-label="Точки переключения экранов">{tabs.map((t,i)=><button key={t.id} type="button" onMouseEnter={()=>setMode(t.id)} onFocus={()=>setMode(t.id)} onClick={()=>setMode(t.id)} aria-label={"Показать "+t.label} aria-pressed={mode===t.id} className="group grid h-9 w-8 place-items-center rounded-md hover:bg-[#e1bc90]/10 focus-visible:outline-2 focus-visible:outline-[#e1bc90]"><span className={`h-2.5 rounded-full transition-all ${mode===t.id?"w-5 bg-[#e1bc90] shadow-[0_0_10px_#d5b58f99]":"w-2.5 bg-white/30 group-hover:bg-[#e1bc90]"}`}/></button>)}</div><p className="mx-auto truncate rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-[10px] tracking-[.14em] text-white/45">KODERA / CONCEPT PREVIEW</p><span className="text-[#e1bc90]">↗</span></div><div key={mode} className="kodera-reveal h-[390px] sm:h-[440px]"><Screen mode={mode}/></div><div className="flex items-center justify-between border-t border-[#e1bc90]/15 bg-[#111114] px-5 py-4 text-[10px] tracking-[.13em] text-[#e1bc90]"><span>{selected.tag}</span><span>CONCEPT / НЕ КЕЙС</span></div></div></div>
 <div className="mt-6 flex flex-wrap items-center gap-3"><Link href={selected.href} className="rounded-full border border-[#e1bc90]/40 px-5 py-3 text-xs text-[#e1bc90] hover:bg-[#e1bc90]/10">Подробнее о решении ↗</Link><button type="button" onClick={()=>setMode(tabs[(tabs.findIndex(t=>t.id===mode)+1)%tabs.length].id)} className="ml-auto rounded-full border border-white/20 px-5 py-3 text-xs text-white/75 hover:border-white/50">Следующий экран →</button></div>
 <p className="mt-4 text-[11px] leading-6 text-white/45">Четыре интерактивных концепта для демонстрации подхода. Не являются реальными проектами клиентов.</p>
 </div></div>
 <div className="kodera-hero-cards relative mx-auto grid max-w-[1500px] gap-4 px-5 pb-14 md:grid-cols-3 md:px-12 md:pb-20"><ServiceCard kind="web" index={1} title="WEB" description="Сайты и цифровые витрины." href="/services/razrabotka-sajtov"/><ServiceCard kind="ux" index={2} title="UX / UI" description="Интерфейсы, которые легко использовать." href="/services/ux-ui-dizajn"/><ServiceCard kind="seo" index={3} title="SEO" description="Поисковая структура и аналитика." href="/services/seo"/></div>
 </section>;
}
