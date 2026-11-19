import type {Metadata} from 'next';
import ShowcaseExplorer from '@/components/ShowcaseExplorer';
import {portfolioWorks} from '@/lib/portfolioWorks';
import MasterPortfolio from '@/components/portfolio/MasterPortfolio';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import s from '@/components/portfolio/portfolio.module.css';
import CatalogLeadSection from '@/components/CatalogLeadSection';

export const metadata:Metadata={title:'90 авторских дизайн-концептов — KODERA',description:'90 демонстрационных концептов сайтов и интерфейсов: магазины, корпоративные проекты, веб-сервисы и отраслевые решения. Концепты не являются клиентскими заказами.',alternates:{canonical:'/works'}};

export default function Works(){
 const structuredData={'@context':'https://schema.org','@type':'CollectionPage',name:'Работы KODERA',url:'https://www.kodera.pro/works',description:'90 демонстрационных дизайн-концептов KODERA, не являющихся клиентскими заказами.',mainEntity:{'@type':'ItemList',itemListElement:portfolioWorks.map((project,index)=>({'@type':'ListItem',position:index+1,name:project.name,url:`https://www.kodera.pro/works/${project.slug}`}))}};
 return <main className={s.root}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><PortfolioHeader/><div className={s.wrap}>
  <section className={s.intro}><div><p className={s.eyebrow}>KODERA / PORTFOLIO</p><h1>Авторские дизайн-концепты.</h1><p>90 авторских демонстрационных концептов для разных сфер бизнеса. Это исследование визуальных направлений и пользовательских сценариев, а не выполненные клиентские заказы.</p></div><div className={s.introStats}><span><b>{portfolioWorks.length}</b>концептов</span><span><b>12</b>тематических направлений</span></div></section>
  <section className="border-t border-white/10 py-16 md:py-24"><div className="mb-10 max-w-4xl"><p className="text-xs tracking-[.25em] text-[#d5b58f]">ПОЛНЫЙ КАТАЛОГ / {portfolioWorks.length} КОНЦЕПТОВ</p><h2 className="mt-6 text-4xl font-light tracking-[-.055em] md:text-6xl">Концепты для разных отраслей.</h2><p className="mt-6 text-sm leading-8 text-white/55">Магазины, корпоративные сайты, лендинги, SaaS, медицина, недвижимость, отели, образование, финансы и производство. Здесь находится полный каталог, а не сокращённая выборка.</p></div><ShowcaseExplorer items={portfolioWorks}/></section>
  <section className={s.intro}><div><p className={s.eyebrow}>ПОДРОБНЫЕ ФЛАГМАНСКИЕ КЕЙСЫ / 7 ИЗ 90</p><h2>Семь подробно проработанных концептов.</h2><p>Это семь наиболее подробно раскрытых демонстрационных дизайн-систем. У каждой — шесть сценариев, отдельные версии для компьютера и телефона.</p></div></section>
  <MasterPortfolio/>
 </div><CatalogLeadSection service="Проект по примеру из портфолио" eyebrow="СЛЕДУЮЩАЯ ИСТОРИЯ — ВАША" title="Создадим проект с собственным характером." description="Пришлите задачу или ссылку на понравившийся пример. Заявка поступит напрямую в Telegram KODERA."/></main>;
}
