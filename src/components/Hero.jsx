
const profile = {
  name: "Vidhi Patel",
  role: "Aspiring Full-Stack Developer",
  github: "https://github.com/vidhi0118",
  linkedin: "https://www.linkedin.com/in/vidhi-patel-8ba4723a1/",

  email: "vidhiptl0118@gmail.com",
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> HELLO, I'M
          </p>

          <h1>
            Vidhi
            <br />
            <span>Patel.</span>
          </h1>

          <h2>{profile.role}</h2>

          <p className="hero-description">
            I'm an MCA student passionate about building modern web
            applications. I work across frontend and backend development,
            creating practical applications using React, JavaScript,
            Node.js, Express.js, databases, and other web technologies.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work ↗
            </a>
           
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />

          <div className="profile-frame">
            <img
              src="/images/profile.jpeg"
              alt="Vidhi Patel"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add("photo-fallback");
              }}
            />
            <span className="profile-initials">VP</span>
          </div>

          <div className="floating-note note-top">✦ MCA Student</div>
          <div className="floating-note note-bottom">
            &lt;/&gt; Web Development
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        Scroll to explore ↓
      </a>
    </section>
  );
}