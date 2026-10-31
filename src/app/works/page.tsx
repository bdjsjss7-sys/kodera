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

export const metadata:Metadata={title:'Реализованные проекты и 90 дизайн-концептов — KODERA',description:'Два запущенных сайта KODERA и полный каталог из 90 самостоятельных концептов: магазины, корпоративные сайты, сервисы, медицина, недвижимость и другие направления.',alternates:{canonical:'/works'}};

export default function Works(){
 const structuredData={'@context':'https://schema.org','@type':'CollectionPage',name:'Работы KODERA',url:'https://www.kodera.pro/works',description:'Два запущенных сайта и 90 самостоятельных дизайн-концептов KODERA.',mainEntity:{'@type':'ItemList',itemListElement:[...realProjects.map((project,index)=>({'@type':'ListItem',position:index+1,name:project.name,url:`https://www.kodera.pro/works/real/${project.slug}`})),...portfolioWorks.map((project,index)=>({'@type':'ListItem',position:realProjects.length+index+1,name:project.name,url:`https://www.kodera.pro/works/${project.slug}`}))]}};
 return <main className={s.root}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><PortfolioHeader/><div className={s.wrap}>
  <section className={s.intro}><div><p className={s.eyebrow}>KODERA / PORTFOLIO</p><h1>92 работы в портфолио.</h1><p>2 реальных запущенных проекта и 90 самостоятельных дизайн-концептов.<br/>Среди концептов семь раскрыты особенно подробно — с шестью экранами и отдельной мобильной композицией.</p></div><div className={s.introStats}><span><b>{realProjects.length}</b>реальных</span><span><b>{portfolioWorks.length}</b>концептов</span><span><b>{realProjects.length+portfolioWorks.length}</b>всего работ</span></div></section>
  <RealProjects/>
  <section className="border-t border-white/10 py-16 md:py-24"><div className="mb-10 max-w-4xl"><p className="text-xs tracking-[.25em] text-[#d5b58f]">ПОЛНЫЙ КАТАЛОГ / {portfolioWorks.length} КОНЦЕПТОВ</p><h2 className="mt-6 text-4xl font-light tracking-[-.055em] md:text-6xl">Все 90 направлений — сразу.</h2><p className="mt-6 text-sm leading-8 text-white/55">Магазины, корпоративные сайты, лендинги, SaaS, медицина, недвижимость, отели, образование, финансы и производство. Здесь находится полный каталог, а не сокращённая выборка.</p></div><ShowcaseExplorer items={portfolioWorks}/></section>
  <section className={s.intro}><div><p className={s.eyebrow}>ПОДРОБНЫЕ ФЛАГМАНСКИЕ КЕЙСЫ / 7 ИЗ 90</p><h2>Семь концептов крупным планом.</h2><p>Это не весь список проектов, а семь наиболее подробно раскрытых дизайн-систем. У каждой — шесть сценариев, отдельные версии для компьютера и телефона.</p></div></section>
  <MasterPortfolio/>
 </div><CatalogLeadSection service="Проект по примеру из портфолио" eyebrow="СЛЕДУЮЩАЯ ИСТОРИЯ — ВАША" title="Создадим проект с собственным характером." description="Пришлите задачу или ссылку на понравившийся пример. Заявка поступит напрямую в Telegram KODERA."/></main>;
}
