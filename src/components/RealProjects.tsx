import Link from "next/link";
import {realProjects} from "@/lib/realProjects";

function ProjectPreview({slug,name}:{slug:string;name:string}){
 return <div className="relative h-full min-h-[270px] overflow-hidden bg-[#101114] p-4 md:p-6">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(213,181,143,.18),transparent_44%)]"/>
  <div className="relative h-full overflow-hidden rounded-[16px] border border-white/15 bg-[#17181c] shadow-2xl transition duration-700 group-hover:-translate-y-1 group-hover:rotate-[-.4deg]">
   <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#1f2024] px-3"><i className="h-1.5 w-1.5 rounded-full bg-white/25"/><i className="h-1.5 w-1.5 rounded-full bg-white/25"/><i className="h-1.5 w-1.5 rounded-full bg-[#d5b58f]"/><span className="ml-2 text-[7px] tracking-[.12em] text-white/30">{name} / LIVE WEBSITE</span></div>
   <img src={`/projects/${slug}-desktop.webp`} alt={`Главная страница запущенного сайта ${name} на компьютере`} className="h-[calc(100%-1.75rem)] w-full object-cover object-top"/>
  </div>
  <div className="absolute bottom-3 right-5 h-[58%] w-[24%] overflow-hidden rounded-[17px] border-[3px] border-[#28292e] bg-[#111] shadow-[0_18px_38px_#000b] transition duration-700 group-hover:-translate-y-2 group-hover:rotate-[1.5deg]">
   <div className="absolute left-1/2 top-1 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-[#222]"/>
   <img src={`/projects/${slug}-mobile.webp`} alt={`Мобильная версия сайта ${name}`} className="h-full w-full object-cover object-top"/>
  </div>
  <span className="absolute bottom-4 left-5 rounded-full border border-emerald-300/30 bg-[#111]/85 px-3 py-2 text-[8px] tracking-[.14em] text-emerald-200 backdrop-blur">LIVE / DESKTOP + MOBILE</span>
 </div>
}
export default function RealProjects({compact=false}:{compact?:boolean}){
 return <section aria-labelledby="real-projects-title" className={compact?"border-t border-white/10 bg-[#101114] py-20 md:py-28":"py-14 md:py-20"}>
  <div className={compact?"mx-auto max-w-[1500px] px-5 md:px-12":""}>
   <div className="flex flex-wrap items-end justify-between gap-7"><div><p className="text-xs uppercase tracking-[.25em] text-[#d5b58f]">РЕАЛИЗОВАНО / В ПРОДАКШЕНЕ</p><h2 id="real-projects-title" className="mt-6 max-w-4xl text-4xl font-light tracking-[-.055em] md:text-6xl">Готовые и <span className="text-[#d5b58f]">запущенные проекты.</span></h2><p className="mt-5 max-w-2xl text-sm leading-8 text-white/55">Реальные сайты, которые опубликованы на собственных доменах и работают для бизнеса. Их можно открыть и проверить.</p></div><span className="rounded-full border border-emerald-400/30 bg-emerald-400/[.06] px-5 py-3 text-xs text-emerald-200">● 02 проекта онлайн</span></div>
   <div className="mt-11 grid gap-5 lg:grid-cols-2">{realProjects.map((project,index)=><article key={project.slug} className="group overflow-hidden rounded-[28px] border border-[#d5b58f]/20 bg-[#191a1e] transition duration-300 hover:-translate-y-1 hover:border-[#d5b58f]/60">
    <div className="aspect-[16/9] overflow-hidden"><ProjectPreview slug={project.slug} name={project.name}/></div>
    <div className="p-7 md:p-9"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-[10px] tracking-[.2em] text-[#d5b58f]">0{index+1} / {project.market.toUpperCase()}</p><span className="rounded-full border border-emerald-400/25 px-3 py-2 text-[10px] text-emerald-200">ЗАПУЩЕН</span></div><h3 className="mt-6 text-3xl font-light tracking-[-.045em] md:text-4xl">{project.name}</h3><p className="mt-2 text-sm text-[#d5b58f]">{project.label}</p><p className="mt-5 text-sm leading-8 text-white/55">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.services.map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-white/50">{x}</span>)}</div><div className="mt-8 flex flex-wrap gap-5"><a href={project.url} target="_blank" rel="noreferrer" className="rounded-full bg-[#d5b58f] px-6 py-3 text-xs text-[#171513]">Открыть живой сайт ↗</a><Link href={`/works/real/${project.slug}`} className="rounded-full border border-[#d5b58f]/35 px-6 py-3 text-xs text-[#d5b58f]">Подробнее о проекте ↗</Link></div><p className="mt-5 text-[10px] tracking-[.14em] text-white/30">{project.domain}</p></div>
   </article>)}</div>
  </div>
 </section>;
}