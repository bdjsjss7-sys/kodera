import Image from "next/image";
const artworks={
 sculpture:{src:"/art/sculpture.svg",alt:"Абстрактная бронзовая скульптура: архитектура, свет и выразительная форма",caption:"ФОРМА / АРХИТЕКТУРА"},
 web:{src:"/art/web-experience.svg",alt:"Авторская иллюстрация премиального интерфейса корпоративного сайта на тёмном экране",caption:"WEB / DIGITAL EXPERIENCE"},
 service:{src:"/art/service-experience.svg",alt:"Авторская иллюстрация интерфейса цифрового продукта: рабочая панель, задачи и состояния",caption:"PRODUCT / DIGITAL WORKSPACE"},
 commerce:{src:"/art/commerce-experience.svg",alt:"Авторская предметная композиция из трёх дизайнерских объектов в карточках интернет-магазина",caption:"COMMERCE / PRODUCT EXPERIENCE"},
 data:{src:"/art/data-experience.svg",alt:"Авторская визуализация интерфейса аналитики с бронзовыми графиками",caption:"DATA / PRODUCT INTELLIGENCE"}
} as const;
export type ArtworkVariant=keyof typeof artworks;
export default function EditorialVisual({variant="web",className="",priority=false}: {variant?:ArtworkVariant;className?:string;priority?:boolean}){
 const art=artworks[variant];
 return <figure className={`group relative min-h-[250px] overflow-hidden rounded-[28px] border border-[#d5b58f]/20 bg-[#17181c] ${className}`}>
 <Image src={art.src} alt={art.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 65vw, 45vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" priority={priority} unoptimized/>
 <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101114]/80 via-transparent to-transparent"/>
 <figcaption className="absolute bottom-6 left-7 text-[10px] tracking-[.24em] text-[#e8caa3]">{art.caption}</figcaption>
 </figure>;
}
