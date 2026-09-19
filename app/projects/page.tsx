import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return <><h1>Engineering projects</h1><div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
