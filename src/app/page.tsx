"use client";

import { useState } from "react";

const slides = [
  { eyebrow: "01 / WEB EXPERIENCE", title: "Сайты, которые\nзапоминают.", desc: "Выразительный дизайн, быстрая загрузка и продуманная структура.", mark: "WEB" },
  { eyebrow: "02 / DIGITAL PRODUCTS", title: "Идеи, которые\nработают.", desc: "Интерфейсы, сервисы и цифровые продукты под задачи бизнеса.", mark: "UX" },
  { eyebrow: "03 / GROWTH SYSTEMS", title: "Рост, который\nможно измерить.", desc: "SEO, аналитика и автоматизация как единая система развития.", mark: "SEO" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0e11] text-[#f5f2ed]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-6 md:px-12">
          <a href="/" className="group flex flex-col items-start leading-none" aria-label="KODERA — главная">
            <strong className="text-[25px] font-light tracking-[.24em] text-[#f1ece7] [text-shadow:0_1px_0_rgba(255,255,255,.24),0_5px_18px_rgba(213,181,143,.22)] transition duration-500 group-hover:[text-shadow:0_1px_0_rgba(255,255,255,.4),0_7px_25px_rgba(213,181,143,.5)]">KODERA</strong><small className="mt-2 text-[8px] tracking-[.4em] text-[#c9ae8d]">DIGITAL STUDIO</small>
          </a>
          <nav className="hidden gap-9 text-sm text-white/65 lg:flex" aria-label="Главное меню">
            <a href="#services" className="hover:text-white">Услуги</a><a href="#projects" className="hover:text-white">Проекты</a><a href="#about" className="hover:text-white">О студии</a><a href="#contact" className="hover:text-white">Контакты</a>
          </nav>
          <div className="flex items-center gap-4"><span className="text-xs text-white/50">RU / BY</span><a href="#contact" className="rounded-full border border-[#c9ae8d]/60 px-4 py-3 text-xs text-[#e6cba9] transition hover:bg-[#c9ae8d] hover:text-[#111]">Обсудить проект ↗</a></div>
        </div>
      </header>
      <section className="relative mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-12 px-5 py-20 md:px-12 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-9 text-xs uppercase tracking-[.26em] text-[#d5b58f]">Студия цифровых решений · Россия и Беларусь</p>
          <h1 className="text-[clamp(3.5rem,6.6vw,7.8rem)] font-normal leading-[.98] tracking-[-.075em]">Создаём<br />цифровое<br /><span className="bg-gradient-to-r from-[#f0dbc0] via-[#c29e78] to-[#e9cfad] bg-clip-text text-transparent">будущее.</span></h1>
          <p className="mt-9 max-w-lg text-base leading-8 text-white/55">Проектируем и разрабатываем цифровые продукты с характером. Сильная эстетика, понятная логика и внимание к деталям.</p>
          <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="rounded-full bg-[#d5b58f] px-7 py-4 text-sm text-[#151414] transition hover:bg-[#f0d7b5]">Обсудить проект ↗</a><a href="#projects" className="rounded-full border border-white/20 px-7 py-4 text-sm hover:border-white/60">Наш подход ↗</a></div>
          <div id="services" className="mt-16 flex flex-wrap gap-2 text-xs text-white/45">{["Веб-разработка","UX/UI","SEO","Автоматизация"].map(x=><span key={x} className="rounded-full border border-white/15 px-4 py-2">{x}</span>)}</div>
        </div>
        <div className="relative flex min-h-[460px] items-center justify-center [perspective:1100px] md:min-h-[600px]">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#c8a782]/10 blur-[95px]" />
          <div className="absolute h-[430px] w-[430px] rotate-[-24deg] rounded-full border border-[#c8a782]/15" />
          <div className="relative w-full max-w-[510px] overflow-hidden rounded-[24px] border border-white/20 bg-gradient-to-br from-[#29272b] to-[#111216] shadow-[28px_45px_95px_rgba(0,0,0,.75),-8px_-8px_55px_rgba(213,181,143,.08)] transition-transform duration-700 ease-out [transform:rotateY(-13deg)_rotateX(5deg)_rotateZ(-3deg)] hover:[transform:rotateY(-8deg)_rotateX(3deg)_rotateZ(-1deg)]">
            <div className="flex items-center gap-1 border-b border-white/10 px-4 py-2" aria-label="Выбор экрана">
              {slides.map((s,i)=><button key={s.mark} type="button" aria-label={`Показать экран ${i+1}: ${s.mark}`} aria-pressed={active===i} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} className="group grid h-11 w-11 cursor-pointer place-items-center rounded-full outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#d5b58f]"><span className={`h-3 rounded-full transition-all duration-300 ${active===i?"w-7 bg-[#d5b58f] shadow-[0_0_14px_rgba(213,181,143,.55)]":"w-3 bg-white/35 group-hover:w-5 group-hover:bg-[#e6cba9]"}`} /></button>)}
              <span className="ml-auto text-[10px] tracking-[.2em] text-white/35">KODERA / SHOWCASE</span>
            </div>
            <div key={active} className="relative flex h-[430px] flex-col justify-between overflow-hidden p-8 sm:h-[450px] sm:p-11">
              <div className="pointer-events-none absolute -bottom-28 -right-24 grid h-80 w-80 rotate-[-25deg] place-items-center rounded-[75px] border border-[#d5b58f]/30 bg-gradient-to-br from-[#b99b78]/25 to-transparent text-[110px] font-bold text-[#d5b58f]/20">{slide.mark}</div>
              <div className="relative"><p className="text-[10px] tracking-[.3em] text-[#d5b58f]">{slide.eyebrow}</p><h2 className="mt-10 min-h-[112px] whitespace-pre-line text-[clamp(2rem,3.2vw,3.2rem)] leading-[1.08] tracking-[-.055em] sm:min-h-[120px]">{slide.title}</h2><p className="mt-5 max-w-xs text-sm leading-7 text-white/50">{slide.desc}</p></div>
              <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/45"><span>0{active+1} / 03</span><button type="button" onClick={()=>setActive((active+1)%slides.length)} className="text-[#e4c8a5] hover:text-white">Следующий экран ↗</button></div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="border-t border-white/10 px-5 py-20 text-center text-white/55"><p>Портфолио и демонстрационные концепты — скоро</p></section>
      <section id="about" className="px-5 pb-16 text-center text-white/55"><p>KODERA — студия цифровой разработки</p></section>
      <footer id="contact" className="border-t border-white/10 px-5 py-12 text-center text-sm text-white/50">Связаться с KODERA — контакты добавим после согласования</footer>
    </main>
  );
}
