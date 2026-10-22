import type {Metadata,Viewport} from "next";
import "./globals.css";
const publicUrl=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={
 metadataBase:new URL(publicUrl&&/^https?:\/\//.test(publicUrl)?publicUrl:"http://localhost:3000"),
 title:{default:"KODERA — разработка сайтов, SEO и цифровых продуктов",template:"%s"},
 description:"Разработка сайтов, UX/UI, SEO и цифровых продуктов. Решения для компаний в России и Беларуси.",
 applicationName:"KODERA",
 robots:{index:true,follow:true},
 openGraph:{type:"website",locale:"ru_RU",siteName:"KODERA",title:"KODERA — Digital Studio",description:"Разработка сайтов и цифровых продуктов для бизнеса в России и Беларуси."}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#0d0e11"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>;}
