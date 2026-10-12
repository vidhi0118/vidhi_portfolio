
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  { name: "Soft Skills", href: "#soft-skills" },
  ["Projects", "#projects"],
  ["Achievements", "#achievements"],
  ["Education", "#education"],
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          vidhi<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}

          <a
            className="nav-resume"
            href="/Vidhi_Patel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </nav>
    </header>
  );
}