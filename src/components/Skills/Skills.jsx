import { SkillsList } from "../index";
import dbSkills from "../../db/skills.json";

export function Skills() {
  return (
    <section className="skills">
      <SkillsList skills={dbSkills} />
    </section>
  );
}
