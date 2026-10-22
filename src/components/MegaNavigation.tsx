"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
type Group="services"|"knowledge"|"studio";
const groups:{id:Group;name:string;description:string;links:{label:string;href:string;detail:string}[]}[]=[
 {id:"services",name:"Услуги",description:"Выберите направление по типу продукта или бизнес-задаче",links:[
 {label:"Все 100 направлений",href:"/solutions",detail:"Основные и специализированные решения"},
 {label:"Виды сайтов",href:"/website-types",detail:"Лендинги, корпоративные сайты, порталы"},
 {label:"Для отраслей",href:"/industries",detail:"20 бизнес-направлений"},
 {label:"Технологии и интеграции",href:"/technologies",detail:"React, SaaS, CRM, API"},
 {label:"SEO и развитие",href:"/seo",detail:"Аудиты, контент, аналитика"},
 {label:"Основные услуги",href:"/#services",detail:"6 ключевых направлений"}]},
 {id:"knowledge",name:"Экспертиза",description:"Примеры, полезные материалы и выбор технологии",links:[
 {label:"Примеры работ",href:"/works",detail:"6 визуальных концептов на двух устройствах"},
 {label:"Экспертный журнал",href:"/blog",detail:"45 статей о разработке и UX"},
 {label:"Подобрать сайт",href:"/#selector",detail:"Интерактивный помощник"},
 {label:"Процесс разработки",href:"/process",detail:"Пять этапов работы"},
 {label:"Поиск по сайту",href:"/explore",detail:"Все предложения и материалы"}]},
 {id:"studio",name:"Студия",description:"Как начать сотрудничество с KODERA",links:[
 {label:"Калькулятор проекта",href:"/pricing#project-calculator",detail:"Изучить состав и трудоёмкость"},
 {label:"Россия",href:"/ru",detail:"Коммерческие предложения для RU"},
 {label:"Беларусь",href:"/by",detail:"Коммерческие предложения для BY"},
 {label:"Оставить заявку",href:"/contact",detail:"Опишите вашу задачу"},
 {label:"Как мы работаем",href:"/process",detail:"Прозрачные этапы"}]}
];
export default function MegaNavigation(){
 const [open,setOpen]=useState<Group|null>(null);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(null)};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[]);
 const current=groups.find(x=>x.id===open);
 return <div className="hidden xl:flex items-center gap-6" onMouseLeave={()=>setOpen(null)}><nav aria-label="Главное меню" className="flex items-center gap-2">{groups.map(g=><button key={g.id} type="button" aria-expanded={open===g.id} aria-haspopup="true" onMouseEnter={()=>setOpen(g.id)} onFocus={()=>setOpen(g.id)} onClick={()=>setOpen(x=>x===g.id?null:g.id)} className={`rounded-full px-4 py-3 text-[13px] transition ${open===g.id?"bg-[#d5b58f]/15 text-[#e4c59d]":"text-white/70 hover:text-[#d5b58f]"}`}>{g.name} <span className={`ml-1 inline-block text-[10px] transition-transform ${open===g.id?"rotate-180":""}`}>▾</span></button>)}</nav><Link href="/works" onMouseEnter={()=>setOpen(null)} className="text-[13px] text-white/70 hover:text-[#d5b58f]">Работы</Link><Link href="/pricing#project-calculator" onMouseEnter={()=>setOpen(null)} className="inline-flex items-center rounded-full border border-[#d5b58f]/50 px-5 py-3 text-[13px] text-[#e5c49d] hover:bg-[#d5b58f]/10">Калькулятор ↗</Link><Link href="/explore" onMouseEnter={()=>setOpen(null)} className="text-[13px] text-[#e5c49d]" aria-label="Поиск по сайту">⌕ Поиск</Link>{current&&<div className="absolute inset-x-0 top-full z-50 border-b border-[#d5b58f]/25 bg-[#111216]/[.985] shadow-[0_30px_80px_#000c] backdrop-blur-xl" onMouseEnter={()=>setOpen(current.id)}><div className="mx-auto grid max-w-[1450px] gap-11 px-10 py-10 lg:grid-cols-[.7fr_1.3fr]"><div className="flex flex-col justify-between"><div><p className="text-xs uppercase tracking-[.26em] text-[#d5b58f]">KODERA / НАВИГАЦИЯ</p><h2 className="mt-6 text-5xl font-light tracking-[-.06em] text-white">{current.name}.</h2><p className="mt-6 max-w-sm text-sm leading-8 text-white/50">{current.description}</p></div><div className="mt-9 flex flex-wrap gap-3"><Link href="/works" onClick={()=>setOpen(null)} className="rounded-full border border-[#d5b58f]/50 px-5 py-3 text-xs text-[#d5b58f]">Наши концепты ↗</Link><Link href="/contact" onClick={()=>setOpen(null)} className="rounded-full bg-[#d5b58f] px-5 py-3 text-xs text-[#111]">Обсудить проект ↗</Link></div></div><div className="grid gap-3 sm:grid-cols-2">{current.links.map((item,i)=><Link key={item.href+item.label} href={item.href} onClick={()=>setOpen(null)} className="group flex min-h-[100px] items-center justify-between gap-5 rounded-[20px] border border-white/10 bg-white/[.025] px-6 py-5 transition hover:border-[#d5b58f]/50 hover:bg-[#d5b58f]/[.045]"><div><p className="text-[10px] tracking-[.16em] text-[#d5b58f]">{String(i+1).padStart(2,"0")} / РАЗДЕЛ</p><p className="mt-2 text-base text-white">{item.label}</p><p className="mt-2 text-xs leading-5 text-white/45">{item.detail}</p></div><span className="text-[#d5b58f] transition group-hover:translate-x-1">↗</span></Link>)}</div></div></div>}</div>;
}