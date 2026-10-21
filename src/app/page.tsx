"use client";

import { useState } from "react";
import Link from "next/link";

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
          <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="rounded-full bg-[#d5b58f] px-7 py-4 text-sm text-[#151414] transition hover:bg-[#f0d7b5]">Обсудить проект ↗</a><a href="#about" className="rounded-full border border-white/20 px-7 py-4 text-sm hover:border-white/60">Наш подход ↗</a></div>
          <div className="mt-16 flex flex-wrap gap-2 text-xs text-white/45">{["Веб-разработка","UX/UI","SEO","Автоматизация"].map(x=><span key={x} className="rounded-full border border-white/15 px-4 py-2">{x}</span>)}</div>
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
      <section id="services" className="border-t border-white/10 bg-[#111215] py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-12">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="mb-5 text-xs uppercase tracking-[.3em] text-[#d5b58f]">01 / Экспертиза</p><h2 className="max-w-3xl text-5xl font-light leading-[1.05] tracking-[-.06em] md:text-7xl">От идеи до <span className="text-[#d5b58f]">результата.</span></h2></div>
            <p className="max-w-sm text-sm leading-7 text-white/50">Создаём цифровую основу бизнеса: от выразительного сайта до сложного сервиса и системы привлечения клиентов.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {n:"01",name:"Разработка сайтов",href:"/services/razrabotka-sajtov",desc:"Корпоративные сайты, лендинги, каталоги и интернет-магазины с продуманной архитектурой.",tags:["Next.js","Адаптивность","Скорость"]},
              {n:"02",name:"UX/UI-дизайн",href:"/services/ux-ui-dizajn",desc:"Исследование сценариев, прототипирование и интерфейсы, в которых эстетика работает на удобство.",tags:["Прототипы","Дизайн-система"]},
              {n:"03",name:"SEO и структура",href:"/services/seo",desc:"Семантика, техническая оптимизация и посадочные страницы под реальные поисковые запросы.",tags:["Аудит","Семантика","Контент"]},
              {n:"04",name:"Веб-приложения",href:"/services/veb-prilozheniya",desc:"Личные кабинеты, интерактивные калькуляторы, панели управления и нестандартные инструменты.",tags:["Интерфейсы","Интеграции"]},
              {n:"05",name:"Автоматизация",href:"/services/avtomatizaciya",desc:"Связываем формы, CRM и внутренние процессы, чтобы сократить рутину и ускорить обработку заявок.",tags:["CRM","API","Процессы"]},
              {n:"06",name:"Поддержка и развитие",href:"/services/podderzhka",desc:"Развиваем проект после запуска: обновления, улучшения интерфейса и технический контроль.",tags:["Развитие","Оптимизация"]},
            ].map(item=><Link href={item.href} key={item.n} className="group flex min-h-[310px] flex-col justify-between rounded-[24px] border border-white/10 bg-[#191a1e] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#d5b58f]/50 hover:bg-[#202024]">
              <div><div className="mb-10 flex items-center justify-between"><span className="text-xs tracking-[.25em] text-[#d5b58f]">{item.n} / SERVICE</span><span className="text-xl text-[#d5b58f] transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div><h3 className="mb-4 text-2xl font-light tracking-[-.04em]">{item.name}</h3><p className="max-w-sm text-sm leading-7 text-white/50">{item.desc}</p></div>
              <div className="mt-8 flex flex-wrap gap-2">{item.tags.map(tag=><span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/45">{tag}</span>)}</div>
            </Link>)}
          </div>
        </div>
      </section>
      <section id="projects" className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-12">
          <p className="mb-5 text-xs uppercase tracking-[.3em] text-[#d5b58f]">02 / Возможности</p>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div><h2 className="text-5xl font-light leading-[1.08] tracking-[-.06em] md:text-7xl">Не просто сайт.<br/><span className="text-[#d5b58f]">Инструмент роста.</span></h2><p className="mt-8 max-w-lg text-base leading-8 text-white/55">Продумываем структуру, визуальную систему и техническую реализацию как единый продукт. Каждый элемент должен решать конкретную задачу.</p><a href="#contact" className="mt-10 inline-flex rounded-full border border-[#d5b58f]/60 px-7 py-4 text-sm text-[#e8cba6] transition hover:bg-[#d5b58f] hover:text-[#111]">Обсудить задачу ↗</a></div>
            <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_60%_40%,#40362e_0%,#202024_42%,#141518_75%)] p-8">
              <div className="absolute h-64 w-64 rotate-45 rounded-[50px] border border-[#d5b58f]/30 bg-gradient-to-br from-[#d5b58f]/20 to-transparent shadow-[30px_40px_80px_rgba(0,0,0,.45)]" />
              <div className="absolute h-44 w-44 -rotate-12 rounded-[35px] border border-white/15 bg-[#252326]/80 backdrop-blur-sm" />
              <div className="relative text-center"><p className="text-[10px] tracking-[.4em] text-[#d5b58f]">KODERA / DIGITAL THINKING</p><p className="mt-5 text-4xl font-light tracking-[-.06em] sm:text-5xl">Форма × Функция</p><p className="mt-4 text-sm text-white/50">Дизайн, технологии, смысл.</p></div>
            </div>
          </div>
          <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-6 text-white/40">Портфолио реальных проектов будет опубликовано после подготовки и согласования материалов.</p>
        </div>
      </section>
      <section id="about" className="border-t border-white/10 bg-[#111215] py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-12">
          <p className="mb-5 text-xs uppercase tracking-[.3em] text-[#d5b58f]">03 / Подход</p>
          <h2 className="mb-14 max-w-3xl text-5xl font-light leading-[1.08] tracking-[-.06em] md:text-7xl">Сложное делаем <span className="text-[#d5b58f]">понятным.</span></h2>
          <div className="grid gap-0 border-t border-white/15 md:grid-cols-4">
            {[
              ["01","Погружение","Изучаем бизнес, аудиторию, цели и ограничения проекта."],
              ["02","Стратегия","Определяем структуру, пользовательские сценарии и приоритеты."],
              ["03","Реализация","Создаём дизайн, пишем код и проверяем ключевые сценарии."],
              ["04","Запуск","Тестируем, публикуем и планируем дальнейшее развитие."],
            ].map(([num,name,desc])=><div key={num} className="border-b border-white/15 py-8 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><span className="text-xs tracking-[.25em] text-[#d5b58f]">{num}</span><h3 className="mt-10 text-2xl font-light">{name}</h3><p className="mt-4 text-sm leading-7 text-white/50">{desc}</p></div>)}
          </div>
        </div>
      </section>
      <section id="faq" className="border-t border-white/10 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="mb-5 text-xs uppercase tracking-[.3em] text-[#d5b58f]">04 / Вопросы</p><h2 className="text-5xl font-light tracking-[-.06em] md:text-6xl">Прежде чем<br/>начать.</h2></div>
          <div className="border-t border-white/15">{[
            ["Сколько стоит разработка сайта?","Стоимость зависит от структуры, дизайна, интеграций и объёма работ. Оценку готовим после обсуждения задачи. Для России и Беларуси условия рассчитываются отдельно."],
            ["Можно ли начать с небольшого проекта?","Да. Можно начать с посадочной страницы или прототипа, а затем постепенно расширять функциональность."],
            ["Будет ли сайт удобен на телефоне?","Адаптивный интерфейс закладываем на этапе проектирования и проверяем на разных размерах экранов."],
            ["Что происходит после запуска?","По согласованию продолжаем техническую поддержку, обновление контента и развитие функциональности."],
          ].map(([q,a])=><details key={q} className="group border-b border-white/15 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-light marker:hidden"><span>{q}</span><span className="text-2xl text-[#d5b58f] transition group-open:rotate-45">+</span></summary><p className="max-w-xl pt-5 text-sm leading-8 text-white/55">{a}</p></details>)}</div>
        </div>
      </section>
      <footer id="contact" className="border-t border-white/10 bg-[#19191b]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-12 md:py-32">
          <p className="mb-6 text-xs uppercase tracking-[.3em] text-[#d5b58f]">05 / Следующий шаг</p>
          <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-light leading-[.95] tracking-[-.075em]">Создадим что-то <span className="text-[#d5b58f]">значимое.</span></h2>
          <p className="mt-9 max-w-lg text-base leading-8 text-white/55">Расскажите о своей идее, целях и сроках. Скоро здесь появятся согласованные способы связи и форма заявки.</p>
          <div className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-8"><div><strong className="text-2xl font-light tracking-[.24em]">KODERA</strong><p className="mt-2 text-[10px] tracking-[.3em] text-[#d5b58f]">DIGITAL STUDIO</p></div><div className="flex flex-wrap gap-6 text-sm text-white/50"><a href="#services" className="hover:text-white">Услуги</a><a href="#about" className="hover:text-white">Подход</a><a href="#faq" className="hover:text-white">Вопросы</a><a href="#" className="hover:text-white">Наверх ↑</a></div><span className="text-xs text-white/35">Россия · Беларусь</span></div>
        </div>
      </footer>
    </main>
  );
}
