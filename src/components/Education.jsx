
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution:
      "Smt. Chandaben Mohanbhai Patel Institute of Computer Applications (CMPICA), CHARUSAT",
    period: "2026 – Present",
    result: "Currently pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution:
      "College of Applied Sciences and Professional Studies (CASPS), Chikhli, VNSGU",
    period: "2023 – 2026",
    result: "CGPA: 9.05 / 10",
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>
          <h2>
            Education & <span>Growth.</span>
          </h2>
          <p className="section-description">
            My academic background and continued learning journey.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <article className="education-item" key={item.degree}>
              <div className="timeline-marker">{index + 1}</div>

              <div className="education-card">
                <div className="education-card-heading">
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                  </div>

                  <span className="education-period">{item.period}</span>
                </div>

                <span className="education-detail">{item.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}