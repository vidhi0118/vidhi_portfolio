
const contact = {
  email: "your-email@example.com",
  github: "https://github.com/vidhi0118",
  linkedin: "https://www.linkedin.com/in/vidhi-patel-8ba4723a1/",
  location: "Navsari, Gujarat, India",
};

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-copy">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <p>
            I'm interested in internships, entry-level software development
            roles, and opportunities to learn and contribute to real-world
            projects.
          </p>

          <a
            className="button button-light"
            href={`mailto:${contact.email}?subject=${encodeURIComponent(
              "Software Development Opportunity"
            )}`}
          >
            Send Me an Email ↗
          </a>
        </div>

        <div className="contact-details">
          <a className="contact-row" href={`mailto:${contact.email}`}>
            <span className="contact-icon">@</span>
            <span>
              <small>Email</small>
              <strong>{contact.email}</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-row"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">in</span>
            <span>
              <small>LinkedIn</small>
              <strong>Connect professionally</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            className="contact-row"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">⌘</span>
            <span>
              <small>GitHub</small>
              <strong>Explore my repositories</strong>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <div className="contact-row">
            <span className="contact-icon">⌖</span>
            <span>
              <small>Location</small>
              <strong>{contact.location}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}