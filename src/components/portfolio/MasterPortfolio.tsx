'use client';
import {useState} from 'react';
import Link from 'next/link';
import {masterProjects} from '@/lib/masterProjects';
import {MasterStage} from './MasterArtwork';
import MasterGallery from './MasterGallery';
import s from './portfolio.module.css';
const categories=['Все 7 флагманских',...new Set(masterProjects.map(p=>p.category))];
export default function MasterPortfolio(){
 const [selected,setSelected]=useState('atelier-audio');
 const [category,setCategory]=useState('Все 7 флагманских');
 const items=category==='Все 7 флагманских'?masterProjects:masterProjects.filter(p=>p.category===category);
 const project=items.find(p=>p.slug===selected)||items[0];
 return <><div className={s.portfolioFilters} role="group" aria-label="Фильтр работ по типу">{categories.map(c=><button type="button" key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}<span>{c==='Все 7 флагманских'?masterProjects.length:masterProjects.filter(p=>p.category===c).length}</span></button>)}</div><div className={s.showroom}><div className={s.selection}><div className={s.selectionLabel}><span>ПОДРОБНЫЕ КЕЙСЫ / {String(items.length).padStart(2,'0')} ИЗ 90</span><span className={s.selectedTag}>Выберите направление ↘</span></div><div className={s.projectList}>{items.map(p=><button type="button" className={s.projectCard} key={p.slug} onClick={()=>setSelected(p.slug)} aria-pressed={p.slug===project.slug} aria-label={'Посмотреть '+p.name}><div className={s.projectCardArt} aria-hidden="true"><MasterStage project={p}/></div><div className={s.projectCardCopy}><small>{p.kind}</small><h2>{p.name}</h2><p>{p.description}</p><div className={s.cardTags}><span>{p.level}</span><span>6 экранов　↗</span></div></div></button>)}</div><p className={s.selectionNote}>Подробная выборка из полного каталога на 90 концептов. Это демонстрационные дизайн-системы, а не клиентские заказы.</p></div><div className={s.viewer}><MasterGallery key={project.slug} project={project}/><div className={s.viewerInfo}><div><small>{project.kind.toUpperCase()}</small><h2>{project.name}</h2><p>{project.description}</p></div><Link className={s.textLink} href={'/works/'+project.slug}>Смотреть концепт ↗</Link></div><dl className={s.viewerMeta}><div><dt>Уровень</dt><dd>{project.level}</dd></div><div><dt>Формат</dt><dd>Desktop + Mobile</dd></div><div><dt>Сценарии</dt><dd>{project.scope}</dd></div></dl></div></div></>
}
