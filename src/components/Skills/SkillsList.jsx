import { SkillsItem } from "../index";

export function SkillsList({ skills }) {
  return (
    <ul className="skills__list" role="list">
      {skills.map((skill) => (
        <SkillsItem key={skill.name} skill={skill} />
      ))}
    </ul>
  );
}
