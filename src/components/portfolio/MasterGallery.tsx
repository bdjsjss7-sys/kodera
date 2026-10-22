'use client';
import {useState} from 'react';
import type {MasterProject} from '@/lib/masterProjects';
import MasterArtwork,{MasterStage} from './MasterArtwork';
import s from './portfolio.module.css';
export default function MasterGallery({project,casePage=false}:{project:MasterProject;casePage?:boolean}){
 const [active,setActive]=useState(0);
 const [mode,setMode]=useState<'presentation'|'desktop'|'mobile'>('presentation');
 const count=project.screens.length;
 return <section className={casePage?s.caseGallery:undefined} aria-label={`Галерея ${project.name}`}>
 <div className={s.viewerTop}><span>ДИЗАЙН-КОНЦЕПТ / {String(active+1).padStart(2,'0')}—06</span><div className={s.modeSwitch} role="group" aria-label="Режим просмотра">{(['presentation','desktop','mobile'] as const).map((m,i)=><button type="button" key={m} onClick={()=>setMode(m)} aria-pressed={mode===m}>{['Композиция','Десктоп','Телефон'][i]}</button>)}</div></div>
 <MasterStage project={project} scene={active} mode={mode}/>
 <div className={s.galleryControls}><span aria-live="polite">{project.screens[active]} · {active+1} / {count}</span><div className={s.arrows}><button type="button" aria-label="Предыдущий экран" onClick={()=>setActive(v=>(v+count-1)%count)}>←</button><button type="button" aria-label="Следующий экран" onClick={()=>setActive(v=>(v+1)%count)}>→</button></div></div>
 <div className={s.thumbs} role="group" aria-label="Экраны проекта">{project.screens.map((label,i)=><button type="button" className={s.thumb} key={label} aria-pressed={active===i} aria-label={`${i+1}. ${label}`} onClick={()=>setActive(i)}><div aria-hidden="true"><MasterArtwork project={project} scene={i}/></div><span>{String(i+1).padStart(2,'0')} / {label}</span></button>)}</div>
 <p className={s.caption}>{project.captions[active]}</p>
 </section>
}
