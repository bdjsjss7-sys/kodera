import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";

type Props={eyebrow:string;title:string;intro:string;children:React.ReactNode};

const legalLinks=[
 ["/legal","Правовая информация"],
 ["/privacy","Персональные данные"],
 ["/consent","Согласие"],
 ["/cookies","Файлы cookie"],
] as const;

export default function LegalShell({eyebrow,title,intro,children}:Props){return <main className="min-h-screen bg-[#0d0e11] text-[#f5f2ed]">
 <header className="border-b border-white/10"><div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-8"><BrandLogo compact/><Link href="/contact" className="text-sm text-[#d5b58f]">Контакты ↗</Link></div></header>
 <article className="mx-auto max-w-6xl px-6 py-20 md:py-28">
  <p className="text-xs tracking-[.25em] text-[#d5b58f]">{eyebrow}</p>
  <h1 className="mt-7 max-w-5xl text-5xl font-light leading-[1.05] tracking-[-.06em] md:text-7xl">{title}</h1>
  <p className="mt-9 max-w-4xl border-l-2 border-[#d5b58f] pl-6 text-base leading-8 text-white/70">{intro}</p>
  <div className="mt-16 space-y-12 text-[15px] leading-8 text-white/65 [&_a]:text-[#d5b58f] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-5 [&_h2]:text-3xl [&_h2]:font-light [&_h2]:text-white [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-normal [&_h3]:text-white/90 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">{children}</div>
  <nav aria-label="Правовые документы" className="mt-20 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-xs text-white/55">{legalLinks.map(([href,label])=><Link key={href} href={href} className="transition hover:text-[#d5b58f]">{label}</Link>)}</nav>
  <p className="mt-8 text-xs text-white/35">Редакция от 27 октября 2026 года.</p>
 </article>
 </main>}
