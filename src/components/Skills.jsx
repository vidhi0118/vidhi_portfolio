
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python", "PHP", "TypeScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React.js", "Angular", "Bootstrap"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "ASP.NET", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQL Server", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "NetBeans"],
  },
  {
    title: "Data Analytics",
    skills: ["Python", "Pandas", "Power BI", "SQL"],
  },
];

export default function Skills() {
  return (
    <section className="section section-soft" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>
            Skills & <span>Technologies.</span>
          </h2>
          <p className="section-description">
            Technologies I have explored through coursework, learning,
            and development projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-symbol">&lt;/&gt;</span>
              </div>

              <h3>{group.title}</h3>

              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}