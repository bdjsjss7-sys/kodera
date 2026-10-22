import {services} from "@/lib/services";
import {solutions} from "@/lib/solutions";
import {newServicePages} from "@/lib/newServicePages";
import {expandedArticles} from "@/lib/expandedArticles";
import {portfolioWorks} from "@/lib/portfolioWorks";
export type SearchEntry={title:string;description:string;category:string;href:string;keywords:string};
export const siteEntries:SearchEntry[]=[
 {title:"Все услуги KODERA",description:"Разработка сайтов, UX/UI, SEO, веб-приложения, автоматизация и поддержка",category:"Услуги",href:"/services",keywords:"услуги разработка дизайн seo приложение автоматизация поддержка"},
 {title:"Калькулятор стоимости",description:"Оценить состав проекта и условную трудоёмкость",category:"Инструменты",href:"/pricing#project-calculator",keywords:"цена стоимость рассчитать бюджет калькулятор смета"},
 {title:"Подобрать тип сайта",description:"Интерактивный подбор решения по задаче",category:"Инструменты",href:"/#selector",keywords:"подбор какой сайт выбрать тип нужен"},
 {title:"Работы и примеры интерфейсов",description:"Шесть интерактивных демонстрационных концептов",category:"Примеры",href:"/works",keywords:"работы кейсы портфолио примеры проекты дизайн"},
 {title:"Этапы работы",description:"Процесс от идеи и прототипа до тестирования",category:"О студии",href:"/process",keywords:"этапы процесс разработка"},
 {title:"Обсудить проект",description:"Форма обращения и первоначальный бриф",category:"Контакты",href:"/contact",keywords:"контакты заявка заказать сотрудничество написать"},
 {title:"Россия",description:"Предложение и сотрудничество на рынке России",category:"Регионы",href:"/ru",keywords:"Россия российский рубли"},
 {title:"Беларусь",description:"Предложение и сотрудничество на рынке Беларуси",category:"Регионы",href:"/by",keywords:"Беларусь белорусский BYN"},
 ...services.map(s=>({title:s.title,description:s.short,category:"Основные услуги",href:`/services/${s.slug}`,keywords:s.formats.join(" ")})),
 ...solutions.map(s=>({title:s.title,description:s.subtitle,category:"Решения",href:`/solutions/${s.slug}`,keywords:s.category+" "+s.detail.slice(0,120)})),
 ...newServicePages.map(s=>({title:s.title,description:s.subtitle,category:s.category,href:`/${s.group}/${s.slug}`,keywords:s.audience+" "+s.scenarios})),
 ...expandedArticles.map(s=>({title:s.title,description:s.description,category:"Журнал",href:`/blog/${s.slug}`,keywords:s.category+" "+s.description})),
 ...portfolioWorks.map(s=>({title:s.name,description:s.short,category:"Примеры",href:`/works/${s.slug}`,keywords:s.sector+" "+s.kind+" "+s.tags.join(" ")}))
];
