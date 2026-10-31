import type {Metadata} from 'next';
import ShowcaseExplorer from '@/components/ShowcaseExplorer';
import {portfolioWorks} from '@/lib/portfolioWorks';
import {getMasterProject,masterProjects} from '@/lib/masterProjects';
import MasterPortfolio from '@/components/portfolio/MasterPortfolio';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import s from '@/components/portfolio/portfolio.module.css';
import RealProjects from '@/components/RealProjects';
import CatalogLeadSection from '@/components/CatalogLeadSection';
import {realProjects} from '@/lib/realProjects';

export const metadata:Metadata={title:'Реализованные проекты и дизайн-концепты — KODERA',description:'Запущенные сайты KODERA и самостоятельные дизайн-концепты разных форматов с экранами для компьютера и телефона.',alternates:{canonical:'/works'}};

export default function Works(){
 const archive=portfolioWorks.filter(p=>!getMasterProject(p.slug));
 const structuredData={'@context':'https://schema.org','@type':'CollectionPage',name:'Работы KODERA',url:'https://www.kodera.pro/works',description:'Запущенные сайты и самостоятельные дизайн-концепты KODERA.',mainEntity:{'@type':'ItemList',itemListElement:[...realProjects.map((project,index)=>({'@type':'ListItem',position:index+1,name:project.name,url:`https://www.kodera.pro/works/real/${project.slug}`})),...masterProjects.map((project,index)=>({'@type':'ListItem',position:realProjects.length+index+1,name:project.name,url:`https://www.kodera.pro/works/${project.slug}`}))]}};
 return <main className={s.root}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><PortfolioHeader/><div className={s.wrap}><section className={s.intro}><div><p className={s.eyebrow}>KODERA / SELECTED WORKS</p><h1>Разные задачи. Свой характер.</h1><p>Два запущенных сайта, семь флагманских дизайн-концептов и большой архив визуальных исследований.<br/>Реальные кейсы и демонстрационные работы всегда обозначены отдельно.</p></div><div className={s.introStats}><span><b>{String(realProjects.length).padStart(2,'0')}</b>запущенных</span><span><b>{String(masterProjects.length).padStart(2,'0')}</b>флагманских</span><span><b>{portfolioWorks.length}</b>концептов</span></div></section><RealProjects/><section className={s.intro}><div><p className={s.eyebrow}>ДИЗАЙН-КОНЦЕПТЫ / ИССЛЕДОВАНИЯ</p><h2>Визуальные направления.</h2><p>Самостоятельные демонстрационные концепты показывают диапазон дизайна и не выдаются за клиентские заказы.</p></div></section><MasterPortfolio/><details className={s.archive}><summary>Остальные направления — архив концептов ({archive.length})</summary><p>Ранние визуальные исследования. Их оформление проще, чем у семи флагманских работ, но каждый пример можно открыть и изучить отдельно.</p><ShowcaseExplorer items={archive}/></details></div><CatalogLeadSection service="Проект по примеру из портфолио" eyebrow="СЛЕДУЮЩАЯ ИСТОРИЯ — ВАША" title="Создадим проект с собственным характером." description="Пришлите задачу или ссылку на понравившийся пример. Заявка поступит напрямую в Telegram KODERA."/></main>;
}
