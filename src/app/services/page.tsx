import type {Metadata} from 'next';
import Link from 'next/link';
import MegaNavigation from '@/components/MegaNavigation';
import MobileNavigation from '@/components/MobileNavigation';
import {services} from '@/lib/services';
import s from './services.module.css';

export const metadata:Metadata={
 title:'Услуги KODERA — сайты, UX/UI, SEO, веб-приложения и автоматизация',
 description:'Все направления KODERA: разработка сайтов, UX/UI-дизайн, SEO, веб-приложения, автоматизация, поддержка и развитие цифровых продуктов.',
 alternates:{canonical:'/services'},
 openGraph:{title:'Услуги KODERA — цифровая система для бизнеса',description:'От структуры и дизайна до разработки, интеграций, SEO и развития.'}
};

const accents=['#d8b081','#9fbaa9','#8fa8cc','#bba2d5','#c98f76','#a8b28e'];
const comparison=[
 ['Разработка сайтов','Нужен новый коммерческий сайт','Готовый адаптивный сайт','Структура, дизайн, разработка, запуск'],
 ['UX/UI-дизайн','Есть продукт или идея интерфейса','Прототипы и дизайн-система','Исследование, сценарии, макеты'],
 ['SEO и структура','Сайт не получает нужную видимость','Карта спроса и улучшенные страницы','Аудит, семантика, технические задачи'],
 ['Веб-приложения','Нужен личный кабинет или сервис','Работающий цифровой инструмент','Роли, логика, интерфейс, разработка'],
 ['Автоматизация','Данные теряются между системами','Связанный процесс без ручной рутины','CRM, API, уведомления, документация'],
 ['Поддержка и развитие','Сайт уже работает, но требует роста','Стабильный и развивающийся продукт','Аудит, исправления, новые функции']
];
const stages=[
 ['01','Диагностика','Разбираем задачу, аудиторию, ограничения и критерии результата.'],
 ['02','Архитектура','Формируем структуру страниц, сценарии и техническую основу.'],
 ['03','Создание','Проектируем визуальную систему, разрабатываем и подключаем функции.'],
 ['04','Проверка','Тестируем ключевые сценарии, мобильную версию и готовность к запуску.'],
 ['05','Развитие','Измеряем результат и планируем следующие улучшения продукта.']
];
const principles=[
 ['Одна система','Дизайн, код, содержание и SEO принимают общие решения, а не конфликтуют на финальном этапе.'],
 ['Сначала задача','Каждый экран и функция получают конкретную роль в пути пользователя и бизнес-процессе.'],
 ['Мобильный сценарий','Маленький экран проектируется как самостоятельный опыт с собственной иерархией.'],
 ['Готовность к росту','Структуру можно расширять новыми разделами, интеграциями и региональными версиями.']
];
const questions=[
 ['Можно заказать одно направление?','Да. Можно начать с дизайна, SEO-аудита, разработки или автоматизации как отдельной задачи. Перед стартом определим границы результата и необходимые материалы.'],
 ['Как понять, какая услуга нужна?','Опишите бизнес-задачу и текущую ситуацию. Мы разложим её на структуру, интерфейс, разработку, продвижение и интеграции, после чего предложим подходящий состав проекта.'],
 ['Работаете с существующими сайтами?','Да. Сначала проверяем структуру, интерфейс, код и технические ограничения. После аудита становится понятно, нужен точечный этап, последовательное развитие или редизайн.'],
 ['Можно начать с небольшой версии?','Да. Для сервисов и крупных сайтов можно выделить первую версию с ключевыми сценариями, проверить её и затем расширять без полной переделки архитектуры.'],
 ['Есть отдельные условия для России и Беларуси?','Да. Проект предусматривает разные региональные версии, коммерческие условия и дальнейшую SEO-структуру для России и Беларуси.']
];
const schema={'@context':'https://schema.org','@type':'ItemList',name:'Услуги KODERA',itemListElement:services.map((service,index)=>({'@type':'ListItem',position:index+1,url:'/services/'+service.slug,name:service.title}))};

