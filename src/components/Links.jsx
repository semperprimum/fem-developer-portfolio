import { ReactComponent as IconGithub } from "../assets/images/icon-github.svg";
import { ReactComponent as IconFrontendMentor } from "../assets/images/icon-frontend-mentor.svg";
import { ReactComponent as IconLinkedin } from "../assets/images/icon-linkedin.svg";
import { ReactComponent as IconTwitter } from "../assets/images/icon-twitter.svg";

export function Links() {
  return (
    <>
      <p className="clr-neutral-100 fs-600 fw-bold">adamkeyes</p>
      <ul className="links__list" role="list">
        <li className="links__item" role="listitem">
          <a href="#" aria-label="github">
            <IconGithub aria-hidden="true" />
          </a>
        </li>
        <li className="links__item" role="listitem">
          <a href="#" aria-label="frontend mentor">
            <IconFrontendMentor aria-hidden="true" />
          </a>
        </li>
        <li className="links__item" role="listitem">
          <a href="#" aria-label="linkedin">
            <IconLinkedin aria-hidden="true" />
          </a>
        </li>
        <li className="links__item" role="listitem">
          <a href="#" aria-label="twitter">
            <IconTwitter aria-hidden="true" />
          </a>
        </li>
      </ul>
    </>
  );
}
