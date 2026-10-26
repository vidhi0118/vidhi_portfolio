
const careerGoals = [
  {
    number: "01",
    title: "Short-Term Goal",
    heading: "Launch My Software Development Career",
    description:
      "Secure an internship or entry-level opportunity where I can apply my programming knowledge, contribute to real-world projects, and gain practical industry experience.",
    icon: "🚀",
  },
  {
    number: "02",
    title: "Technical Growth",
    heading: "Build Strong Development Expertise",
    description:
      "Strengthen my expertise in frontend and backend development, databases, APIs, and modern frameworks while building reliable and user-friendly applications.",
    icon: "💻",
  },
  {
    number: "03",
    title: "Long-Term Goal",
    heading: "Become a Skilled Full-Stack Developer",
    description:
      "Grow into a versatile software professional who can design, develop, test, and maintain scalable applications while continuously learning emerging technologies.",
    icon: "🎯",
  },
];

export default function CareerGoals() {
  return (
    <section className="section career-goals-section" id="career-goals">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">MY PROFESSIONAL VISION</span>
          <h2>Career <span>Goals.</span></h2>
          <p>
            My aspirations, learning priorities, and commitment to
            continuous growth in software development.
          </p>
        </div>

        <div className="career-goals-grid">
          {careerGoals.map((goal) => (
            <article className="career-goal-card" key={goal.number}>
              <div className="career-goal-top">
                <span className="career-goal-number">
                  {goal.number}
                </span>
                <span className="career-goal-icon" aria-hidden="true">
                  {goal.icon}
                </span>
              </div>

              <span className="career-goal-label">{goal.title}</span>
              <h3>{goal.heading}</h3>
              <p>{goal.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
