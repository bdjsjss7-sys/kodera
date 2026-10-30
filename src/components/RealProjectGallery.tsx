"use client";
import {useState} from "react";
const views=[
 {id:"desktop",label:"Главная / ПК",note:"Первый экран и основная подача проекта",file:"desktop"},
 {id:"mobile",label:"Мобильная версия",note:"Адаптация ключевого сценария для телефона",file:"mobile"},
 {id:"services",label:"Внутренняя страница",note:"Структура услуг и продолжение дизайн-системы",file:"services"}
] as const;
export default function RealProjectGallery({slug,name}:{slug:string;name:string}){
 const [active,setActive]=useState(0);const view=views[active];const mobile=view.id==="mobile";
 return <section aria-labelledby="project-gallery-title" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
  <div className="flex flex-wrap items-end justify-between gap-7"><div><p className="text-xs tracking-[.23em] text-[#d5b58f]">ЖИВОЙ ИНТЕРФЕЙС / 03 ЭКРАНА</p><h2 id="project-gallery-title" className="mt-6 text-4xl font-light tracking-[-.05em] md:text-6xl">Посмотрите проект с разных сторон.</h2><p className="mt-5 max-w-2xl text-sm leading-8 text-white/50">Все кадры сняты с опубликованного сайта. Телефоны, адреса, email и реквизиты заказчика удалены.</p></div><span className="rounded-full border border-white/10 px-4 py-3 text-[10px] tracking-[.14em] text-white/40">КОНТАКТЫ ОБЕЗЛИЧЕНЫ</span></div>
  <div className="mt-10 grid gap-7 lg:grid-cols-[240px_1fr]">
   <div role="tablist" aria-label="Выбор экрана проекта" className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{views.map((item,index)=><button key={item.id} type="button" role="tab" aria-selected={active===index} onClick={()=>setActive(index)} className={`rounded-[20px] border p-5 text-left transition ${active===index?"border-[#d5b58f] bg-[#d5b58f]/[.08]":"border-white/10 bg-white/[.02] hover:border-[#d5b58f]/45"}`}><span className="text-[10px] tracking-[.18em] text-[#d5b58f]">0{index+1}</span><b className="mt-3 block text-sm font-medium">{item.label}</b><small className="mt-2 block leading-6 text-white/40">{item.note}</small></button>)}</div>
   <div className="relative min-h-[480px] overflow-hidden rounded-[30px] border border-white/10 bg-[#15161a] p-4 md:min-h-[650px] md:p-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(213,181,143,.12),transparent_45%)]"/>
    <div className={`relative mx-auto overflow-hidden border border-white/15 bg-[#0f1013] shadow-[0_30px_80px_#000b] transition-all duration-500 ${mobile?"h-[600px] max-w-[300px] rounded-[32px] border-[6px] border-[#292a2f]":"w-full rounded-[18px]"}`}>
     {!mobile&&<div className="flex h-9 items-center gap-2 border-b border-white/10 bg-[#202126] px-4"><i className="h-2 w-2 rounded-full bg-white/25"/><i className="h-2 w-2 rounded-full bg-white/25"/><i className="h-2 w-2 rounded-full bg-[#d5b58f]"/><span className="ml-3 text-[8px] tracking-[.16em] text-white/30">{name} / CASE PREVIEW</span></div>}
     {mobile&&<div className="absolute left-1/2 top-2 z-10 h-2 w-16 -translate-x-1/2 rounded-full bg-[#202126]"/>}
     <img key={view.id} src={`/projects/${slug}-${view.file}.webp`} alt={`${view.label}: обезличенный экран проекта ${name}`} className={`w-full animate-[fadeIn_.35s_ease] object-cover object-top ${mobile?"h-full":"h-auto"}`}/>
    </div>
   </div>
  </div>
 </section>;
}