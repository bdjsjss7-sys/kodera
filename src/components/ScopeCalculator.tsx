"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import s from "./scope-calculator.module.css";

type Market="ru"|"by";
type ProjectId="landing"|"corporate"|"shop"|"app";
type Level="focused"|"advanced";

const projects=[
 {id:"landing" as ProjectId,name:"Лендинг",description:"Один основной сценарий и точка конверсии.",defaults:1,ru:[65000,95000],by:[1200,1900],perRu:[7000,11000],perBy:[130,210]},
 {id:"corporate" as ProjectId,name:"Корпоративный сайт",description:"Услуги, компания, экспертиза и поисковые страницы.",defaults:10,ru:[150000,240000],by:[2800,4500],perRu:[9000,14000],perBy:[170,260]},
 {id:"shop" as ProjectId,name:"Интернет-магазин",description:"Каталог, товарные сценарии, корзина и заказ.",defaults:30,ru:[280000,450000],by:[5200,8500],perRu:[5000,8500],perBy:[95,160]},
 {id:"app" as ProjectId,name:"Веб-сервис",description:"Роли, личные кабинеты, данные и бизнес-логика.",defaults:12,ru:[420000,720000],by:[7800,13500],perRu:[16000,26000],perBy:[300,480]}
] as const;

const options=[
 {id:"design",label:"Расширенная дизайн-система",note:"Больше уникальных компонентов и состояний",ru:[45000,70000],by:[800,1300]},
 {id:"cms",label:"CMS и управление контентом",note:"Самостоятельное редактирование материалов",ru:[25000,40000],by:[450,750]},
 {id:"seo",label:"Расширенная SEO-архитектура",note:"Семантика и структура посадочных страниц",ru:[35000,60000],by:[650,1100]},
 {id:"crm",label:"CRM или внешние интеграции",note:"Передача заявок, статусов или данных",ru:[45000,85000],by:[850,1600]},
 {id:"content",label:"Подготовка содержания",note:"Редактура, тексты и помощь с материалами",ru:[30000,70000],by:[550,1300]},
 {id:"motion",label:"Продвинутая анимация",note:"Сценарные переходы и выразительная динамика",ru:[30000,55000],by:[550,1000]}
] as const;

