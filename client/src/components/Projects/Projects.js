import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    title: "Healix – Intelligent Care for a Healthier You",
    description:
      "A health and wellness platform combining an AI-powered chatbot, an emergency assistance button, and guided exercise features to support users in daily health management and urgent situations.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Next.js", "Supabase", "Groq API", "Twilio"],
    github: "https://github.com/Threesha-03/Healix-Intelligent-Care-for-a-Healthier-You",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Event Connect Platform",
    description:
      "A full-stack event management platform with features like event creation, event registration, ticket booking, certificate generation, and user authentication through a responsive interface.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Threesha-03/Event-Connect-platform",
    featured: true,
    category: "MERN Stack",
  },
  {
    title: "Admission Enquiry Chatbot",
    description:
      "A user-friendly chatbot interface that enhances user engagement by allowing users to ask questions and retrieve answers about college admissions instantly.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Threesha-03/Admission-Enquiry-Chatbot",
    featured: false,
    category: "AI / Chatbot",
  },
];

const categories = ["All", "Full Stack", "MERN Stack", "AI / Chatbot"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Things I've built</p>

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${active === cat ? "projects__filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <div className={`project-card ${project.featured ? "project-card--featured" : ""}`} key={project.title}>
              {project.featured && (
                <span className="project-card__badge">Featured</span>
              )}
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__category">{project.category}</span>
              </div>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span className="project-card__tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                  aria-label="GitHub repository"
                >
                  <FiGithub size={16} />
                  <span>GitHub</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={16} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
