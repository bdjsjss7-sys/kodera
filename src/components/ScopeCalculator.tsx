"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import s from "./scope-calculator.module.css";

type Market="ru"|"by";
type ProjectId="landing"|"corporate"|"shop"|"app";
type Level="focused"|"advanced";

const projects=[
 {id:"landing" as ProjectId,name:"Лендинг",description:"Один основной сценарий и точка конверсии.",defaults:1,ru:28000,by:530,perRu:2800,perBy:50},
 {id:"corporate" as ProjectId,name:"Корпоративный сайт",description:"Услуги, компания, экспертиза и поисковые страницы.",defaults:5,ru:49000,by:940,perRu:3400,perBy:70},
 {id:"shop" as ProjectId,name:"Интернет-магазин",description:"Каталог, товарные сценарии, корзина и заказ.",defaults:15,ru:95000,by:1800,perRu:2000,perBy:40},
 {id:"app" as ProjectId,name:"Веб-сервис",description:"Роли, личные кабинеты, данные и бизнес-логика.",defaults:6,ru:137000,by:2700,perRu:5600,perBy:110}
] as const;

const options=[
 {id:"design",label:"Расширенная дизайн-система",note:"Больше уникальных компонентов и состояний",ru:10500,by:200},
 {id:"cms",label:"CMS и управление контентом",note:"Самостоятельное редактирование материалов",ru:8500,by:160},
 {id:"seo",label:"Расширенная SEO-архитектура",note:"Семантика и структура посадочных страниц",ru:11000,by:220},
 {id:"crm",label:"CRM или внешние интеграции",note:"Передача заявок, статусов или данных",ru:15500,by:300},
 {id:"content",label:"Подготовка содержания",note:"Редактура, тексты и помощь с материалами",ru:9000,by:180},
 {id:"motion",label:"Продвинутая анимация",note:"Сценарные переходы и выразительная динамика",ru:14000,by:270}
] as const;

