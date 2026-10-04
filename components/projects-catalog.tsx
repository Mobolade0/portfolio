"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import type { Project } from "@/content/types";
function CatalogCard({project}:{project:Project}) {
  const media=project.media[0];
  const image=project.slug === "tree-climbing-robot" ? "/media/tree-climbing-robot/tree-climbing-robot.webp" : media?.src;
  return <Link className="catalog-card" data-project={project.slug} href={`/projects/${project.slug}`}>
    {image && <img src={image} alt={media?.alt || project.title} width={media?.width} height={media?.height} loading="lazy" />}
    <div><h3>{project.title}</h3><p>{project.summary}</p><span>Explore project ↗</span></div>
  </Link>;
}
export function ProjectsCatalog({projects}:{projects:Project[]}) {
  const [active,setActive]=useState(0);
  const tabs=useRef<Array<HTMLButtonElement|null>>([]);
  const rovers=projects.filter(p=>p.slug.startsWith("olympus-"));
  return <article className="projects-catalog"><header><p className="eyebrow">Ideas made physical</p><h1>My Projects</h1></header>
    <div className="catalog-tabs" role="tablist" aria-label="Project collections">{["All projects","MarshGazers"].map((name,i)=><button key={name} ref={node=>{tabs.current[i]=node;}} type="button" role="tab" id={`catalog-tab-${i}`} aria-selected={active===i} aria-controls="catalog-panel" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={event=>{
      const next=event.key==="ArrowLeft"||event.key==="ArrowRight"?1-i:event.key==="Home"?0:event.key==="End"?1:null;
      if(next!==null){event.preventDefault();setActive(next);tabs.current[next]?.focus();}
    }}>{name}</button>)}</div>
    <div id="catalog-panel" role="tabpanel" aria-labelledby={`catalog-tab-${active}`}>
      {active===0 && <div className="catalog-grid">{projects.filter(p=>!p.slug.startsWith("olympus-")).map(p=><CatalogCard key={p.slug} project={p}/>)}</div>}
      <section className="catalog-marsh-group" aria-labelledby="catalog-marsh-title"><Link className="catalog-marsh-heading" href="/marshgazers"><img src="/media/marshgazers/logo.png" alt="" width={2048} height={962}/><div><p className="eyebrow">One team / Two rover missions</p><h2 id="catalog-marsh-title">MarshGazers</h2><p>Meet the team and follow our progression from reconnaissance to planetary sampling. ↗</p></div></Link><div className="catalog-grid">{rovers.map(p=><CatalogCard key={p.slug} project={p}/>)}</div></section>
    </div>
  </article>;
}
