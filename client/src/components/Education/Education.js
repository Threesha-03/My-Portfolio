import React from "react";
import { FiBook } from "react-icons/fi";
import "./Education.css";

const education = [
  {
    institution: "Srinivas Institute of Technology, Mangalore",
    degree: "B.E. Computer Science and Engineering",
    period: "2022 – 2026",
    score: "CGPA: 9.0",
    current: true,
  },
  {
    institution: "Carmel Composite PU College, Modankapu",
    degree: "Pre-University (Science)",
    period: "2020 – 2022",
    score: "92%",
    current: false,
  },
  {
    institution: "Best English Medium School, B.C. Road",
    degree: "SSLC (10th Grade)",
    period: "2019 – 2020",
    score: "87%",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />
        <p className="section-subtitle">My academic background</p>

        <div className="education__grid">
          {education.map((edu, i) => (
            <div className={`education__card ${edu.current ? "education__card--current" : ""}`} key={i}>
              <div className="education__card-icon">
                <FiBook size={20} />
              </div>
              {edu.current && <span className="education__badge">Current</span>}
              <h3 className="education__institution">{edu.institution}</h3>
              <p className="education__degree">{edu.degree}</p>
              <div className="education__meta">
                <span className="education__period">{edu.period}</span>
                <span className="education__score">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
