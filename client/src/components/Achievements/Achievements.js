import React from "react";
import { FiAward, FiStar, FiUsers, FiHeart } from "react-icons/fi";
import "./Achievements.css";

const certifications = [
  { name: "Database Using SQL", issuer: "Ethnotech Academy" },
  { name: "Artificial Intelligence", issuer: "NPTEL" },
  { name: "Front-End Development", issuer: "Infosys" },
];

const achievements = [
  {
    icon: <FiStar />,
    title: "Technical Event Organizer",
    desc: "Successfully organized a technical hackathon in college, managing registrations and coordination.",
  },
  {
    icon: <FiUsers />,
    title: "National-Level Hackathon",
    desc: "Actively participated in a National-level hackathon, collaborating with peers on a problem-solving challenge.",
  },
  {
    icon: <FiHeart />,
    title: "NSS Volunteer",
    desc: "Actively involved in NSS awareness campaigns and volunteering activities.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Recognition and continuous learning</p>

        <div className="achievements__layout">
          <div>
            <h3 className="achievements__sub-heading">
              <FiAward className="achievements__sub-icon" />
              Certifications
            </h3>
            <div className="achievements__certs">
              {certifications.map((cert) => (
                <div className="achievements__cert-card" key={cert.name}>
                  <div className="achievements__cert-dot" aria-hidden="true" />
                  <div>
                    <p className="achievements__cert-name">{cert.name}</p>
                    <p className="achievements__cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="achievements__sub-heading">
              <FiStar className="achievements__sub-icon" />
              Highlights
            </h3>
            <div className="achievements__list">
              {achievements.map((item) => (
                <div className="achievements__item" key={item.title}>
                  <span className="achievements__item-icon">{item.icon}</span>
                  <div>
                    <p className="achievements__item-title">{item.title}</p>
                    <p className="achievements__item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
