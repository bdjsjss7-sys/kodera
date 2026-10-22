import type {Metadata} from "next";
import Link from "next/link";
import MegaNavigation from "@/components/MegaNavigation";
import MobileNavigation from "@/components/MobileNavigation";
import ScopeCalculator from "@/components/ScopeCalculator";
import s from "./pricing.module.css";

export const metadata:Metadata={
 title:"Стоимость разработки сайта в России и Беларуси | KODERA",
 description:"Ориентировочная стоимость лендинга, корпоративного сайта, интернет-магазина и веб-сервиса. Интерактивный расчёт отдельно для России и Беларуси.",
 alternates:{canonical:"/pricing"},
 openGraph:{title:"Стоимость цифрового продукта — KODERA",description:"Соберите конфигурацию проекта и получите ориентировочный диапазон стоимости в RUB или BYN."}
};

const formats=[
 {number:"01",name:"Лендинг",desc:"Одна цель, выразительная подача и продуманный путь к заявке.",ru:"от 65 000 ₽",by:"от 1 200 BYN",tag:"LAUNCH"},
 {number:"02",name:"Корпоративный сайт",desc:"Система услуг, экспертного контента и поисковых посадочных страниц.",ru:"от 150 000 ₽",by:"от 2 800 BYN",tag:"COMPANY"},
 {number:"03",name:"Интернет-магазин",desc:"Каталог, фильтры, карточки, корзина, оплата и внешние системы.",ru:"от 280 000 ₽",by:"от 5 200 BYN",tag:"COMMERCE"},
 {number:"04",name:"Веб-сервис",desc:"Личные кабинеты, роли, данные, процессы и сложная бизнес-логика.",ru:"от 420 000 ₽",by:"от 7 800 BYN",tag:"PRODUCT"}
];

const estimate=[
 ["01","Контекст","Цель, аудитория, рынок и критерии результата."],
 ["02","Масштаб","Количество уникальных экранов, состояний и ролей."],
 ["03","Функции","Формы, каталог, CMS, платежи и интеграции."],
 ["04","Производство","Стратегия, дизайн, код, контент и контроль качества."],
 ["05","Развитие","SEO-структура, аналитика, поддержка и следующие итерации."]
];

const faq=[
 ["Почему указан диапазон, а не одна сумма?","На старте неизвестны все состояния, интеграции и объём материалов. Диапазон показывает реалистичные границы. Точная смета фиксируется после короткого этапа уточнения задачи."],
 ["Можно начать с минимальной версии?","Да. Выделяем ядро продукта, которое решает главную задачу, а остальные возможности переносим в следующие итерации. Архитектура при этом должна учитывать развитие."],
 ["Чем отличаются цены для России и Беларуси?","Валютой, региональными условиями и уровнем локального рынка. Состав и стандарт качества сохраняются, а коммерческая модель рассчитывается отдельно для каждой страны."],
 ["Что не входит в автоматический расчёт?","Нестандартная серверная логика, сложные миграции, лицензии внешних сервисов, большой объём производства контента и требования, которые невозможно оценить без технического разбора."]
];

