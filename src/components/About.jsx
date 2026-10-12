
export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>
            About <span>Me.</span>
          </h2>
          <p className="section-description">
            My academic journey, development interests, and goals.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm pursuing a Master of Computer Applications (MCA) at
              Smt. Chandaben Mohanbhai Patel Institute of Computer
              Applications (CMPICA), CHARUSAT.
            </p>

            <p>
              With a Bachelor of Computer Applications background, I have
              explored frontend development, backend programming, database
              management, and data analytics through academic and personal
              projects.
            </p>

            <p>
              I enjoy learning new technologies, solving practical problems,
              and developing user-friendly applications. My goal is to grow
              as a software developer and contribute to real-world projects.
            </p>

            <a
              className="text-link"
              href="/Vidhi_Patel_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View my resume ↗
            </a>
          </div>

          <div className="about-stats">
            <article className="stat-card">
              <span className="stat-icon">✦</span>
              <h3>9.05/10</h3>
              <p>BCA CGPA</p>
            </article>

            <article className="stat-card">
              <span className="stat-icon">🏆</span>
              <h3>1st Rank</h3>
              <p>Department achievement</p>
            </article>

            <article className="stat-card">
              <span className="stat-icon">⌘</span>
              <h3>MCA</h3>
              <p>Currently pursuing postgraduate studies</p>
            </article>

            <article className="stat-card">
              <span className="stat-icon">💻</span>
              <h3>Projects</h3>
              <p>Learning through practical development</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}