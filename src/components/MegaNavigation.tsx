"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
type Group="services"|"knowledge"|"studio";
const groups:{id:Group;name:string;eyebrow:string;description:string;links:{label:string;href:string;detail:string}[]}[]=[
 {id:"services",name:"Услуги",eyebrow:"01 / РЕШЕНИЯ",description:"Все форматы сайтов, отраслевые предложения и сложные цифровые продукты — по понятным направлениям.",links:[
 {label:"Все услуги",href:"/services",detail:"6 основных направлений KODERA"},
 {label:"Виды сайтов",href:"/website-types",detail:"Лендинги, каталоги, магазины, порталы"},
 {label:"По отраслям",href:"/industries",detail:"20 направлений бизнеса"},
 {label:"Технологии",href:"/technologies",detail:"Next.js, React, SaaS, CRM"},
 {label:"SEO и развитие",href:"/seo",detail:"Поисковая архитектура и аналитика"},
 {label:"Все решения",href:"/solutions",detail:"Большой каталог экспертизы"},
 {label:"Рассчитать проект",href:"/pricing#project-calculator",detail:"Интерактивный калькулятор"}]},
 {id:"knowledge",name:"Экспертиза",eyebrow:"02 / ВДОХНОВЕНИЕ",description:"Посмотрите варианты дизайна, выберите подход и изучите конкретные сценарии.",links:[
 {label:"Примеры работ",href:"/works",detail:"80+ концептов от простых до флагманских"},
 {label:"Журнал",href:"/blog",detail:"45 экспертных материалов"},
 {label:"Подобрать формат сайта",href:"/#selector",detail:"Интерактивный помощник"},
 {label:"Как мы работаем",href:"/process",detail:"Структура этапов разработки"},
 {label:"Поиск по всему сайту",href:"/explore",detail:"Услуги, статьи и примеры"},
 {label:"Оставить бриф",href:"/contact",detail:"Начать обсуждение задачи"}]},
 {id:"studio",name:"Студия",eyebrow:"03 / СОТРУДНИЧЕСТВО",description:"Прозрачный путь от первого обсуждения к техническому заданию и созданию продукта.",links:[
 {label:"О студии",href:"/studio",detail:"Подход, принципы и контроль качества"},
 {label:"Калькулятор",href:"/pricing#project-calculator",detail:"Параметры, масштаб и оценка"},
 {label:"Россия",href:"/ru",detail:"Региональное предложение"},
 {label:"Беларусь",href:"/by",detail:"Региональное предложение"},
 {label:"Этапы работы",href:"/process",detail:"Исследование → запуск"},
 {label:"Контакты",href:"/contacts",detail:"Телефоны, Telegram и реквизиты"},
 {label:"Обсудить проект",href:"/contact",detail:"Отправить запрос"},
 {label:"Портфолио концептов",href:"/works",detail:"Выбрать визуальный ориентир"}]}
];
export default function MegaNavigation(){
 const [open,setOpen]=useState<Group|null>(null);
 const triggerRef=useRef<HTMLElement|null>(null);
 const panelRef=useRef<HTMLDivElement|null>(null);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(null)};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[]);
 useEffect(()=>{
  if(!open)return;
  function track(e:PointerEvent){
   if(e.pointerType!=="mouse")return;
   const trigger=triggerRef.current?.getBoundingClientRect(),panel=panelRef.current?.getBoundingClientRect();
   if(!trigger||!panel)return;
   const x=e.clientX,y=e.clientY;
   const hit=(r:DOMRect)=>x>=r.left-3&&x<=r.right+3&&y>=r.top-4&&y<=r.bottom+4;
   const bridge=x>=Math.min(trigger.left,panel.left)&&x<=Math.max(trigger.right,panel.right)&&y>=trigger.bottom-4&&y<=panel.top+4;
   if(!hit(trigger)&&!hit(panel)&&!bridge)setOpen(null);
  }
  window.addEventListener("pointermove",track);
  return()=>window.removeEventListener("pointermove",track);
 },[open]);
 const current=groups.find(x=>x.id===open);
 return <div className="hidden xl:flex items-center gap-4"><nav ref={triggerRef} aria-label="Главное меню" className="flex items-center gap-1">{groups.map(g=><button key={g.id} type="button" aria-expanded={open===g.id} aria-controls="kodera-mega-panel" aria-haspopup="true" onMouseEnter={()=>setOpen(g.id)} onFocus={()=>setOpen(g.id)} onClick={()=>setOpen(v=>v===g.id?null:g.id)} className={`rounded-full px-4 py-3 text-[13px] transition-colors ${open===g.id?"bg-[#d5b58f]/14 text-[#f0d1ab]":"text-white/70 hover:bg-white/5 hover:text-[#e6c39b]"}`}>{g.name}<span aria-hidden="true" className={`ml-2 inline-block text-[10px] transition-transform ${open===g.id?"rotate-180":""}`}>⌄</span></button>)}</nav>
 <Link href="/works" onMouseEnter={()=>setOpen(null)} className="rounded-full px-3 py-3 text-[13px] text-white/75 hover:text-[#e6c39b]">Работы</Link>
 <Link href="/contacts" onMouseEnter={()=>setOpen(null)} className="rounded-full px-3 py-3 text-[13px] text-white/75 hover:text-[#e6c39b]">Контакты</Link>
 <Link href="/pricing#project-calculator" onMouseEnter={()=>setOpen(null)} className="rounded-full border border-[#d5b58f]/50 px-5 py-3 text-[13px] text-[#e6c39b] hover:bg-[#d5b58f]/10">Калькулятор ↗</Link>
 <Link href="/explore" onMouseEnter={()=>setOpen(null)} className="rounded-full px-3 py-3 text-[13px] text-white/75 hover:text-[#e6c39b]">⌕ Поиск</Link>
 {current&&<div ref={panelRef} id="kodera-mega-panel" role="region" aria-label={`Меню ${current.name}`} className="absolute inset-x-0 top-full z-[100] border-y border-[#d5b58f]/30 bg-[#111115] shadow-[0_40px_100px_rgba(0,0,0,.8)]">
 <div className="mx-auto grid max-w-[1210px] gap-6 px-6 py-7 lg:grid-cols-[310px_1fr] lg:gap-9 lg:px-8">
 <div className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#d5b58f]/15 bg-[radial-gradient(ellipse_at_top_left,#42332a,#1c1a1b_73%)] p-7"><div><p className="text-[10px] tracking-[.25em] text-[#e1ba88]">{current.eyebrow}</p><h2 className="mt-6 text-4xl font-light tracking-[-.06em] text-white">{current.name}<span className="text-[#d5b58f]">.</span></h2><p className="mt-5 max-w-[255px] text-sm leading-7 text-white/60">{current.description}</p></div><Link href="/contact" onClick={()=>setOpen(null)} className="mt-10 inline-flex w-fit rounded-full bg-[#d5b58f] px-5 py-3 text-xs text-[#161514]">Обсудить проект ↗</Link></div>
 <div className="grid grid-cols-2 gap-3">{current.links.map((x,i)=><Link href={x.href} key={x.label} onClick={()=>setOpen(null)} className="group flex min-h-[104px] items-start justify-between gap-4 rounded-[17px] border border-white/[.1] bg-white/[.025] px-5 py-5 transition hover:border-[#d5b58f]/60 hover:bg-[#d5b58f]/[.055]"><div><p className="text-[10px] tracking-[.13em] text-[#d5b58f]/70">{String(i+1).padStart(2,"0")}</p><p className="mt-3 text-[15px] font-medium text-[#f3ece4]">{x.label}</p><p className="mt-2 text-[11px] leading-5 text-white/50">{x.detail}</p></div><span aria-hidden="true" className="text-[#d5b58f] transition group-hover:translate-x-1">↗</span></Link>)}</div>
 </div></div>}
 </div>
}
