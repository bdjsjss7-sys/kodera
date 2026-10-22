import EditorialVisual, {type ArtworkVariant} from "@/components/EditorialVisual";
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
export default function ArticleArtwork({category,slug,className=""}:{category:string;slug:string;className?:string}){
 return <EditorialVisual variant={slugArt[slug]||categoryArt[category]||"web"} className={className}/>;
}
