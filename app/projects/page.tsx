import { projects } from "@/content/projects";
import { ProjectsCatalog } from "@/components/projects-catalog";
export const metadata = { title: "My Projects" };
export default function ProjectsPage() { return <ProjectsCatalog projects={projects}/>; }
