import { Anchor } from "../index";

export function ProjectsItem({ project }) {
  return (
    <li className="projects__item" role="listitem">
      <div className="projects__img-wrapper">
        <picture>
          <source media="(min-width: 60em)" srcSet={project.images.large} />
          <img
            className="projects__img"
            src={project.images.small}
            alt="thumbnail"
          />
        </picture>
        <div className="projects__buttons-image">
          <Anchor>view project</Anchor>
          <Anchor>view code</Anchor>
        </div>
      </div>
      <strong className="projects__name | clr-neutral-100 fs-550 fw-bold">
        {project.name}
      </strong>
      <ul role="list" className="projects__technology__list">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            role="listitem"
            className="projects__technology__item"
          >
            <span className="projects__technology | clr-neutral-200 fs-500 fw-regular">
              {technology}
            </span>
          </li>
        ))}
      </ul>
      <div className="projects__buttons">
        <Anchor href="#">view project</Anchor>
        <Anchor href="#">view code</Anchor>
      </div>
    </li>
  );
}
