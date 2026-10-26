
import { useState } from "react";

const certificates = [
  {
    title: "Departmental First Rank",
    organization: "Academic Achievement",
    image: "/images/first-rank.png",
    description:
      "Academic recognition for achieving first rank across the department during BCA.",
  },
  {
    title: "Internal SIH 2026",
    organization: "Smart India Hackathon",
    image: "/images/sih-certificate.png",
    description:
      "Participation in Internal Smart India Hackathon 2026 at CMPICA, CHARUSAT.",
  },

  {
    title: "Build and Configure Networks with Packet Tracer",
    organization: "Cisco",
    image: "/images/backend.png",
    description:
      "Certification covering network building and configuration with Packet Tracer.",
  },
  
{
  title: "Advanced Java",
  organization: "Coursera",
  image: "/images/advanced-java.jpg",
  description:
    "Certificate demonstrating learning in advanced Java programming concepts.",
},
{
  title: ".NET FullStack Developer",
  organization: "Coursera",
  image: "/images/dotnet-fullstack.jpg",
  description:
    "Certificate covering full-stack development concepts using .NET technologies.",
},
{
  title: "C# for .NET Developers",
  organization: "Coursera",
  image: "/images/csharp-dotnet.jpg",
  description:
    "Certificate covering C# programming and .NET development fundamentals.",
},
{
  title: "Introduction to MongoDB",
  organization: "Coursera",
  image: "/images/introduction-mongodb.jpg",
  description:
    "Certificate covering the fundamentals of MongoDB and NoSQL databases.",
},
{
  title: "Build and Configure Networks with Packet Tracer",
  organization: "Cisco",
  image: "/images/backend.png",
  description:
    "Certification covering network building and configuration with Packet Tracer.",
},

];

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section section-soft" id="achievements">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MILESTONES</p>
          <h2>
            Achievements & <span>Certificates.</span>
          </h2>
          <p className="section-description">
            Academic recognition, hackathon participation, and continuous
            professional learning.
          </p>
        </div>

        <div className="achievement-banner">
          <div className="achievement-star">🏆</div>
          <div>
            <p className="project-category">ACADEMIC RECOGNITION</p>
            <h3>Departmental First Rank</h3>
            <p>Recognized for academic performance during BCA.</p>
          </div>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <button
                className="certificate-preview"
                type="button"
                onClick={() => setSelected(certificate)}
                aria-label={`View ${certificate.title} certificate`}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(
                      "certificate-placeholder"
                    );
                  }}
                />
                <span className="certificate-placeholder-text">
                  Certificate preview
                  <strong>Click to view ↗</strong>
                </span>
              </button>

              <div className="certificate-info">
                <p>{certificate.organization}</p>
                <h3>{certificate.title}</h3>
                <button
                  className="text-link certificate-open"
                  type="button"
                  onClick={() => setSelected(certificate)}
                >
                  View certificate ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close certificate preview"
            >
              ✕
            </button>

            <img src={selected.image} alt={selected.title} />
            <p className="project-category">{selected.organization}</p>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}