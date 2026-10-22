"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
const menu=[{href:"/solutions",label:"Услуги и решения"},{href:"/pricing",label:"Стоимость"},{href:"/process",label:"Этапы работы"},{href:"/blog",label:"Журнал"},{href:"/ru",label:"Россия"},{href:"/by",label:"Беларусь"},{href:"/contact",label:"Обсудить проект"}];
export default function MobileNavigation(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{if(!open)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[open]);
 return <div className="xl:hidden">
 <button type="button" aria-label={open?"Закрыть меню":"Открыть меню"} aria-controls="kodera-mobile-menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-[#e1c4a3] focus-visible:ring-2 focus-visible:ring-[#d5b58f]"><span aria-hidden="true" className="text-xl">{open?"×":"☰"}</span></button>
 {open&&<div id="kodera-mobile-menu" className="absolute inset-x-0 top-full z-50 border-b border-[#d5b58f]/30 bg-[#121316] px-5 py-6 shadow-2xl md:px-12"><nav aria-label="Мобильное меню" className="mx-auto flex max-w-7xl flex-col divide-y divide-white/10">{menu.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="flex min-h-12 items-center justify-between gap-3 py-3 text-base text-white/85 transition hover:text-[#d5b58f]">{item.label}<span className="text-[#d5b58f]">↗</span></Link>)}</nav></div>}
 </div>;
}