import Link from 'next/link';
import s from './portfolio.module.css';
import BrandLogo from '@/components/BrandLogo';
import MobileNavigation from '@/components/MobileNavigation';

export default function PortfolioHeader(){
 return <header className={s.header}><div className={s.headerInner}><BrandLogo/><nav className={`${s.headerNav} hidden xl:flex`} aria-label="Навигация портфолио"><Link href="/services/razrabotka-sajtov">Услуги</Link><Link href="/works">Работы</Link><Link href="/pricing#project-calculator">Калькулятор ↗</Link><Link className={s.goldButton} href="/contact">Обсудить проект <span>↗</span></Link></nav><MobileNavigation/></div></header>;
}