"use client";

import {useState} from "react";

type Props={title:string; questions:readonly string[]; features:readonly string[]};

export default function ProjectBrief({title,questions,features}:Props){
  const [selected,setSelected]=useState<string[]>([]);
  const [notes,setNotes]=useState("");
  const [copied,setCopied]=useState(false);
  const options=[...features,...questions];
  const toggle=(item:string)=>{setCopied(false);setSelected(old=>old.includes(item)?old.filter(x=>x!==item):[...old,item]);};
  const brief=()=>["Бриф KODERA", "Направление: "+title,"","Выбранные требования:",...(selected.length?selected.map(x=>"• "+x):["Пока не выбраны"]), "", "Дополнительные детали:",notes.trim()||"Не указаны"].join("\n");
  async function copy(){try{await navigator.clipboard.writeText(brief());setCopied(true);}catch{setCopied(false);}}
  return <section className="border-t border-white/10 bg-[#17181b]" aria-labelledby="brief-title">
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="text-xs uppercase tracking-[.3em] text-[#d5b58f]">ИНТЕРАКТИВНЫЙ БРИФ / KODERA</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div><h2 id="brief-title" className="text-4xl font-light tracking-[-.05em] md:text-6xl">Соберите требования к проекту.</h2><p className="mt-6 max-w-lg leading-8 text-white/60">Отметьте важные функции и вопросы. Получится короткое техническое описание, которое можно скопировать и отправить подрядчику. Данные никуда автоматически не отправляются.</p><p className="mt-6 text-sm text-[#d5b58f]" aria-live="polite">Выбрано пунктов: {selected.length} из {options.length}</p></div>
        <div><div className="grid gap-3 sm:grid-cols-2">{options.map(item=><label key={item} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/15 bg-[#222328] p-4 text-sm leading-6 transition hover:border-[#d5b58f]/50"><input type="checkbox" checked={selected.includes(item)} onChange={()=>toggle(item)} className="mt-1 h-4 w-4 accent-[#d5b58f]"/><span>{item}</span></label>)}</div>
          <label htmlFor="brief-notes" className="mt-7 block text-sm text-white/70">Дополнительные пожелания и ограничения</label>
          <textarea id="brief-notes" value={notes} onChange={e=>{setNotes(e.target.value);setCopied(false);}} rows={4} maxLength={3000} placeholder="Цель проекта, аудитория, сроки, интеграции..." className="mt-3 w-full rounded-2xl border border-white/20 bg-[#0d0e11] p-5 text-white outline-none placeholder:text-white/30 focus:border-[#d5b58f]"/>
          <div className="mt-5 flex flex-wrap items-center gap-4"><button type="button" onClick={copy} className="rounded-full bg-[#d5b58f] px-7 py-4 text-sm text-[#111] transition hover:bg-[#f0d7b5]">Скопировать бриф ↗</button><button type="button" onClick={()=>{setSelected([]);setNotes("");setCopied(false);}} className="rounded-full border border-white/20 px-6 py-4 text-sm text-white/70 hover:border-white/50">Очистить</button></div><p className="mt-4 text-sm text-[#d5b58f]" role="status" aria-live="polite">{copied?"Бриф скопирован в буфер обмена.":""}</p>
        </div>
      </div>
    </div>
  </section>;
}
