import type {Metadata} from "next";import {notFound} from "next/navigation";import NewLandingPage from "@/components/NewLandingPage";import {newServicePages} from "@/lib/newServicePages";
type Props={params:Promise<{slug:string}>};
const pages=newServicePages.filter(x=>x.group==="industries");
export function generateStaticParams(){return pages.map(x=>({slug:x.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const item=pages.find(x=>x.slug===slug);if(!item)return {title:"Не найдено"};return {title:`${item.title} — KODERA`,description:`${item.subtitle}. Архитектура, функции, интеграции и критерии запуска — экспертное руководство KODERA.`,alternates:{canonical:`/industries/${slug}`},openGraph:{title:item.title,description:item.subtitle}};}
export default async function Landing({params}:Props){const {slug}=await params;const item=pages.find(x=>x.slug===slug);if(!item)notFound();const related=pages.filter(x=>x.slug!==slug).slice(Math.max(0,pages.indexOf(item)-1),Math.max(0,pages.indexOf(item)-1)+3);return <NewLandingPage item={item} related={related}/>;}
