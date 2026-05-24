import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copy">
          © {new Date().getFullYear()} Threesha. Built with React & Node.js.
        </p>
        <div className="footer__socials">
          <a href="https://linkedin.com/in/Threesha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="mailto:threeshapoojary9@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
