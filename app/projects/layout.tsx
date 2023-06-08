import ProjectsNavbar from "@/components/ProjectsNavbar";
import projects from "@/data/projects";
export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="m-0">
			<ProjectsNavbar projects={projects} />
			{children}
		</div>
	);
}
