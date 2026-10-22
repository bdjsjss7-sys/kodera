"use client";
import Image from "next/image";
import {useState} from "react";
import {visualAssets} from "@/lib/visualAssets";

const artworks={
 sculpture:{src:visualAssets.craft,fallback:"/art/sculpture.svg",alt:"Чёрно-бронзовая абстрактная архитектурная композиция",caption:"FORM / ART DIRECTION",position:"object-center"},
 web:{src:visualAssets.studio,fallback:"/art/web-experience.svg",alt:"Профессиональная работа с цифровым интерфейсом в тёмной студийной обстановке",caption:"WEB / DIGITAL EXPERIENCE",position:"object-center"},
 service:{src:visualAssets.laptop,fallback:"/art/service-experience.svg",alt:"Современное тёмное рабочее пространство с ноутбуком",caption:"PRODUCT / DIGITAL WORKSPACE",position:"object-center"},
 commerce:{src:visualAssets.headphones,fallback:"/art/commerce-experience.svg",alt:"Предметная фотография наушников для демонстрации цифровой витрины",caption:"COMMERCE / OBJECT STORY",position:"object-center"},
 data:{src:visualAssets.atmosphere,fallback:"/art/data-experience.svg",alt:"Контрастная архитектура из стекла и чёрно-золотых поверхностей",caption:"ANALYTICS / VISUAL THINKING",position:"object-center"},
 industrial:{src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",fallback:"/art/sculpture.svg",alt:"Современная архитектура и инженерная геометрия",caption:"INDUSTRY / SYSTEMS",position:"object-center"},
 interiors:{src:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82",fallback:"/art/sculpture.svg",alt:"Современное архитектурное интерьерное пространство",caption:"REAL ESTATE / EXPERIENCE",position:"object-center"},
 security:{src:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=82",fallback:"/art/data-experience.svg",alt:"Тёмная технологичная среда как визуальный образ цифровой безопасности",caption:"SECURITY / INFRASTRUCTURE",position:"object-center"},
 education:{src:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=82",fallback:"/art/web-experience.svg",alt:"Атмосфера обучения и развития",caption:"EDUCATION / DIGITAL LEARNING",position:"object-center"},
 health:{src:"https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=82",fallback:"/art/web-experience.svg",alt:"Современная медицинская среда",caption:"HEALTHCARE / DIGITAL SERVICE",position:"object-center"},
} as const;
export type ArtworkVariant=keyof typeof artworks;

export default function EditorialVisual({variant="web",className="",priority=false}:{variant?:ArtworkVariant;className?:string;priority?:boolean}){
 const art=artworks[variant];
 const [error,setError]=useState(false);
 return <figure className={`group relative min-h-[250px] overflow-hidden rounded-[28px] border border-[#d5b58f]/25 bg-[#17181c] ${className}`}>
  <Image src={error?art.fallback:art.src} alt={art.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 65vw, 45vw" unoptimized priority={priority} onError={()=>setError(true)} className={`object-cover ${art.position} transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none`}/>
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111114]/85 via-[#111114]/10 to-transparent"/>
  <figcaption className="absolute bottom-6 left-7 flex items-center gap-3 text-[10px] tracking-[.22em] text-[#e8caa3]"><span className="h-1.5 w-1.5 rounded-full bg-[#d5b58f]"/>{art.caption}</figcaption>
 </figure>;
}
