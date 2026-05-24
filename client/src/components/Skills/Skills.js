import React from "react";
import {
  FiCode, FiDatabase, FiTool, FiCpu,
} from "react-icons/fi";
import "./Skills.css";

const skillGroups = [
  {
    icon: <FiCode />,
    title: "Programming Languages",
    skills: ["C", "Python", "JavaScript"],
  },
  {
    icon: <FiCpu />,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Next.js"],
  },
  {
    icon: <FiDatabase />,
    title: "Database Management",
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    icon: <FiTool />,
    title: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Canva", "Figma", "Groq API", "Twilio"],
  },
];

const softSkills = [
  "Technical Troubleshooting",
  "Clear Verbal & Written Communication",
  "Team Collaboration",
  "Problem Solving",
  "Event Management",
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__card" key={group.title}>
              <div className="skills__card-header">
                <span className="skills__card-icon">{group.icon}</span>
                <h3 className="skills__card-title">{group.title}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__soft">
          <h3 className="skills__soft-title">Professional Skills</h3>
          <div className="skills__soft-list">
            {softSkills.map((s) => (
              <div className="skills__soft-item" key={s}>
                <span className="skills__soft-dot" aria-hidden="true" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
