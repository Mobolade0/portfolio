import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return <><h1>Engineering projects</h1><Link className="marsh-team-link" href="/marshgazers">Meet MarshGazers: the team behind our two Mars rovers</Link><div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