export default function PricingPage(){
 return <main className={s.root}>
  <header className={s.header}><div className={s.headerInner}>
   <Link href="/" className={s.brand} aria-label="KODERA — главная"><span>KODERA</span><small>DIGITAL STUDIO</small></Link>
   <MegaNavigation/>
   <div className={s.headerActions}><div className={s.markets}><Link href="/ru">RU</Link><span>/</span><Link href="/by">BY</Link></div><Link href="/contact" className={s.headerCta}>Начать проект ↗</Link><MobileNavigation/></div>
  </div></header>

  <section className={s.hero}>
   <div className={s.heroCopy}>
    <p className={s.eyebrow}>KODERA / PROJECT ESTIMATE</p>
    <h1>Цена следует<br/><em>за составом.</em></h1>
    <p>Показываем не случайную цифру «от», а связь между форматом продукта, масштабом, функциями и уровнем проработки.</p>
    <div className={s.heroActions}><Link href="#project-calculator">Рассчитать проект ↓</Link><Link href="/process">Как строится работа ↗</Link></div>
   </div>
   <div className={s.estimateVisual}>
    <header><span>ESTIMATE / LIVE MODEL</span><i>RU · BY</i></header>
    <div className={s.estimateScreen}>
     <p>PROJECT COMPOSITION</p>
     <div><span>Структура</span><i style={{width:"72%"}}/></div>
     <div><span>Дизайн</span><i style={{width:"88%"}}/></div>
     <div><span>Разработка</span><i style={{width:"79%"}}/></div>
     <div><span>Интеграции</span><i style={{width:"54%"}}/></div>
     <footer><small>ДИАПАЗОН</small><strong>определяется<br/>конфигурацией</strong></footer>
    </div>
    <div className={s.visualStamp}><span>02</span><p>рынка<br/><small>отдельные условия</small></p></div>
   </div>
   <div className={s.heroMeta}><span>Россия · RUB</span><i/><span>Беларусь · BYN</span><i/><span>Ориентир до брифа</span></div>
  </section>

  <section className={s.calculatorSection}>
   <div className={s.calculatorIntro}><p className={s.eyebrow}>01 / КАЛЬКУЛЯТОР</p><h2>Соберите базовую<br/><em>конфигурацию.</em></h2><p>Результат помогает определить порядок бюджета. Это ориентир для первого разговора: после уточнения сценариев мы формируем точный состав и смету.</p></div>
   <ScopeCalculator/>
  </section>

  <section className={s.formats}>
   <div className={s.sectionHead}><p className={s.eyebrow}>02 / ФОРМАТЫ</p><h2>Разные продукты.<br/><em>Разная глубина.</em></h2><p>Стартовая цена относится к базовой конфигурации с индивидуальной структурой, адаптивной версией и технической подготовкой к запуску.</p></div>
   <div className={s.formatGrid}>{formats.map(item=><article key={item.name}>
    <div className={s.formatTop}><span>{item.number}</span><small>{item.tag}</small></div>
    <h3>{item.name}</h3><p>{item.desc}</p>
    <div className={s.countryPrices}><div><small>РОССИЯ</small><strong>{item.ru}</strong></div><div><small>БЕЛАРУСЬ</small><strong>{item.by}</strong></div></div>
    <Link href="#project-calculator">Настроить расчёт ↗</Link>
   </article>)}</div>
  </section>

  <section className={s.anatomy}>
   <div className={s.anatomyTitle}><p className={s.eyebrow}>03 / ЛОГИКА СМЕТЫ</p><h2>Пять слоёв<br/>одной оценки.</h2></div>
   <div className={s.estimateList}>{estimate.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i/></article>)}</div>
  </section>

  <section className={s.regions}>
   <div className={s.regionIntro}><p className={s.eyebrow}>04 / ДВА РЫНКА</p><h2>Один стандарт.<br/><em>Разные условия.</em></h2><p>Страна выбирается в калькуляторе. Валюта и базовые диапазоны меняются, а требования к дизайну, адаптивности, скорости и качеству остаются одинаковыми.</p></div>
   <div className={s.regionCards}>
    <Link href="/ru"><span>RU</span><div><small>РОССИЯ / RUB</small><h3>Диапазоны для российского рынка</h3><p>Более высокая конкурентность и отдельная поисковая структура.</p></div><b>↗</b></Link>
    <Link href="/by"><span>BY</span><div><small>БЕЛАРУСЬ / BYN</small><h3>Локальная модель стоимости</h3><p>Более доступные цены с сохранением единого стандарта продукта.</p></div><b>↗</b></Link>
   </div>
  </section>

  <section className={s.faq}>
   <div><p className={s.eyebrow}>05 / ВОПРОСЫ</p><h2>До начала<br/>расчёта.</h2></div>
   <div className={s.faqList}>{faq.map(([question,answer],index)=><details key={question}><summary><span>0{index+1}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
  </section>

  <section className={s.next}>
   <p className={s.eyebrow}>ТОЧНАЯ ОЦЕНКА</p><h2>Цифра становится точной,<br/><em>когда понятна задача.</em></h2><p>Отправьте конфигурацию из калькулятора или кратко опишите проект. Мы уточним неизвестные параметры и подготовим следующий конкретный шаг.</p><div><Link href="/contact">Получить оценку ↗</Link><Link href="/works">Посмотреть работы</Link></div>
  </section>

  <footer className={s.footer}><Link href="/" className={s.brand}><span>KODERA</span><small>DIGITAL STUDIO</small></Link><nav><Link href="/studio">Студия</Link><Link href="/services">Услуги</Link><Link href="/works">Работы</Link><Link href="/process">Процесс</Link></nav><span>Россия · Беларусь</span></footer>
 </main>
}