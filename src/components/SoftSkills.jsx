
import React from "react";

const softSkills = [
  {
    title: "Analytical Thinking & Problem-Solving",
    description:
      "Analyze challenges logically and develop effective, practical solutions.",
    icon: "🧩",
  },
  {
    title: "Effective Communication",
    description:
      "Communicate ideas clearly and exchange technical information effectively.",
    icon: "💬",
  },
  {
    title: "Critical Thinking & Decision-Making",
    description:
      "Evaluate information carefully and make informed decisions.",
    icon: "🎯",
  },
  {
    title: "Adaptability & Continuous Learning",
    description:
      "Adapt to evolving technologies and continuously strengthen technical knowledge.",
    icon: "📈",
  },
  {
    title: "Team Collaboration & Cross-Functional Coordination",
    description:
      "Collaborate with team members, share responsibilities, and contribute toward common goals.",
    icon: "🤝",
  },
];

function SoftSkills() {
  return (
    <section className="section soft-skills-section" id="soft-skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">PROFESSIONAL STRENGTHS</span>
          <h2>Soft Skills</h2>
          <p>
            The professional qualities that support effective
            communication, collaboration, and problem-solving.
          </p>
        </div>

        <div className="soft-skills-grid">
          {softSkills.map((skill) => (
            <article className="soft-skill-card" key={skill.title}>
              <div className="soft-skill-icon" aria-hidden="true">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;