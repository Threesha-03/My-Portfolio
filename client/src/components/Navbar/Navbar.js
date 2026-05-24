import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "Achievements", to: "achievements" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="hero" smooth duration={500} className="navbar__logo">
          &lt;Threesha /&gt;
        </Link>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className="navbar__link"
                activeClass="navbar__link--active"
                spy
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  );
}
