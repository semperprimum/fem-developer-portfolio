export function SkillsItem({ skill }) {
  return (
    <li className="skills__item" role="listitem">
      <strong className="skills__technology | clr-neutral-100 fs-700 fw-bold">
        {skill.name}
      </strong>
      <p className="skills__experience | clr-neutral-200 fs-400 fw-regular">
        {skill.experience} Experience
      </p>
    </li>
  );
}
