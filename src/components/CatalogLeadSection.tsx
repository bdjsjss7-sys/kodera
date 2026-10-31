import LeadForm from "@/components/LeadForm";

type Props={
 service?:string;
 eyebrow?:string;
 title?:string;
 description?:string;
};

export default function CatalogLeadSection({
 service="",
 eyebrow="ОБСУДИТЬ ЗАДАЧУ",
 title="Расскажите, что нужно создать.",
 description="Опишите задачу, желаемый результат и важные ограничения. Заявка поступит напрямую в KODERA, а форма подтвердит успешную доставку."
}:Props){
 return <section aria-label="Заявка на проект" className="border-t border-white/10 bg-[#151619]">
  <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-6 md:py-28 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
   <div>
    <p className="text-xs tracking-[.25em] text-[#d5b58f]">{eyebrow}</p>
    <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-[-.055em] md:text-6xl">{title}</h2>
    <p className="mt-7 max-w-xl text-sm leading-8 text-white/55">{description}</p>
   </div>
   <LeadForm initialService={service}/>
  </div>
 </section>;
}
