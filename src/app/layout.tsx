import type {Metadata,Viewport} from "next";
import "./globals.css";
import MobileSiteDock from "@/components/MobileSiteDock";
import SiteSearchOverlay from "@/components/SiteSearchOverlay";
import {siteEntries} from "@/lib/siteCatalog";
const baseUrl="https://www.kodera.pro";
export const metadata:Metadata={
 metadataBase:new URL(baseUrl),
 title:{default:"KODERA — разработка сайтов, SEO и цифровых продуктов",template:"%s"},
 description:"Разработка сайтов, UX/UI, SEO и цифровых продуктов. Решения для компаний в России и Беларуси.",
 applicationName:"KODERA",
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"ru_RU",siteName:"KODERA",title:"KODERA — Digital Studio",description:"Разработка сайтов и цифровых продуктов для бизнеса в России и Беларуси."},
 twitter:{card:"summary",title:"KODERA — Digital Studio",description:"Разработка сайтов и цифровых продуктов для бизнеса в России и Беларуси."},
 formatDetection:{telephone:false,email:false,address:false}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#0d0e11"};
const organization={"@context":"https://schema.org","@type":"ProfessionalService","@id":`${baseUrl}/#organization`,name:"KODERA",legalName:"ИП Петревич Диана Олеговна",url:baseUrl,taxID:"591963341",areaServed:[{"@type":"Country",name:"Беларусь"},{"@type":"Country",name:"Россия"}],telephone:["+375295293644","+79196989493","+79868311588"],knowsAbout:["Разработка сайтов","UX/UI-дизайн","SEO","Веб-сервисы"]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/>{children}<SiteSearchOverlay items={siteEntries}/><MobileSiteDock/></body></html>;}
