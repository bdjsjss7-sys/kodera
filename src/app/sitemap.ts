import type {MetadataRoute} from "next";
import {services} from "@/lib/services";
import {solutions} from "@/lib/solutions";
const base=process.env.NEXT_PUBLIC_SITE_URL;
export default function sitemap():MetadataRoute.Sitemap{if(!base)return [];const root=base.replace(/\/$/,"");return [{url:root,changeFrequency:"weekly",priority:1},...services.map(s=>({url:`${root}/services/${s.slug}`,changeFrequency:"monthly" as const,priority:0.8})),...solutions.map(s=>({url:`${root}/solutions/${s.slug}`,changeFrequency:"monthly" as const,priority:0.65}))];}
