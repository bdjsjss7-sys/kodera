"use client";
import {useState} from "react";
export default function ArticleActions({title}:{title:string}){
 const [message,setMessage]=useState("");
 async function copy(){try{await navigator.clipboard.writeText(window.location.href);setMessage("Ссылка скопирована.");}catch{setMessage("Не удалось скопировать. Скопируйте адрес из строки браузера.");}}
 return <div className="flex flex-wrap items-center gap-3"><button type="button" onClick={copy} className="rounded-full border border-[#d5b58f]/40 px-5 py-3 text-xs text-[#d5b58f] transition hover:bg-[#d5b58f]/10" aria-label={`Скопировать ссылку на статью: ${title}`}>Скопировать ссылку ↗</button><button type="button" onClick={()=>window.print()} className="rounded-full border border-white/20 px-5 py-3 text-xs text-white/70 transition hover:border-white/40">Версия для печати</button><span aria-live="polite" role="status" className="text-xs text-white/55">{message}</span></div>;
}