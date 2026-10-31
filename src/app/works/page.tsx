import type {Metadata} from 'next';
import ShowcaseExplorer from '@/components/ShowcaseExplorer';
import {portfolioWorks} from '@/lib/portfolioWorks';
import {masterProjects} from '@/lib/masterProjects';
import MasterPortfolio from '@/components/portfolio/MasterPortfolio';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import s from '@/components/portfolio/portfolio.module.css';
import RealProjects from '@/components/RealProjects';
import CatalogLeadSection from '@/components/CatalogLeadSection';
import {realProjects} from '@/lib/realProjects';

export const metadata:Metadata={title:'Реализованные проекты и 90 дизайн-концептов — KODERA',description:'Запущенные сайты KODERA и открытый каталог из 90 самостоятельных концептов: магазины, корпоративные сайты, сервисы, медицина, недвижимость и другие направления.',alternates:{canonical:'/works'}};

export default function Works(){
 const structuredData={'@context':'https://schema.org','@type':'CollectionPage',name:'Работы KODERA',url:'https://www.kodera.pro/works',description:'Запущенные сайты и 90 самостоятельных дизайн-концептов KODERA.',mainEntity:{'@type':'ItemList',itemListElement:[...realProjects.map((project,index)=>({'@type':'ListItem',position:index+1,name:project.name,url:`https://www.kodera.pro/works/real/${project.slug}`})),...portfolioWorks.map((project,index)=>({'@type':'ListItem',position:realProjects.length+index+1,name:project.name,url:`https://www.kodera.pro/works/${project.slug}`}))]}};
 return <main className={s.root}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><PortfolioHeader/><div className={s.wrap}>
  <section className={s.intro}><div><p className={s.eyebrow}>KODERA / SELECTED WORKS</p><h1>Разные задачи. Свой характер.</h1><p>Два запущенных сайта, семь флагманских историй и открытый каталог из девяноста направлений.<br/>Реальные кейсы и демонстрационные концепты всегда обозначены отдельно.</p></div><div className={s.introStats}><span><b>{String(realProjects.length).padStart(2,'0')}</b>запущенных</span><span><b>{String(masterProjects.length).padStart(2,'0')}</b>флагманских</span><span><b>{portfolioWorks.length}</b>концептов</span></div></section>
  <RealProjects/>
  <section className={s.intro}><div><p className={s.eyebrow}>ФЛАГМАНСКИЕ КОНЦЕПТЫ / 01—07</p><h2>Семь разных дизайн-систем.</h2><p>Каждая история получила собственную композицию, типографику, палитру и шесть экранов для компьютера и телефона.</p></div></section>
  <MasterPortfolio/>
  <section className="border-t border-white/10 py-16 md:py-24"><div className="mb-10 max-w-4xl"><p className="text-xs tracking-[.25em] text-[#d5b58f]">ПОЛНЫЙ КАТАЛОГ / {portfolioWorks.length} НАПРАВЛЕНИЙ</p><h2 className="mt-6 text-4xl font-light tracking-[-.055em] md:text-6xl">Не архив. Рабочая библиотека идей.</h2><p className="mt-6 text-sm leading-8 text-white/55">Магазины, корпоративные сайты, лендинги, SaaS, медицина, недвижимость, отели, образование, финансы и производство. Первые карточки видны сразу — выберите категорию или воспользуйтесь поиском.</p></div><ShowcaseExplorer items={portfolioWorks}/></section>
 </div><CatalogLeadSection service="Проект по примеру из портфолио" eyebrow="СЛЕДУЮЩАЯ ИСТОРИЯ — ВАША" title="Создадим проект с собственным характером." description="Пришлите задачу или ссылку на понравившийся пример. Заявка поступит напрямую в Telegram KODERA."/></main>;
}
