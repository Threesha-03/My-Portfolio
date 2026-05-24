import React from "react";
import { FiBriefcase } from "react-icons/fi";
import "./Experience.css";

const experiences = [
  {
    company: "SuprMentr Technologies Pvt. Ltd",
    role: "Full Stack Web Development Intern",
    duration: "Internship",
    description:
      "Worked on developing the Event Connect Platform using MongoDB, Express.js, React.js, and Node.js. Implemented frontend-backend integration and developed features such as event registration, ticket booking, user authentication, and certificate generation.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Where I've worked</p>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div className="experience__item" key={i}>
              <div className="experience__icon-col">
                <div className="experience__icon">
                  <FiBriefcase size={18} />
                </div>
                {i < experiences.length - 1 && (
                  <div className="experience__line" aria-hidden="true" />
                )}
              </div>
              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__duration">{exp.duration}</span>
                </div>
                <p className="experience__desc">{exp.description}</p>
                <div className="experience__tech">
                  {exp.tech.map((t) => (
                    <span className="experience__tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
