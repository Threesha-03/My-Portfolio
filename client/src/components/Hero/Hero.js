import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Problem Solver",
  "CS Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__greeting">Hi there, I'm</p>
          <h1 className="hero__name">Threesha</h1>
          <div className="hero__role-wrapper">
            <span className="hero__role">{displayed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>
          <p className="hero__bio">
            Motivated Computer Science Engineering graduate with strong skills in
            full-stack web development and problem-solving, seeking an opportunity
            to contribute technical expertise and grow professionally in the IT industry.
          </p>

          <div className="hero__actions">
            <Link to="projects" smooth duration={500} offset={-70} className="btn btn--primary">
              View Projects
            </Link>
            <Link to="contact" smooth duration={500} offset={-70} className="btn btn--outline">
              Get In Touch
            </Link>
            <a
              href="https://drive.google.com/file/d/1d1Up5LU3J41P6H5kCd8C2IqTC3spJWvm/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="btn btn--resume"
              download
            >
              <FiDownload size={16} />
              Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/threesha-poojary-0706b62a0/"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Threesha-03"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="mailto:threeshapoojary9@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero__avatar">
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <img
                src="/profile.jpg"
                alt="Threesha"
                className="hero__avatar-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <span className="hero__avatar-fallback" style={{ display: "none" }}>T</span>
            </div>
          </div>
        </div>
      </div>

      <Link to="about" smooth duration={500} offset={-70} className="hero__scroll-hint" aria-label="Scroll down">
        <FiArrowDown size={20} />
      </Link>
    </section>
  );
}