export default function ScopeCalculator(){
 const [market,setMarket]=useState<Market>("ru");
 const [projectId,setProjectId]=useState<ProjectId>("corporate");
 const [screens,setScreens]=useState(5);
 const [level,setLevel]=useState<Level>("focused");
 const [selected,setSelected]=useState<string[]>([]);
 const [status,setStatus]=useState("");
 const [budget,setBudget]=useState<number|"">("");
 const project=projects.find(item=>item.id===projectId)!;
 const currency=market==="ru"?"₽":"BYN";
 const budgetPresets=market==="ru"?[30000,50000,100000,200000]:[600,1000,2000,4000];
 const format=(value:number)=>{const step=market==="ru"?1000:10;return new Intl.NumberFormat(market==="ru"?"ru-RU":"ru-BY",{maximumFractionDigits:0}).format(Math.round(value/step)*step)};
 const estimate=useMemo(()=>{
  const base=market==="ru"?project.ru:project.by;
  const perScreen=market==="ru"?project.perRu:project.perBy;
  const structure=Math.max(0,screens-project.defaults)*perScreen;
  const addons=options.filter(option=>selected.includes(option.id)).reduce((sum,option)=>sum+(market==="ru"?option.ru:option.by),0);
  const subtotal=base+structure+addons;
  const levelAdd=level==="advanced"?subtotal*.2:0;
  return {total:subtotal+levelAdd,base,structure,addons:addons+levelAdd};
 },[market,project,screens,level,selected]);
 const changeMarket=(next:Market)=>{setMarket(next);setBudget("")};
 const setProject=(id:ProjectId)=>{const next=projects.find(item=>item.id===id)!;setProjectId(id);setScreens(next.defaults)};
 const toggle=(id:string)=>setSelected(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id]);
 const summary=()=>[
  "KODERA — конфигурация проекта",
  "Рынок: "+(market==="ru"?"Россия / RUB":"Беларусь / BYN"),
  "Формат: "+project.name,
  "Страницы или основные экраны: "+screens,
  "Уровень: "+(level==="focused"?"Сфокусированный":"Расширенный"),
  "Дополнительные задачи: "+(options.filter(item=>selected.includes(item.id)).map(item=>item.label).join(", ")||"не выбраны"),
  "Бюджет клиента: "+(budget===""?"не указан":format(budget)+" "+currency),
  "Стоимость проекта от "+format(estimate.total)+" "+currency,
  "Финальная стоимость определяется после уточнения нестандартных требований."
 ].join("\n");
 const copy=async()=>{try{await navigator.clipboard.writeText(summary());setStatus("Расчёт скопирован") }catch{setStatus("Не удалось скопировать")}};
 const reset=()=>{setMarket("ru");setProjectId("corporate");setScreens(5);setLevel("focused");setSelected([]);setBudget("");setStatus("")};
 const maxScreens=projectId==="landing"?12:projectId==="corporate"?60:projectId==="shop"?200:80;
 const detail={addons:estimate.addons};
 const whole=Math.max(estimate.total,1);
 return <section id="project-calculator" className={s.calculator}>
  <header className={s.calcHeader}><div><p>INTERACTIVE ESTIMATE / 01</p><h3>Соберите стоимость проекта</h3></div><button type="button" onClick={reset}>Сбросить параметры ↺</button></header>
  <div className={s.calcGrid}>
   <div className={s.controls}>
    <fieldset><legend><span>01</span>Рынок и валюта</legend><div className={s.marketSwitch}>
     <button type="button" aria-pressed={market==="ru"} onClick={()=>changeMarket("ru")}><span>RU</span><div><b>Россия</b><small>Российские рубли</small></div><i>RUB</i></button>
     <button type="button" aria-pressed={market==="by"} onClick={()=>changeMarket("by")}><span>BY</span><div><b>Беларусь</b><small>Белорусские рубли</small></div><i>BYN</i></button>
    </div></fieldset>
    <fieldset><legend><span>02</span>Формат продукта</legend><div className={s.projectGrid}>{projects.map((item,index)=><button type="button" key={item.id} aria-pressed={projectId===item.id} onClick={()=>setProject(item.id)}><small>0{index+1}</small><b>{item.name}</b><span>{item.description}</span><em>от {format(market==="ru"?item.ru:item.by)} {currency}</em></button>)}</div></fieldset>
    <fieldset><legend><span>03</span>Масштаб</legend><div className={s.rangeHead}><label htmlFor="scope-pages">Страницы или основные экраны</label><output htmlFor="scope-pages">{screens}</output></div><input id="scope-pages" type="range" min={project.defaults} max={maxScreens} value={screens} onChange={event=>setScreens(Number(event.target.value))}/><div className={s.rangeScale}><span>{project.defaults}</span><span>{maxScreens}</span></div><p className={s.rangeHint}>Передвигайте ползунок — стоимость пересчитывается автоматически</p></fieldset>
    <fieldset><legend><span>04</span>Уровень проработки</legend><div className={s.levelSwitch}>
     <button type="button" aria-pressed={level==="focused"} onClick={()=>setLevel("focused")}><b>Сфокусированный</b><span>Главные сценарии и необходимый набор компонентов</span></button>
     <button type="button" aria-pressed={level==="advanced"} onClick={()=>setLevel("advanced")}><b>Расширенный</b><span>Больше уникальных состояний, деталей и вариативности</span><i>+20%</i></button>
    </div></fieldset>
    <fieldset><legend><span>05</span>Дополнительные задачи</legend><div className={s.optionList}>{options.map(option=><label key={option.id} data-active={selected.includes(option.id)}><input type="checkbox" checked={selected.includes(option.id)} onChange={()=>toggle(option.id)}/><span className={s.check}>{selected.includes(option.id)?"✓":"+"}</span><div><b>{option.label}</b><small>{option.note}</small></div><i>+ {format(market==="ru"?option.ru:option.by)} {currency}</i></label>)}</div></fieldset>
    <fieldset><legend><span>06</span>Комфортный бюджет <em>необязательно</em></legend>
     <div className={s.budgetIntro}><p>Укажите рамку — мы сравним её с выбранной конфигурацией.</p><button type="button" onClick={()=>setBudget("")} data-active={budget===""}>Пока не определён</button></div>
     <div className={s.budgetPresets}>{budgetPresets.map(value=><button type="button" key={value} data-active={budget===value} onClick={()=>setBudget(value)}>до {format(value)} {currency}</button>)}</div>
     <label className={s.customBudget}><span>Своя сумма</span><div><input aria-label="Свой бюджет" inputMode="numeric" type="number" min="0" step={market==="ru"?1000:10} value={budget} placeholder={market==="ru"?"Например, 75000":"Например, 1500"} onChange={event=>setBudget(event.target.value===""?"":Math.max(0,Number(event.target.value)))}/><i>{currency}</i></div></label>
    </fieldset>
   </div>
   <aside className={s.result}>
    <div className={s.resultTop}><span>LIVE ESTIMATE</span><i>{market==="ru"?"RU / RUB":"BY / BYN"}</i></div>
    <p className={s.resultLabel}>СТОИМОСТЬ ПРОЕКТА</p>
    <div className={s.price} aria-live="polite"><span className={s.from}>от</span><strong>{format(estimate.total)}</strong><small>{currency}</small></div>
    <p className={s.priceNote}>автоматический расчёт выбранной конфигурации</p>
    <div className={s.breakdown}>
     <div><p><span>Базовый формат</span><b>{format(estimate.base)} {currency}</b></p><i><span style={{width:Math.min(100,estimate.base/whole*100)+"%"}}/></i></div>
     <div><p><span>Количество экранов</span><b>+ {format(estimate.structure)} {currency}</b></p><i><span style={{width:Math.min(100,estimate.structure/whole*100)+"%"}}/></i></div>
     <div><p><span>Опции и уровень</span><b>+ {format(detail.addons)} {currency}</b></p><i><span style={{width:Math.min(100,detail.addons/whole*100)+"%"}}/></i></div>
    </div>
    <div className={s.summary}><div><small>ПРОДУКТ</small><b>{project.name}</b></div><div><small>МАСШТАБ</small><b>{screens} экранов</b></div><div><small>ОПЦИИ</small><b>{selected.length}</b></div><div><small>УРОВЕНЬ</small><b>{level==="focused"?"Focus":"Advanced"}</b></div></div>
    {budget!==""&&<div className={budget>=estimate.total?s.budgetOk:s.budgetGap} aria-live="polite"><span>{budget>=estimate.total?"✓":"↗"}</span><div><small>{budget>=estimate.total?"КОНФИГУРАЦИЯ УКЛАДЫВАЕТСЯ В БЮДЖЕТ":"БЮДЖЕТ НИЖЕ ТЕКУЩЕЙ КОНФИГУРАЦИИ"}</small><b>{budget>=estimate.total?"Запас: "+format(budget-estimate.total)+" "+currency:"Разница: "+format(estimate.total-budget)+" "+currency}</b><p>{budget>=estimate.total?"Можно обсудить дополнительные приоритеты или сохранить запас.":"Можно сократить первый этап и перенести часть функций в развитие."}</p></div></div>}
    <p className={s.disclaimer}>Стоимость указана «от» и включает выбранные параметры. Нестандартная логика и внешние расходы оцениваются после уточнения задачи. Расчёт не является публичной офертой.</p>
    <Link className={s.primary} href={{pathname:"/contact",query:{market,service:project.name,brief:summary().slice(0,1700)}}}>Отправить конфигурацию ↗</Link>
    <button className={s.secondary} type="button" onClick={copy}>Скопировать расчёт</button>
    <p className={s.status} aria-live="polite" role="status">{status}</p>
   </aside>
  </div>
 </section>;
}