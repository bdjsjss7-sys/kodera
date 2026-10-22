import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MegaNavigation from '@/components/MegaNavigation';
import MobileNavigation from '@/components/MobileNavigation';
import s from './studio.module.css';

export const metadata:Metadata={
 title:'О студии KODERA — дизайн, разработка и цифровые продукты',
 description:'Подход KODERA к созданию сайтов и цифровых продуктов: стратегия, UX/UI, разработка, SEO, контроль качества и развитие для России и Беларуси.',
 alternates:{canonical:'/studio'},
 openGraph:{title:'KODERA — цифровая студия полного цикла',description:'Проектируем выразительные и технически сильные цифровые продукты как единую систему.'}
};

const system=[
 ['01','Смысл','Разбираем бизнес-задачу, аудиторию, контекст рынка и критерии результата.'],
 ['02','Структура','Строим маршруты пользователя, архитектуру страниц и логику продукта.'],
 ['03','Характер','Создаём визуальную систему, которая соответствует содержанию и отличает проект.'],
 ['04','Инженерия','Собираем быстрый адаптивный интерфейс, функции и необходимые интеграции.'],
 ['05','Проверка','Проверяем сценарии, состояния, контент, мобильную версию и техническую готовность.'],
 ['06','Рост','Развиваем структуру, видимость и возможности продукта после запуска.']
];
const roles=[
 ['Стратегия','Задача, аудитория, предложение, приоритеты и границы проекта.'],
 ['UX и содержание','Структура, пользовательские сценарии, прототипы и смысловая иерархия.'],
 ['Visual design','Арт-направление, типографика, изображения, компоненты и адаптивные состояния.'],
 ['Development','Архитектура кода, интерфейс, интеграции, производительность и запуск.'],
 ['SEO и аналитика','Поисковая структура, техническая индексация и измерение результата.'],
 ['Quality control','Проверка сборки, страниц, ссылок, мобильных экранов и ключевых сценариев.']
];
const quality=[
 ['Структура','Маршрут пользователя','checked'],
 ['Интерфейс','Состояния и адаптивность','checked'],
 ['Контент','Иерархия и понятность','checked'],
 ['Код','Сборка и типизация','checked'],
 ['Поиск','Метаданные и sitemap','checked'],
 ['Запуск','Формы и аналитика','next']
];
const technologies=['Next.js','React','TypeScript','Tailwind CSS','Node.js','REST / API','CRM','Headless CMS','Technical SEO','Analytics'];
const principles=[
 ['Не копировать форму без смысла','Референс помогает определить уровень, ритм и ожидание. Итоговая композиция строится вокруг конкретной задачи.'],
 ['Не выбирать между красотой и удобством','Сильный экран должен создавать впечатление и одновременно помогать человеку двигаться дальше.'],
 ['Не считать desktop единственной версией','Телефон получает собственную иерархию, размеры, навигацию и порядок контента.'],
 ['Не завершать работу успешным коммитом','Код проходит сборку и проверки, а интерфейс оценивается как реальный пользовательский опыт.']
];

