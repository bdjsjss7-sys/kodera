import EditorialVisual, {type ArtworkVariant} from "@/components/EditorialVisual";
import Image from "next/image";
const categoryArt:Record<string,ArtworkVariant>={
 "Разработка сайтов":"web","SEO":"data","Дизайн":"sculpture","Веб-сервисы":"service",
 "Производительность":"data","UX/UI":"sculpture","Бизнес":"commerce","Аналитика":"data","Поддержка":"service"
};
const slugArt:Record<string,ArtworkVariant>={
 "internet-magazin-arhitektura":"commerce","internet-magazin-seo-katalog":"commerce",
 "bezopasnost-korporativnogo-sayta":"security","dostupnost-wcag-sayta":"service",
 "mvp-veb-servisa":"service","web-prilozhenie-mvp":"service",
 "kak-vybrat-podryadchika":"industrial","seo-rossiya-belarus":"industrial"
};
export default function ArticleArtwork({category,slug,cover,className=""}:{category:string;slug:string;cover?:string;className?:string}){
 if(cover)return <figure className={`group relative min-h-[250px] overflow-hidden rounded-[28px] border border-[#d5b58f]/25 bg-[#17181c] ${className}`}><Image src={cover} alt={`Авторская иллюстрация к статье ${slug.replaceAll("-"," ")}`} fill unoptimized sizes="(max-width: 768px) 100vw, 44vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"/><figcaption className="absolute bottom-6 left-6 text-[10px] tracking-[.16em] text-[#d5b58f]">{category.toUpperCase()} / KODERA EDITORIAL</figcaption></figure>;
 return <EditorialVisual variant={slugArt[slug]||categoryArt[category]||"web"} className={className}/>;
}
