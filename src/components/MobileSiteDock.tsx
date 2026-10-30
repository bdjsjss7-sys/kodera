"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
const destinations=[["/","Главная"],["/explore","Поиск по сайту"],["/works","Примеры работ"],["/solutions","Каталог решений"],["/pricing#project-calculator","Калькулятор стоимости"],["/process","Этапы работы"],["/blog","Журнал"],["/ru","Россия"],["/by","Беларусь"],["https://t.me/kodera_pro","Telegram"],["/contact","Обсудить проект"]] as const;
export default function MobileSiteDock(){
 const [open,setOpen]=useState(false);const pathname=usePathname();
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{if(!open)return;const handler=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",handler);return()=>window.removeEventListener("keydown",handler)},[open]);
 if(pathname==="/")return null;
 return <div className="lg:hidden"><button type="button" aria-label={open?"Закрыть навигацию":"Открыть навигацию"} aria-expanded={open} aria-controls="mobile-site-dock" onClick={()=>setOpen(v=>!v)} className="fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-[#d5b58f]/50 bg-[#19191e] text-2xl text-[#d5b58f] shadow-2xl shadow-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d5b58f]">{open?"×":"☰"}</button>
 {open&&<div className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm" onClick={()=>setOpen(false)}><nav id="mobile-site-dock" aria-label="Навигация по сайту" onClick={e=>e.stopPropagation()} className="absolute inset-x-4 bottom-24 max-h-[75vh] overflow-y-auto rounded-[28px] border border-[#d5b58f]/20 bg-[#191a1e] p-5 shadow-2xl"><p className="px-3 pb-4 text-xs tracking-[.25em] text-[#d5b58f]">KODERA / НАВИГАЦИЯ</p>{destinations.map(([href,label])=>href.startsWith("https://")?<a key={href} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between border-t border-white/10 px-3 py-4 text-base text-white/85 hover:text-[#d5b58f]">{label}<span className="text-[#d5b58f]">↗</span></a>:<Link key={href} href={href} aria-current={pathname===href?"page":undefined} className="flex items-center justify-between border-t border-white/10 px-3 py-4 text-base text-white/85 hover:text-[#d5b58f]">{label}<span className="text-[#d5b58f]">↗</span></Link>)}</nav></div>}</div>;
}
