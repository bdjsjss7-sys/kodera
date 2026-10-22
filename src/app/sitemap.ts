import type {MetadataRoute} from "next";
import {services} from "@/lib/services";
import {solutions} from "@/lib/solutions";
import {articles} from "@/lib/articles";
const base=process.env.NEXT_PUBLIC_SITE_URL;
export default function sitemap():MetadataRoute.Sitemap{if(!base)return [];const root=base.replace(/\/$/,"");return [{url:root,changeFrequency:"weekly",priority:1},{url:`${root}/ru`,changeFrequency:"monthly",priority:0.9},{url:`${root}/by`,changeFrequency:"monthly",priority:0.9},{url:`${root}/blog`,changeFrequency:"weekly",priority:0.75},{url:`${root}/process`,changeFrequency:"monthly",priority:0.75},{url:`${root}/pricing`,changeFrequency:"monthly",priority:0.8},{url:`${root}/solutions`,changeFrequency:"weekly",priority:0.8},...articles.map(a=>({url:`${root}/blog/${a.slug}`,changeFrequency:"monthly" as const,priority:0.7})),...services.map(s=>({url:`${root}/services/${s.slug}`,changeFrequency:"monthly" as const,priority:0.8})),...solutions.map(s=>({url:`${root}/solutions/${s.slug}`,changeFrequency:"monthly" as const,priority:0.65}))];}
