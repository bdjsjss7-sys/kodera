type BusinessDetailsProps={compact?:boolean};

const phones=[
 {href:"tel:+375295293644",label:"+375 29 529-36-44"},
 {href:"tel:+79196989493",label:"+7 919 698-94-93"},
 {href:"tel:+79868311588",label:"+7 986 831-15-88"},
] as const;

export default function BusinessDetails({compact=false}:BusinessDetailsProps){
 return <section aria-label="Контакты и реквизиты" className={compact?"mt-10":"mt-12"}>
  <div className={`grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10${compact?"":" sm:grid-cols-2"}`}>
   <div className="bg-[#17181c] p-6 md:p-7">
    <p className="text-[10px] tracking-[.22em] text-[#d5b58f]">СВЯЗАТЬСЯ</p>
    <div className="mt-5 flex flex-col items-start gap-3">
     {phones.map(phone=><a key={phone.href} href={phone.href} className="text-base font-light tracking-[.01em] text-white/80 transition hover:text-[#d5b58f]">{phone.label}</a>)}
    </div>
    <p className="mt-5 text-xs leading-6 text-white/35">Выберите любой удобный номер.</p>
   </div>
   <div className="bg-[#17181c] p-6 md:p-7">
    <p className="text-[10px] tracking-[.22em] text-[#d5b58f]">РЕКВИЗИТЫ</p>
    <dl className="mt-5 space-y-3 text-sm leading-6">
     <div><dt className="sr-only">Индивидуальный предприниматель</dt><dd className="text-white/75">ИП «Петревич Диана Олеговна»</dd></div>
     <div className="flex gap-3"><dt className="min-w-12 text-white/35">УНП</dt><dd className="text-white/65">591963341</dd></div>
     <div className="grid gap-1"><dt className="text-white/35">Расчётный счёт</dt><dd className="break-words font-mono text-[12px] tracking-[.03em] text-white/65">BY34 ALFA 3013 2D59 7700 1027 0000</dd></div>
     <div className="flex gap-3"><dt className="min-w-12 text-white/35">БИК</dt><dd className="text-white/65">ALFABY2X</dd></div>
    </dl>
   </div>
  </div>
 </section>;
}