export default function ServicesPage(){
 return <main className={s.root}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <header className={s.header}><div className={s.headerInner}>
   <Link href="/" aria-label="KODERA — главная" className={s.brand}><span>KODERA</span><small>DIGITAL STUDIO</small></Link>
   <MegaNavigation/>
   <div className={s.headerActions}><div className={s.markets}><Link href="/ru">RU</Link><span>/</span><Link href="/by">BY</Link></div><Link href="/contact" className={s.headerCta}>Начать проект ↗</Link><MobileNavigation/></div>
  </div></header>

  <section className={s.hero}>
   <div className={s.heroGrid}>
    <div className={s.heroCopy}><p className={s.eyebrow}>KODERA / SERVICES</p><h1>Одна команда.<br/><em>Вся цифровая система.</em></h1><p className={s.heroLead}>Соединяем стратегию, структуру, дизайн, разработку и развитие — чтобы каждый элемент продукта работал на общую задачу.</p><div className={s.heroActions}><Link href="/contact">Обсудить задачу ↗</Link><Link href="/pricing">Рассчитать проект</Link></div></div>
    <div className={s.constellation} aria-label="Шесть направлений KODERA"><div className={s.orbitA}/><div className={s.orbitB}/><div className={s.core}><span>K</span><small>единая<br/>система</small></div>{services.map((service,index)=><Link key={service.slug} href={'/services/'+service.slug} className={s.node} style={{'--i':index,'--accent':accents[index]} as React.CSSProperties}><span>{service.number}</span><b>{service.title}</b></Link>)}</div>
   </div>
   <div className={s.heroFoot}><span>6 направлений</span><span>Россия · Беларусь</span><span>Desktop + Mobile</span><span>От идеи до развития</span></div>
  </section>

  <nav className={s.serviceIndex} aria-label="Направления услуг"><div>{services.map(service=><a href={'#'+service.slug} key={service.slug}><span>{service.number}</span>{service.title}</a>)}</div></nav>

  <section className={s.intro}><div><p className={s.eyebrow}>01 / НАПРАВЛЕНИЯ</p><h2>Выбирайте точку входа.<br/><em>Мы соберём целое.</em></h2></div><p>Проект может начаться с нового сайта, редизайна, SEO-аудита или одной интеграции. На диагностике мы определяем, какие направления нужны сейчас и что стоит предусмотреть на следующий этап.</p></section>

  <section className={s.services}>{services.map((service,index)=><article id={service.slug} className={s.service} key={service.slug} style={{'--accent':accents[index]} as React.CSSProperties}>
   <div className={s.serviceTop}><span>{service.number} / 06</span><span>{index<3?'FOUNDATION':'SYSTEMS & GROWTH'}</span></div>
   <div className={s.serviceMain}><div><h2>{service.title}</h2><p>{service.intro}</p><Link href={'/services/'+service.slug}>Открыть направление ↗</Link></div><div className={s.deliverables}><small>В РЕЗУЛЬТАТЕ</small>{service.deliverables.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}</div></div>
   <div className={s.serviceFoot}><div>{service.formats.map(format=><span key={format}>{format}</span>)}</div><Link href={{pathname:'/contact',query:{service:service.title}}}>Обсудить {service.title.toLowerCase()} ↗</Link></div>
  </article>)}</section>

  <section className={s.choose}><div className={s.sectionHeading}><p className={s.eyebrow}>02 / КАК ВЫБРАТЬ</p><h2>Начните со своей<br/><em>ситуации.</em></h2><p>Название услуги не всегда очевидно заранее. Сравните отправную точку и ожидаемый результат.</p></div><div className={s.table} role="table" aria-label="Сравнение услуг"><div className={s.tableHead} role="row"><span>Направление</span><span>Когда подходит</span><span>Что получите</span><span>Состав</span></div>{comparison.map(row=><div className={s.tableRow} role="row" key={row[0]}>{row.map((cell,i)=><span key={cell} data-label={['Направление','Когда подходит','Что получите','Состав'][i]}>{cell}</span>)}</div>)}</div></section>

  <section className={s.principles}><div className={s.sectionHeading}><p className={s.eyebrow}>03 / ПРИНЦИПЫ</p><h2>Качество складывается<br/><em>из связанных решений.</em></h2></div><div className={s.principleGrid}>{principles.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

  <section className={s.process}><div className={s.processIntro}><p className={s.eyebrow}>04 / ПУТЬ ПРОЕКТА</p><h2>От вопроса<br/>к работающей системе.</h2><p>Состав этапов зависит от задачи, но логика остаётся прозрачной: каждый следующий шаг опирается на проверенный результат предыдущего.</p><Link href="/process">Подробнее о процессе ↗</Link></div><div className={s.stageList}>{stages.map(([number,title,text])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

  <section className={s.regions}><div><p className={s.eyebrow}>05 / ДВА РЫНКА</p><h2>Россия и Беларусь.<br/><em>Разные условия — единый уровень.</em></h2></div><div className={s.regionCards}><Link href="/ru"><span>RU</span><div><h3>Проекты для России</h3><p>Региональная структура, цены в рублях и SEO под российский рынок.</p></div><b>↗</b></Link><Link href="/by"><span>BY</span><div><h3>Проекты для Беларуси</h3><p>Отдельные коммерческие условия и содержание для белорусского рынка.</p></div><b>↗</b></Link></div></section>

  <section className={s.faq}><div><p className={s.eyebrow}>06 / ВОПРОСЫ</p><h2>Перед началом.</h2><p>Если вашей ситуации нет среди вопросов, опишите её в форме обращения — разберём задачу без обязательства выбирать услугу заранее.</p></div><div>{questions.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

  <section className={s.cta}><p className={s.eyebrow}>СЛЕДУЮЩИЙ ШАГ</p><h2>Соберём подходящий<br/><em>состав проекта.</em></h2><p>Расскажите, что нужно запустить, изменить или связать. Мы определим необходимые направления и последовательность работы.</p><div><Link href="/contact">Обсудить задачу ↗</Link><Link href="/pricing#project-calculator">Открыть калькулятор</Link></div></section>

  <footer className={s.footer}><Link href="/" className={s.brand}><span>KODERA</span><small>DIGITAL STUDIO</small></Link><div><Link href="/works">Работы</Link><Link href="/solutions">Решения</Link><Link href="/process">Процесс</Link><Link href="/pricing">Стоимость</Link></div><span>Россия · Беларусь</span></footer>
 </main>
}