export default function StudioPage(){
 return <main className={s.root}>
  <header className={s.header}><div className={s.headerInner}>
   <Link href="/" className={s.brand} aria-label="KODERA — главная"><span>KODERA</span><small>DIGITAL STUDIO</small></Link>
   <MegaNavigation/>
   <div className={s.headerActions}><div className={s.markets}><Link href="/ru">RU</Link><span>/</span><Link href="/by">BY</Link></div><Link href="/contact" className={s.headerCta}>Начать проект ↗</Link><MobileNavigation/></div>
  </div></header>

  <section className={s.hero}>
   <div className={s.heroCopy}><p className={s.eyebrow}>KODERA / DIGITAL STUDIO</p><h1>Идея получает<br/><em>форму и силу.</em></h1><p>Создаём сайты и цифровые продукты как цельную систему: от первого вопроса и структуры до интерфейса, кода, поисковой готовности и развития.</p><div><Link href="/works">Смотреть работы ↗</Link><Link href="/services">Изучить услуги</Link></div></div>
   <div className={s.heroVisual}><div className={s.visualFrame}><Image src="/art/studio/studio-sculpture.png" alt="Абстрактная скульптура из стекла и металла — визуальный образ KODERA" fill priority sizes="(max-width: 900px) 100vw, 50vw"/><span>FORM / SYSTEM / LIGHT</span><small>VISUAL STUDY 01</small></div><div className={s.visualNote}><span>01</span><p>Дизайн начинается не с декора.<br/>Он начинается с точного вопроса.</p></div></div>
   <div className={s.heroMeta}><span>Стратегия</span><span>UX/UI</span><span>Разработка</span><span>SEO</span><span>Россия · Беларусь</span></div>
  </section>

  <section className={s.manifesto}><p className={s.eyebrow}>01 / ПОЗИЦИЯ</p><blockquote>Мы проектируем цифровую среду, в которой <em>характер бренда</em> встречается с ясной логикой и сильной инженерной основой.</blockquote><div><p>Выразительность помогает запомнить продукт. Структура помогает понять его. Технология делает опыт быстрым, устойчивым и готовым к росту.</p><p>KODERA соединяет эти части в одном процессе, чтобы решения не терялись между отдельными исполнителями и этапами.</p></div></section>

  <section className={s.system}><div className={s.sectionIntro}><p className={s.eyebrow}>02 / ОПЕРАЦИОННАЯ СИСТЕМА</p><h2>Шесть слоёв.<br/><em>Один результат.</em></h2><p>Каждый слой влияет на следующий. Поэтому структура, дизайн, разработка и продвижение рассматриваются вместе ещё до появления первого готового экрана.</p></div><div className={s.systemGrid}>{system.map(([number,title,text],index)=><article key={number}><div><span>{number}</span><i style={{'--step':index} as React.CSSProperties}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

  <section className={s.craft}><div className={s.craftCopy}><p className={s.eyebrow}>03 / DIGITAL CRAFT</p><h2>Один характер.<br/><em>Разные экраны.</em></h2><p>Адаптивность влияет на композицию, приоритеты и действия. Мы проверяем продукт в широком формате и на телефоне как два связанных пользовательских опыта.</p><ul><li><span>01</span>Содержательная иерархия</li><li><span>02</span>Навигация и точки действия</li><li><span>03</span>Типографический масштаб</li><li><span>04</span>Скорость и визуальная устойчивость</li></ul><Link href="/works">Посмотреть адаптивные концепты ↗</Link></div><div className={s.devices} aria-label="Демонстрация десктопной и мобильной композиций"><div className={s.desktop}><header><i/><i/><i/><span>KODERA / SYSTEM VIEW</span></header><main><div><small>PROJECT / 01</small><h3>Структура,<br/>которую видно.</h3><p>Ясная иерархия превращает сложное в понятный путь.</p></div><aside><span/><span/><span/><span/></aside></main><footer><span>DESIGN</span><span>DEVELOPMENT</span><span>GROWTH</span></footer></div><div className={s.phone}><header><span>9:41</span><i>●</i></header><main><small>PROJECT / MOBILE</small><h3>Главное<br/>остаётся<br/><em>главным.</em></h3><div/><div/><a>Продолжить　↗</a></main></div><span className={s.deviceLabel}>DESKTOP / MOBILE / CONNECTED EXPERIENCE</span></div></section>

  <section className={s.quality}><div className={s.qualityPanel}><header><div><i/><i/><i/></div><span>KODERA / QUALITY REVIEW</span><b>LIVE</b></header><div className={s.qualityBody}><aside><strong>06</strong><span>областей<br/>проверки</span><small>Демонстрация системы контроля</small></aside><section>{quality.map(([name,detail,status])=><div key={name}><span className={status==='checked'?s.ok:s.pending}>{status==='checked'?'✓':'→'}</span><b>{name}</b><small>{detail}</small><em>{status==='checked'?'ПРОВЕРЕНО':'СЛЕДУЮЩИЙ ШАГ'}</em></div>)}</section></div></div><div className={s.qualityCopy}><p className={s.eyebrow}>04 / КОНТРОЛЬ КАЧЕСТВА</p><h2>Готово — значит<br/><em>проверено.</em></h2><p>Успешная сборка подтверждает техническую целостность. Качество продукта требует дополнительных проверок: содержания, визуальной иерархии, мобильного поведения, ссылок и пользовательских сценариев.</p><div><span>BUILD</span><i/><span>CONTENT</span><i/><span>VISUAL</span><i/><span>SCENARIOS</span></div></div></section>

  <section className={s.responsibility}><div className={s.sectionIntro}><p className={s.eyebrow}>05 / ОТВЕТСТВЕННОСТЬ</p><h2>Роли определены.<br/><em>Решения связаны.</em></h2><p>Состав проектной команды зависит от задачи. До старта фиксируем, какие роли нужны, кто принимает решения и какой результат должен появиться на каждом этапе.</p></div><div className={s.roleList}>{roles.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>)}</div></section>

  <section className={s.technology}><div><p className={s.eyebrow}>06 / ТЕХНОЛОГИИ</p><h2>Инструмент выбирается<br/><em>под систему.</em></h2><p>Стек должен поддерживать содержание, скорость, интеграции и дальнейшее развитие. Мы не добавляем технологию только ради впечатляющего списка.</p><Link href="/technologies">Все технологические направления ↗</Link></div><div className={s.techCloud}>{technologies.map((tech,index)=><span key={tech} className={index===0||index===2?s.techAccent:''}>{tech}</span>)}</div></section>

  <section className={s.regions}><div className={s.regionHeadline}><p className={s.eyebrow}>07 / RU + BY</p><h2>Общий стандарт.<br/><em>Региональная точность.</em></h2></div><div className={s.regionCards}><Link href="/ru"><span>RU</span><div><small>РОССИЯ</small><h3>Масштаб, конкуренция и отдельная поисковая структура.</h3><p>Коммерческое предложение и дальнейшая SEO-архитектура для российского рынка.</p></div><b>↗</b></Link><Link href="/by"><span>BY</span><div><small>БЕЛАРУСЬ</small><h3>Собственные условия и содержание для локального рынка.</h3><p>Отдельная логика цен, запросов и коммуникации для Беларуси.</p></div><b>↗</b></Link></div></section>

  <section className={s.principles}><div><p className={s.eyebrow}>08 / ПРИНЦИПЫ</p><h2>Что определяет<br/>нашу работу.</h2></div><div>{principles.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

  <section className={s.next}><p className={s.eyebrow}>СЛЕДУЮЩИЙ ПРОЕКТ</p><h2>Создадим систему<br/><em>с вашим характером.</em></h2><p>Расскажите о задаче, продукте или текущем сайте. Определим подходящий состав работ и следующий конкретный шаг.</p><div><Link href="/contact">Обсудить проект ↗</Link><Link href="/pricing#project-calculator">Рассчитать масштаб</Link></div></section>

  <footer className={s.footer}><Link href="/" className={s.brand}><span>KODERA</span><small>DIGITAL STUDIO</small></Link><nav><Link href="/services">Услуги</Link><Link href="/works">Работы</Link><Link href="/process">Процесс</Link><Link href="/pricing">Стоимость</Link></nav><span>Россия · Беларусь</span></footer>
 </main>
}