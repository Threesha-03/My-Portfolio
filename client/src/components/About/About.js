import React from "react";
import { FiMapPin, FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import "./About.css";

const info = [
  { icon: <FiMapPin />, label: "Location", value: "Mangalore, Karnataka, India" },
  { icon: <FiMail />, label: "Email", value: "threeshapoojary9@gmail.com", href: "mailto:threeshapoojary9@gmail.com" },
  { icon: <FiPhone />, label: "Phone", value: "+91 7259682183", href: "tel:+917259682183" },
  { icon: <FiLinkedin />, label: "LinkedIn", value: "linkedin.com/in/Threesha", href: "https://www.linkedin.com/in/threesha-poojary-0706b62a0/" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
        <p className="section-subtitle">A little bit about who I am</p>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a Computer Science Engineering graduate with a CGPA of 9.0. I'm passionate about building
              full-stack web applications that solve real-world problems.
            </p>
            <p>
              My experience spans the MERN stack — MongoDB, Express.js, React.js, and Node.js —
              along with Python, SQL, and modern tools like Supabase and Next.js. I enjoy turning
              ideas into clean, functional products.
            </p>
            <p>
              Beyond coding, I've organized technical events like hackathons, participated in
              national-level competitions, and actively contributed to NSS volunteering activities.
            </p>
          </div>

          <div className="about__info-cards">
            {info.map((item) => (
              <div className="about__info-card" key={item.label}>
                <span className="about__info-icon">{item.icon}</span>
                <div>
                  <p className="about__info-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="about__info-value about__info-value--link">
                      {item.value}
                    </a>
                  ) : (
                    <p className="about__info-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
