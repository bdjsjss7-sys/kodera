'use client';
import {useState} from 'react';
import Link from 'next/link';
import {masterProjects} from '@/lib/masterProjects';
import {MasterStage} from './MasterArtwork';
import MasterGallery from './MasterGallery';
import s from './portfolio.module.css';
export default function MasterPortfolio(){
 const [selected,setSelected]=useState<string>('atelier-audio');
 const project=masterProjects.find(p=>p.slug===selected)!;
 return <div className={s.showroom}><div className={s.selection}><div className={s.selectionLabel}><span>ИЗБРАННОЕ / 06 КОНЦЕПТОВ</span><span className={s.selectedTag}>Выберите направление ↘</span></div><div className={s.projectList}>{masterProjects.map((p)=><button type="button" className={s.projectCard} key={p.slug} onClick={()=>setSelected(p.slug)} aria-pressed={p.slug===selected} aria-label={`Посмотреть ${p.name}`}><div className={s.projectCardArt} aria-hidden="true"><MasterStage project={p}/></div><div className={s.projectCardCopy}><small>{p.kind}</small><h2>{p.name}</h2><p>{p.description}</p><div className={s.cardTags}><span>{p.level}</span><span>6 экранов　↗</span></div></div></button>)}</div><p className={s.selectionNote}>Шесть самостоятельных дизайн-концептов студии. Не клиентские заказы. Выберите работу и рассмотрите её экраны на компьютере и телефоне.</p></div><div className={s.viewer}><MasterGallery key={project.slug} project={project}/><div className={s.viewerInfo}><div><small>{project.kind.toUpperCase()}</small><h2>{project.name}</h2><p>{project.description}</p></div><Link className={s.textLink} href={`/works/${project.slug}`}>Смотреть концепт ↗</Link></div><dl className={s.viewerMeta}><div><dt>Уровень</dt><dd>{project.level}</dd></div><div><dt>Формат</dt><dd>Desktop + Mobile</dd></div><div><dt>Сценарии</dt><dd>{project.scope}</dd></div></dl></div></div>
}
