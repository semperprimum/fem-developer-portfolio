import { Attribution, ContactForm, Links } from "../index";

export function Contact() {
  return (
    <section className="contact" id="contact-me">
      <div className="contact__content-wrapper">
        <div className="contact__content">
          <h2 className="contact__heading | clr-neutral-100 fs-800 fw-bold">
            Contact
          </h2>
          <p className="contact__body | clr-neutral-200 fs-400 fw-regular">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
        <footer>
          <div className="links">
            <Links />
          </div>
          <Attribution />
        </footer>
      </div>
    </section>
  );
}
