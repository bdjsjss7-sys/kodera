import {NextRequest,NextResponse} from "next/server";
export const runtime="nodejs";
type Lead={name:string;contact:string;market:"ru"|"by";service:string;budget:string;message:string;source:string;consent:boolean;website:string};
const clean=(v:unknown,max:number)=>typeof v==="string"?v.trim().slice(0,max):"";
const escapeHtml=(value:string)=>value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const buckets=new Map<string,{count:number;until:number}>();
const duplicates=new Map<string,number>();
async function fingerprint(lead:Lead){
 const value=[lead.name,lead.contact,lead.market,lead.service,lead.budget,lead.message].map(x=>x.toLowerCase().replace(/\s+/g," ").trim()).join("\n");
 const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value));
 return Array.from(new Uint8Array(digest),byte=>byte.toString(16).padStart(2,"0")).join("");
}
export async function POST(req:NextRequest){
 const json=(data:object,status:number)=>NextResponse.json(data,{status,headers:{"Cache-Control":"no-store"}});
 const origin=req.headers.get("origin");
 if(origin){try{if(new URL(origin).host!==req.nextUrl.host)return json({error:"Некорректный источник запроса."},403);}catch{return json({error:"Некорректный источник запроса."},403);}}
 const length=Number(req.headers.get("content-length")||"0");
 if(length>16000)return json({error:"Слишком большой запрос."},413);
 let body:Record<string,unknown>;
 try{body=await req.json();if(!body||typeof body!=="object"||Array.isArray(body))throw Error("invalid");}catch{return json({error:"Проверьте заполнение формы."},400);}
 const lead:Lead={name:clean(body.name,100),contact:clean(body.contact,180),market:body.market==="by"?"by":"ru",service:clean(body.service,120),budget:clean(body.budget,80),message:clean(body.message,3500),source:clean(body.source,240),consent:body.consent===true,website:clean(body.website,200)};
 if(lead.website)return json({ok:true},200);
 if(lead.name.length<2||lead.contact.length<5||lead.message.length<15||!lead.consent)return json({error:"Укажите имя, контакт, описание от 15 символов и согласие."},422);
 if(!/^[^<>\r\n]{5,180}$/.test(lead.contact))return json({error:"Проверьте контактные данные."},422);
 const now=Date.now();
 if(duplicates.size>2000){for(const [key,until] of duplicates)if(until<now)duplicates.delete(key);}
 const duplicateKey=await fingerprint(lead);
 if((duplicates.get(duplicateKey)||0)>now)return json({error:"Такая заявка уже отправлена. Мы свяжемся с вами по указанному контакту."},409);
 const peer=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
 if(buckets.size>2000){for(const [key,value] of buckets)if(value.until<now)buckets.delete(key);}
 const entry=buckets.get(peer);if(entry&&entry.until>now&&entry.count>=5)return json({error:"Слишком много запросов. Повторите позже."},429);
 buckets.set(peer,entry&&entry.until>now?{count:entry.count+1,until:entry.until}:{count:1,until:now+600000});
 duplicates.set(duplicateKey,now+600000);
 const token=process.env.TELEGRAM_BOT_TOKEN;
 const chatId=process.env.TELEGRAM_CHAT_ID;
 if(!token||!chatId){duplicates.delete(duplicateKey);return json({error:"Отправка пока не подключена. Попробуйте позже."},503);}
 const sourcePath=lead.source.startsWith("/")?lead.source:"/";
 const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||"https://www.kodera.pro").replace(/\/$/,"");
 const receivedAt=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",dateStyle:"short",timeStyle:"short"}).format(new Date());
 const text=[
  "<b>Новая заявка — KODERA</b>",
  `<i>${escapeHtml(receivedAt)} · Москва</i>`,
  "",
  `<b>Имя:</b> ${escapeHtml(lead.name)}`,
  `<b>Контакт:</b> ${escapeHtml(lead.contact)}`,
  `<b>Регион:</b> ${lead.market==="by"?"Беларусь":"Россия"}`,
  `<b>Услуга:</b> ${escapeHtml(lead.service||"Не указана")}`,
  `<b>Бюджет:</b> ${escapeHtml(lead.budget||"Не указан")}`,
  `<b>Источник:</b> ${escapeHtml(sourcePath)}`,
  "",
  "<b>Описание проекта:</b>",
  escapeHtml(lead.message)
 ].join("\n");
 const username=lead.contact.match(/^@([A-Za-z0-9_]{5,32})$/)?.[1];
 const inline_keyboard=[
  ...(username?[[{text:"Написать клиенту в Telegram",url:`https://t.me/${username}`}]]:[]),
  [{text:"Открыть страницу-источник",url:`${siteUrl}${sourcePath}`}]
 ];
 try{
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),8000);
  try{
   const response=await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:chatId,text,parse_mode:"HTML",disable_web_page_preview:true,reply_markup:{inline_keyboard}}),signal:controller.signal,cache:"no-store"});
   if(!response.ok)throw Error("Telegram delivery failed");
  }finally{clearTimeout(timeout);}
  return json({ok:true},200);
 }catch{duplicates.delete(duplicateKey);return json({error:"Не удалось доставить заявку. Пожалуйста, попробуйте позже."},502);}
}
