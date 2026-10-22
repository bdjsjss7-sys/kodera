import type {Metadata} from "next";
import Link from "next/link";
import MegaNavigation from "@/components/MegaNavigation";
import MobileNavigation from "@/components/MobileNavigation";
import BrandLogo from "@/components/BrandLogo";
import s from "./process.module.css";

export const metadata:Metadata={
 title:"Процесс работы — от задачи до запуска | KODERA",
 description:"Система работы KODERA: исследование, архитектура, дизайн, разработка, контроль качества, запуск и развитие цифрового продукта.",
 alternates:{canonical:"/process"},
 openGraph:{title:"Процесс KODERA — управляемый путь к цифровому продукту",description:"Понятные этапы, результаты и точки принятия решений от первого разговора до запуска."}
};

const phases=[
 {
  number:"01",name:"Погружение",label:"CONTEXT",
  title:"Сначала определяем, что действительно нужно решить.",
  text:"Собираем контекст продукта, бизнеса и аудитории. Фиксируем ограничения, риски и критерии, по которым позже можно оценить результат.",
  tasks:["Цели и приоритеты","Аудитория и сценарии","Контекст рынка","Границы проекта"],
  result:"Бриф, карта задачи и согласованные ориентиры",
  decision:"Подтверждаем направление"
 },
 {
  number:"02",name:"Архитектура",label:"LOGIC",
  title:"Превращаем сложность в ясную структуру.",
  text:"Проектируем маршруты пользователя, состав страниц, содержание и связи с внешними системами до начала визуальной работы.",
  tasks:["Карта страниц","Смысловая иерархия","Прототипы","Интеграции и данные"],
  result:"Архитектура продукта и прототипы ключевых экранов",
  decision:"Согласовываем логику"
 },
 {
  number:"03",name:"Арт-направление",label:"CHARACTER",
  title:"Находим характер, который невозможно перепутать.",
  text:"Формируем визуальный язык проекта: типографику, ритм, цвет, изображение, движение и правила адаптации для разных экранов.",
  tasks:["Визуальная концепция","Дизайн-система","Ключевые экраны","Мобильная композиция"],
  result:"Утверждённое направление и система компонентов",
  decision:"Выбираем точный образ"
 },
 {
  number:"04",name:"Разработка",label:"ENGINE",
  title:"Собираем дизайн в работающую систему.",
  text:"Создаём интерфейс, маршруты, формы и интеграции. Сразу учитываем скорость, доступность, поисковую структуру и дальнейшее развитие.",
  tasks:["Компоненты и страницы","Формы и интеграции","CMS и данные","Техническое SEO"],
  result:"Рабочая версия продукта на тестовом окружении",
  decision:"Проверяем сценарии"
 },
 {
  number:"05",name:"Контроль",label:"QUALITY",
  title:"Проверяем опыт целиком, а не отдельный экран.",
  text:"Проходим критические сценарии на компьютере и телефоне, проверяем содержание, состояния, ссылки, формы и техническую готовность.",
  tasks:["Адаптивность","Контент и ссылки","Скорость и индексация","Формы и события"],
  result:"Проверенная версия и закрытый список замечаний",
  decision:"Принимаем готовность"
 },
 {
  number:"06",name:"Запуск",label:"RELEASE",
  title:"Публикуем, наблюдаем и развиваем.",
  text:"Переносим продукт в рабочее окружение, проверяем ключевые действия после публикации и формируем следующие приоритеты развития.",
  tasks:["Домен и окружение","Финальная проверка","Наблюдение за ошибками","План развития"],
  result:"Запущенный продукт и понятная следующая итерация",
  decision:"Фиксируем следующий шаг"
 }
];

const checkpoints=[
 ["01","Направление","Задача, приоритеты и критерии результата"],
 ["02","Структура","Маршруты, содержание и объём продукта"],
 ["03","Характер","Визуальная система и ключевые экраны"],
 ["04","Готовность","Сценарии, качество и условия запуска"]
];

const factors=[
 ["Масштаб","Количество уникальных страниц, состояний и пользовательских маршрутов."],
 ["Содержание","Готовность текстов, изображений, данных и материалов со стороны проекта."],
 ["Интеграции","CRM, платежи, каталоги, личные кабинеты и внешние сервисы."],
 ["Решения","Скорость обратной связи и число участников согласования."]
];

