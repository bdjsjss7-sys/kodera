import Link from "next/link";
import {realProjects} from "@/lib/realProjects";

function ProjectPreview({theme,name,label}:{theme:"gold"|"blue";name:string;label:string}){
 const gold=theme==="gold";
 return <div className={`relative h-full min-h-[270px] overflow-hidden ${gold?"bg-[#090909] text-[#f4efe7]":"bg-[#f5f8fb] text-[#172331]"}`}>
  <div className={`flex items-center justify-between border-b px-5 py-4 text-[9px] tracking-[.18em] ${gold?"border-white/10":"border-[#173b66]/15"}`}><b>{name}</b><span>УСЛУГИ · ЦЕНЫ · КОНТАКТЫ</span></div>
  <div className="grid h-[220px] grid-cols-[1.08fr_.92fr]">
   <div className="flex flex-col justify-center p-6"><p className={`text-[8px] tracking-[.2em] ${gold?"text-[#c8a96a]":"text-[#2563a6]"}`}>{gold?"PREMIUM SERVICE / SPB":"СЕРВИСНЫЙ ЦЕНТР / ГРОДНО"}</p><h3 className="mt-4 max-w-[12ch] text-[clamp(22px,2.5vw,38px)] font-light leading-[.98] tracking-[-.055em]">{gold?"Инженерный ремонт премиальной техники":"Ремонт техники с понятным результатом"}</h3><span className={`mt-5 w-fit rounded-full px-4 py-2 text-[9px] ${gold?"bg-[#c8a96a] text-black":"bg-[#1769aa] text-white"}`}>Оставить заявку ↗</span></div>
   <div className={`relative m-4 overflow-hidden rounded-2xl ${gold?"bg-[radial-gradient(circle_at_65%_35%,#705d3b,#171717_60%)]":"bg-[linear-gradient(145deg,#dcecf8,#7db2dd)]"}`}><div className={`absolute inset-[13%] rounded-[28px] border ${gold?"border-[#d7bb7b]/45 bg-black/25":"border-white/70 bg-white/25"}`}/><div className={`absolute bottom-[12%] left-[12%] right-[12%] rounded-xl p-3 text-[8px] backdrop-blur-md ${gold?"border border-white/15 bg-black/55":"border border-white/80 bg-white/65"}`}><b>{label}</b><p className="mt-1 opacity-60">Диагностика · ремонт · гарантия</p></div></div>
  </div>
  <div className={`absolute inset-x-0 bottom-0 flex justify-between border-t px-5 py-3 text-[8px] tracking-[.15em] ${gold?"border-white/10 text-[#c8a96a]":"border-[#173b66]/15 text-[#2563a6]"}`}><span>РЕАЛЬНЫЙ ЗАПУЩЕННЫЙ ПРОЕКТ</span><span>LIVE ↗</span></div>
 </div>
}
export default function RealProjects({compact=false}:{compact?:boolean}){
 return <section aria-labelledby="real-projects-title" className={compact?"border-t border-white/10 bg-[#101114] py-20 md:py-28":"py-14 md:py-20"}>
  <div className={compact?"mx-auto max-w-[1500px] px-5 md:px-12":""}>
   <div className="flex flex-wrap items-end justify-between gap-7"><div><p className="text-xs uppercase tracking-[.25em] text-[#d5b58f]">РЕАЛИЗОВАНО / В ПРОДАКШЕНЕ</p><h2 id="real-projects-title" className="mt-6 max-w-4xl text-4xl font-light tracking-[-.055em] md:text-6xl">Готовые и <span className="text-[#d5b58f]">запущенные проекты.</span></h2><p className="mt-5 max-w-2xl text-sm leading-8 text-white/55">Реальные сайты, которые опубликованы на собственных доменах и работают для бизнеса. Их можно открыть и проверить.</p></div><span className="rounded-full border border-emerald-400/30 bg-emerald-400/[.06] px-5 py-3 text-xs text-emerald-200">● 02 проекта онлайн</span></div>
   <div className="mt-11 grid gap-5 lg:grid-cols-2">{realProjects.map((project,index)=><article key={project.slug} className="group overflow-hidden rounded-[28px] border border-[#d5b58f]/20 bg-[#191a1e] transition duration-300 hover:-translate-y-1 hover:border-[#d5b58f]/60">
    <div className="aspect-[16/9] overflow-hidden"><ProjectPreview theme={project.theme} name={project.name} label={project.label}/></div>
    <div className="p-7 md:p-9"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-[10px] tracking-[.2em] text-[#d5b58f]">0{index+1} / {project.market.toUpperCase()}</p><span className="rounded-full border border-emerald-400/25 px-3 py-2 text-[10px] text-emerald-200">ЗАПУЩЕН</span></div><h3 className="mt-6 text-3xl font-light tracking-[-.045em] md:text-4xl">{project.name}</h3><p className="mt-2 text-sm text-[#d5b58f]">{project.label}</p><p className="mt-5 text-sm leading-8 text-white/55">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.services.map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-white/50">{x}</span>)}</div><div className="mt-8 flex flex-wrap gap-5"><a href={project.url} target="_blank" rel="noreferrer" className="rounded-full bg-[#d5b58f] px-6 py-3 text-xs text-[#171513]">Открыть живой сайт ↗</a><Link href={`/works/real/${project.slug}`} className="rounded-full border border-[#d5b58f]/35 px-6 py-3 text-xs text-[#d5b58f]">Подробнее о проекте ↗</Link></div><p className="mt-5 text-[10px] tracking-[.14em] text-white/30">{project.domain}</p></div>
   </article>)}</div>
  </div>
 </section>;
}