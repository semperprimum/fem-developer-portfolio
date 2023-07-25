import { Anchor } from "../components";

export function Intro() {
  return (
    <section className="intro">
      <h1 className="intro__heading | clr-neutral-100 fs-800 fw-bold">
        Nice to meet you! I'm <span>Adam Keyes</span>.
      </h1>
      <p className="intro__body | clr-neutral-200 fs-400 fw-regular">
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <Anchor className="intro__button" href="#contact-me">
        Contact me
      </Anchor>
    </section>
  );
}