export default function ProcessPage(){
 return <main className={s.root}>
  <header className={s.header}><div className={s.headerInner}>
   <BrandLogo/>
   <MegaNavigation/>
   <div className={s.headerActions}><div className={s.markets}><Link href="/ru">RU</Link><span>/</span><Link href="/by">BY</Link></div><Link href="/contact" className={s.headerCta}>Начать проект ↗</Link><MobileNavigation/></div>
  </div></header>

  <section className={s.hero}>
   <div className={s.heroGrid}>
    <div className={s.heroCopy}>
     <p className={s.eyebrow}>KODERA / PROJECT SYSTEM</p>
     <h1>Проект движется<br/><em>по системе.</em></h1>
     <p className={s.heroLead}>От первого вопроса до запуска каждый этап имеет цель, результат и точку принятия решения. Так сложный проект остаётся управляемым.</p>
     <div className={s.heroActions}><Link href="#route">Смотреть маршрут ↓</Link><Link href="/contact">Обсудить задачу ↗</Link></div>
    </div>
    <div className={s.heroSystem} aria-hidden="true">
     <div className={s.orbit}><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><i/></div>
     <div className={s.systemCenter}><small>PROJECT</small><strong>06</strong><span>связанных<br/>этапов</span></div>
     <p>CONTEXT → STRUCTURE → CHARACTER → ENGINE → QUALITY → RELEASE</p>
    </div>
   </div>
   <div className={s.heroFoot}><span>Стратегия</span><i/><span>UX / UI</span><i/><span>Разработка</span><i/><span>Запуск</span></div>
  </section>

  <section className={s.route} id="route">
   <div className={s.routeHead}>
    <p className={s.eyebrow}>01 / МАРШРУТ ПРОЕКТА</p>
    <h2>Шесть этапов.<br/><em>Одна логика движения.</em></h2>
    <p>Состав работ меняется под задачу, но принцип остаётся: следующий этап начинается с понятным контекстом и согласованным результатом предыдущего.</p>
   </div>
   <div className={s.phaseList}>
    {phases.map((phase,index)=><article className={s.phase} key={phase.number}>
     <div className={s.phaseRail}><span>{phase.number}</span><i/><small>{phase.label}</small></div>
     <div className={s.phaseMain}>
      <div className={s.phaseTitle}><p>{phase.name}</p><h3>{phase.title}</h3></div>
      <p className={s.phaseText}>{phase.text}</p>
      <ul>{phase.tasks.map(item=><li key={item}>{item}</li>)}</ul>
      <div className={s.phaseResult}><small>РЕЗУЛЬТАТ ЭТАПА</small><p>{phase.result}</p></div>
      <div className={s.phaseDecision}><span>{String(index+1).padStart(2,"0")} / CHECKPOINT</span><b>{phase.decision}</b><i>↗</i></div>
     </div>
    </article>)}
   </div>
  </section>

  <section className={s.handoffs}>
   <div className={s.handoffIntro}>
    <p className={s.eyebrow}>02 / СВЯЗЬ ЭТАПОВ</p>
    <h2>Решения не теряются<br/><em>между людьми.</em></h2>
    <p>Каждый важный выбор превращается в понятный артефакт: документ, схему, макет или работающую версию. Следующий этап опирается на него.</p>
   </div>
   <div className={s.flow}>
    <div><small>ВХОД</small><strong>Контекст</strong><p>Задача, данные и ограничения</p></div>
    <i>→</i>
    <div><small>РАБОТА</small><strong>Решение</strong><p>Исследование, проектирование и сборка</p></div>
    <i>→</i>
    <div><small>ВЫХОД</small><strong>Артефакт</strong><p>Проверяемый результат этапа</p></div>
   </div>
  </section>

  <section className={s.collaboration}>
   <div className={s.collabTitle}><p className={s.eyebrow}>03 / СОГЛАСОВАНИЯ</p><h2>Вы участвуете там,<br/>где важны <em>решения.</em></h2></div>
   <div className={s.checkpoints}>{checkpoints.map(([number,title,text])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><i>↗</i></article>)}</div>
   <p className={s.collabNote}>Промежуточные материалы показываются с контекстом: что проверяем, почему это важно и какое решение требуется. Это сокращает случайные правки и сохраняет темп проекта.</p>
  </section>

  <section className={s.control}>
   <div className={s.controlPanel}>
    <header><span>KODERA / RELEASE CONTROL</span><small>STATUS: IN REVIEW</small></header>
    <div className={s.controlBody}>
     <div className={s.controlIndex}><small>QUALITY GATE</small><strong>05</strong><span>областей контроля</span></div>
     <div className={s.controlRows}>
      {["Содержание и иерархия","Адаптивность и состояния","Формы и интеграции","Скорость и индексация","Критические сценарии"].map((item,index)=><div key={item}><span>0{index+1}</span><b>{item}</b><i>{index<4?"ПРОВЕРЕНО":"К ЗАПУСКУ"}</i></div>)}
     </div>
    </div>
   </div>
   <div className={s.controlCopy}><p className={s.eyebrow}>04 / QUALITY GATE</p><h2>Запуск — это<br/><em>решение, а не дата.</em></h2><p>Проект готов к публикации, когда пройдены согласованные проверки и работают ключевые пользовательские действия. Календарь не заменяет готовность.</p></div>
  </section>

  <section className={s.timing}>
   <div className={s.timingHead}><p className={s.eyebrow}>05 / СРОКИ</p><h2>Срок зависит<br/>от устройства проекта.</h2><p>Корректную оценку можно дать после определения состава страниц, функций, материалов и интеграций. На темп сильнее всего влияют четыре фактора.</p></div>
   <div className={s.factorGrid}>{factors.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
   <div className={s.timingAction}><p>Нужен ориентир до детальной оценки?</p><Link href="/pricing#project-calculator">Рассчитать масштаб проекта ↗</Link></div>
  </section>

  <section className={s.next}>
   <p className={s.eyebrow}>СЛЕДУЮЩАЯ ТОЧКА</p>
   <h2>Начнём с задачи.<br/><em>Маршрут построим вместе.</em></h2>
   <p>Опишите продукт, аудиторию и желаемый результат. Мы определим состав первого этапа и подготовим понятный следующий шаг.</p>
   <div><Link href="/contact">Обсудить проект ↗</Link><Link href="/services">Выбрать направление</Link></div>
  </section>

  <footer className={s.footer}><BrandLogo/><nav><Link href="/studio">Студия</Link><Link href="/services">Услуги</Link><Link href="/works">Работы</Link><Link href="/pricing">Стоимость</Link></nav><span>Россия · Беларусь</span></footer>
 </main>
}
