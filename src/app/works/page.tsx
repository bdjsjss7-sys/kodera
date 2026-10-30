import Link from 'next/link';
import type {Metadata} from 'next';
import ShowcaseExplorer from '@/components/ShowcaseExplorer';
import {portfolioWorks} from '@/lib/portfolioWorks';
import {getMasterProject} from '@/lib/masterProjects';
import MasterPortfolio from '@/components/portfolio/MasterPortfolio';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import s from '@/components/portfolio/portfolio.module.css';
import RealProjects from '@/components/RealProjects';
export const metadata:Metadata={title:'Реализованные проекты и дизайн-концепты — KODERA',description:'Запущенные сайты KODERA и самостоятельные дизайн-концепты разных форматов с экранами для компьютера и телефона.',alternates:{canonical:'/works'}};
export default function Works(){return <main className={s.root}><PortfolioHeader/><div className={s.wrap}><section className={s.intro}><div><p className={s.eyebrow}>KODERA / SELECTED WORKS</p><h1>Разные задачи. Свой характер.</h1><p>От небольшой кофейни до цифрового продукта.<br/>Семь разных подходов к тому, как дизайн создаёт впечатление и помогает действовать.</p></div><div className={s.introStats}><span><b>07</b>концептов</span><span><b>42</b>сценария</span><span><b>02</b>формата</span></div></section><RealProjects/><section className={s.intro}><div><p className={s.eyebrow}>ДИЗАЙН-КОНЦЕПТЫ / ИССЛЕДОВАНИЯ</p><h2>Визуальные направления.</h2><p>Отдельная коллекция демонстрационных концептов. Они показывают диапазон дизайна и не выдаются за клиентские заказы.</p></div></section><MasterPortfolio/><details className={s.archive}><summary>Остальные направления — архив концептов ({portfolioWorks.filter(p=>!getMasterProject(p.slug)).length})</summary><p>Ранние визуальные исследования. Их оформление ещё не приведено к уровню выбранных трёх работ.</p><ShowcaseExplorer items={portfolioWorks.filter(p=>!getMasterProject(p.slug))}/></details><footer className={s.footer}><div><p className={s.eyebrow}>ВАШ ПРОЕКТ</p><h2>Найдём ваш визуальный язык.</h2><p>Начнём с задач, аудитории и того, какое впечатление должен создавать сайт.</p></div><Link href="/contact" className={s.goldButton}>Обсудить идею ↗</Link></footer></div></main>}
