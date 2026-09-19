import Link from "next/link";
import type { Project } from "@/content/types";
export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><p className="metadata">{project.period}</p>
    <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
    <p>{project.summary}</p><p className="metadata">{project.tags.join(" / ")}</p>
  </article>;
}
