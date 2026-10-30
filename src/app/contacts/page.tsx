import type {Metadata} from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import BusinessDetails from "@/components/BusinessDetails";
import MegaNavigation from "@/components/MegaNavigation";
import MobileNavigation from "@/components/MobileNavigation";

export const metadata:Metadata={
 title:"Контакты KODERA — Telegram и телефоны",
 description:"Контакты digital-студии KODERA: Telegram, телефоны для России и Беларуси, реквизиты и форма обсуждения проекта.",
 alternates:{canonical:"/contacts"}
};

export default function ContactsPage(){
 return <main className="min-h-screen overflow-hidden bg-[#0d0e11] text-[#f5f2ed]">
  <header className="relative z-40 border-b border-white/10 bg-[#0d0e11]/95"><div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-6 md:px-12"><BrandLogo/><MegaNavigation/><div className="flex items-center gap-4"><Link href="/contact" className="hidden rounded-full border border-[#d5b58f]/60 px-5 py-3 text-xs text-[#d5b58f] transition hover:bg-[#d5b58f] hover:text-[#111] 2xl:inline-flex">Обсудить проект ↗</Link><MobileNavigation/></div></div></header>
  <section className="relative border-b border-white/10">
   <div aria-hidden="true" className="absolute -right-40 top-12 h-[520px] w-[520px] rounded-full bg-[#d5b58f]/[.07] blur-3xl"/>
   <div className="relative mx-auto max-w-[1500px] px-5 py-20 md:px-12 md:py-28">
    <p className="text-xs tracking-[.25em] text-[#d5b58f]">KODERA / КОНТАКТЫ</p>
    <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
     <div><h1 className="max-w-4xl text-5xl font-light leading-[1.02] tracking-[-.065em] md:text-7xl">Давайте обсудим <span className="text-[#d5b58f]">вашу задачу.</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/55">Быстрее всего отвечаем в Telegram. Для звонка выберите удобный номер — работаем с проектами из России и Беларуси.</p></div>
     <div className="rounded-[28px] border border-[#d5b58f]/25 bg-[linear-gradient(145deg,#242126,#16171a)] p-7 md:p-8"><p className="text-[10px] tracking-[.22em] text-[#d5b58f]">БЫСТРАЯ СВЯЗЬ</p><a href="https://t.me/kodera_pro" target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-between text-2xl font-light transition hover:text-[#d5b58f]"><span>Telegram<br/><span className="text-sm text-white/45">@kodera_pro</span></span><span>↗</span></a><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6 text-white/45"><span><span className="block text-base text-white/65">Instagram</span><span className="mt-1 block text-xs">Аккаунт готовится</span></span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] tracking-[.18em] text-[#d5b58f]">СКОРО</span></div></div>
    </div>
   </div>
  </section>
  <section className="mx-auto max-w-[1500px] px-5 py-16 md:px-12 md:py-24">
   <div className="grid gap-10 lg:grid-cols-[1fr_.55fr]"><BusinessDetails/><aside className="rounded-[28px] border border-white/10 bg-[#151619] p-7 md:p-9"><p className="text-[10px] tracking-[.22em] text-[#d5b58f]">ПЕРЕД СТАРТОМ</p><h2 className="mt-6 text-3xl font-light tracking-[-.04em]">Есть конкретная задача?</h2><p className="mt-5 text-sm leading-8 text-white/50">Заполните короткий бриф: цель, желаемый формат сайта и ориентировочные сроки. Этого достаточно для первого разговора.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#d5b58f] px-6 py-4 text-sm text-[#151515] transition hover:bg-[#e5c9a7]">Обсудить проект ↗</Link><Link href="/pricing#project-calculator" className="mt-4 block text-sm text-[#d5b58f]">Рассчитать стоимость ↗</Link></aside></div>
  </section>
 </main>;
}
