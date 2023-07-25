import { Anchor, ProjectsList } from "../index";
import dbProjects from "../../db/projects.json";

export function Projects() {
  return (
    <section className="projects">
      <div className="projects__header">
        <h2 className="projects__heading | clr-neutral-100 fs-800 fw-bold">
          Projects
        </h2>
        <Anchor href="#contact-me">Contact me</Anchor>
      </div>
      <ProjectsList projects={dbProjects} />
    </section>
  );
}
