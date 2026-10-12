
const projects = [
  {
    number: "01",
    title: "PG Urban Stay",
    category: "Web Application",
    image: "/images/urban_stay.png",
    description:
      "A PG accommodation management application developed to organize property information and room or tenant management.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/vidhi0118/PG_Urban_Stay",
    demo: "",
  },
  {
    number: "02",
    title: "Smart RideShare",
    category: "Full-Stack Application",
    image: "/images/ride-share.png",
    description:
      "A ride-sharing application concept involving user interfaces, authentication, backend integration, and database management.",
    technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/vidhi0118/ride-sharing-",
    demo: "",
  },
  {
    number: "03",
    title: "Cryptocurrency Dashboard",
    category: "Data Analytics",
    image: "/images/crypto-dashboard.png",
    description:
      "A data analytics project focused on processing cryptocurrency information and presenting market insights through dashboards.",
    technologies: ["Python", "Pandas", "SQL Server", "Power BI"],
    github: "https://github.com/vidhi0118/crypto-dashboard-python",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            My <span>Projects.</span>
          </h2>
          <p className="section-description">
            A selection of projects showcasing my development and
            problem-solving skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(
                      "project-image-fallback"
                    );
                  }}
                />
                <span className="project-image-number">{project.number}</span>
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tag-list project-tags">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="link-unavailable">
                      GitHub link to add
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="link-unavailable">
                      Demo link to add
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}