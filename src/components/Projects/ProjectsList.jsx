import { ProjectsItem } from "../index";

export function ProjectsList({ projects }) {
  return (
    <ul role="list" className="projects__list">
      {projects.map((project) => (
        <ProjectsItem key={project.name} project={project} />
      ))}
    </ul>
  );
}