export default function ScopeCalculator(){
 const [market,setMarket]=useState<Market>("ru");
 const [projectId,setProjectId]=useState<ProjectId>("corporate");
 const [screens,setScreens]=useState(10);
 const [level,setLevel]=useState<Level>("focused");
 const [selected,setSelected]=useState<string[]>(["design","cms"]);
 const [status,setStatus]=useState("");
 const project=projects.find(item=>item.id===projectId)!;
 const currency=market==="ru"?"₽":"BYN";
 const format=(value:number)=>new Intl.NumberFormat(market==="ru"?"ru-RU":"ru-BY",{maximumFractionDigits:0}).format(Math.round(value/100)*100);
 const estimate=useMemo(()=>{
  const base=market==="ru"?project.ru:project.by;
  const per=market==="ru"?project.perRu:project.perBy;
  const extraScreens=Math.max(0,screens-project.defaults);
  let min=base[0]+extraScreens*per[0];
  let max=base[1]+extraScreens*per[1];
  for(const option of options){if(selected.includes(option.id)){const value=market==="ru"?option.ru:option.by;min+=value[0];max+=value[1];}}
  if(level==="advanced"){min*=1.22;max*=1.35;}
  return {min,max,baseMin:base[0],baseMax:base[1],structureMin:extraScreens*per[0],structureMax:extraScreens*per[1]};
 },[market,project,screens,level,selected]);
 const setProject=(id:ProjectId)=>{const next=projects.find(item=>item.id===id)!;setProjectId(id);setScreens(next.defaults);};
 const toggle=(id:string)=>setSelected(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id]);
 const summary=()=>[
  "KODERA — конфигурация проекта",
  "Рынок: "+(market==="ru"?"Россия / RUB":"Беларусь / BYN"),
  "Формат: "+project.name,
  "Страницы или основные экраны: "+screens,
  "Уровень: "+(level==="focused"?"Сфокусированный":"Расширенный"),
  "Дополнительные задачи: "+(options.filter(item=>selected.includes(item.id)).map(item=>item.label).join(", ")||"не выбраны"),
  "Ориентир: "+format(estimate.min)+"–"+format(estimate.max)+" "+currency,
  "Финальная стоимость определяется после уточнения требований."
 ].join("\n");
 const copy=async()=>{try{await navigator.clipboard.writeText(summary());setStatus("Конфигурация скопирована");}catch{setStatus("Не удалось скопировать")}};
 const reset=()=>{setMarket("ru");setProjectId("corporate");setScreens(10);setLevel("focused");setSelected(["design","cms"]);setStatus("")};
 const maxScreens=projectId==="landing"?12:projectId==="corporate"?60:projectId==="shop"?200:80;
 const optionTotal=estimate.min-estimate.baseMin-estimate.structureMin;
 const detail={addons:optionTotal};
 const whole=Math.max(estimate.min,1);
 return <section id="project-calculator" className={s.calculator}>
  <header className={s.calcHeader}><div><p>INTERACTIVE ESTIMATE / 01</p><h3>Параметры проекта</h3></div><button type="button" onClick={reset}>Сбросить параметры ↺</button></header>
  <div className={s.calcGrid}>
   <div className={s.controls}>
    <fieldset><legend><span>01</span>Рынок и валюта</legend><div className={s.marketSwitch}>
     <button type="button" aria-pressed={market==="ru"} onClick={()=>setMarket("ru")}><span>RU</span><div><b>Россия</b><small>Российские рубли</small></div><i>RUB</i></button>
     <button type="button" aria-pressed={market==="by"} onClick={()=>setMarket("by")}><span>BY</span><div><b>Беларусь</b><small>Белорусские рубли</small></div><i>BYN</i></button>
    </div></fieldset>
    <fieldset><legend><span>02</span>Формат продукта</legend><div className={s.projectGrid}>{projects.map((item,index)=><button type="button" key={item.id} aria-pressed={projectId===item.id} onClick={()=>setProject(item.id)}><small>0{index+1}</small><b>{item.name}</b><span>{item.description}</span></button>)}</div></fieldset>
    <fieldset><legend><span>03</span>Масштаб</legend><div className={s.rangeHead}><label htmlFor="scope-pages">Страницы или основные экраны</label><output htmlFor="scope-pages">{screens}</output></div><input id="scope-pages" type="range" min="1" max={maxScreens} value={screens} onChange={event=>setScreens(Number(event.target.value))}/><div className={s.rangeScale}><span>1</span><span>{maxScreens}</span></div></fieldset>
    <fieldset><legend><span>04</span>Уровень проработки</legend><div className={s.levelSwitch}>
     <button type="button" aria-pressed={level==="focused"} onClick={()=>setLevel("focused")}><b>Сфокусированный</b><span>Главные сценарии и сдержанный набор компонентов</span></button>
     <button type="button" aria-pressed={level==="advanced"} onClick={()=>setLevel("advanced")}><b>Расширенный</b><span>Больше уникальных состояний, деталей и вариативности</span></button>
    </div></fieldset>
    <fieldset><legend><span>05</span>Дополнительные задачи</legend><div className={s.optionList}>{options.map(option=><label key={option.id} data-active={selected.includes(option.id)}><input type="checkbox" checked={selected.includes(option.id)} onChange={()=>toggle(option.id)}/><span className={s.check}>{selected.includes(option.id)?"✓":"+"}</span><div><b>{option.label}</b><small>{option.note}</small></div><i>{selected.includes(option.id)?"ВКЛЮЧЕНО":"ДОБАВИТЬ"}</i></label>)}</div></fieldset>
   </div>
   <aside className={s.result}>
    <div className={s.resultTop}><span>LIVE ESTIMATE</span><i>{market==="ru"?"RU / RUB":"BY / BYN"}</i></div>
    <p className={s.resultLabel}>ОРИЕНТИРОВОЧНЫЙ ДИАПАЗОН</p>
    <div className={s.price} aria-live="polite"><strong>{format(estimate.min)}</strong><span>—</span><strong>{format(estimate.max)}</strong><small>{currency}</small></div>
    <p className={s.priceNote}>для выбранной конфигурации до детального брифа</p>
    <div className={s.breakdown}>
     <div><p><span>Базовый формат</span><b>{format(estimate.baseMin)}+</b></p><i><span style={{width:Math.min(100,estimate.baseMin/whole*100)+"%"}}/></i></div>
     <div><p><span>Дополнительный масштаб</span><b>{format(estimate.structureMin)}</b></p><i><span style={{width:Math.min(100,estimate.structureMin/whole*100)+"%"}}/></i></div>
     <div><p><span>Опции и уровень</span><b>{format(Math.max(0,detail.addons))}</b></p><i><span style={{width:Math.min(100,Math.max(0,detail.addons)/whole*100)+"%"}}/></i></div>
    </div>
    <div className={s.summary}><div><small>ПРОДУКТ</small><b>{project.name}</b></div><div><small>МАСШТАБ</small><b>{screens} экранов</b></div><div><small>ОПЦИИ</small><b>{selected.length}</b></div><div><small>УРОВЕНЬ</small><b>{level==="focused"?"Focus":"Advanced"}</b></div></div>
    <p className={s.disclaimer}>Расчёт показывает порядок бюджета и не является публичной офертой. Точная стоимость фиксируется после уточнения требований и состава результата.</p>
    <Link className={s.primary} href={{pathname:"/contact",query:{market,service:project.name,brief:summary().slice(0,1700)}}}>Отправить конфигурацию ↗</Link>
    <button className={s.secondary} type="button" onClick={copy}>Скопировать расчёт</button>
    <p className={s.status} aria-live="polite" role="status">{status}</p>
   </aside>
  </div>
 </section>;
}