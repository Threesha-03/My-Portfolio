import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";

// ─── Replace these three values with your EmailJS credentials ───────────────
// Sign up free at https://www.emailjs.com  (200 emails/month free)
// Dashboard → Email Services → Add Service (Gmail) → copy Service ID
// Dashboard → Email Templates → Create Template   → copy Template ID
// Dashboard → Account → API Keys                  → copy Public Key
// ✏️  Paste your real values below and save the file
const EMAILJS_SERVICE_ID  = "service_i3w7h9d";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_1sehonh";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "u6SA5Z8dVzkUOCmzT";   // e.g. "abc123XYZdef"
// ─────────────────────────────────────────────────────────────────────────────

const contactDetails = [
  { icon: <FiMail />,  label: "Email",    value: "threeshapoojary9@gmail.com", href: "mailto:threeshapoojary9@gmail.com" },
  { icon: <FiPhone />, label: "Phone",    value: "+91 7259682183",             href: "tel:+917259682183" },
  { icon: <FiMapPin />,label: "Location", value: "Mangalore, Karnataka, India" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Have a project in mind? Let's talk.</p>

        <div className="contact__layout">
          <div className="contact__info">
            <p className="contact__info-text">
              I'm currently open to internship and full-time opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is always open!
            </p>
            <div className="contact__details">
              {contactDetails.map((item) => (
                <div className="contact__detail" key={item.label}>
                  <span className="contact__detail-icon">{item.icon}</span>
                  <div>
                    <p className="contact__detail-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact__detail-value contact__detail-value--link">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__detail-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* field names (name, email, message) must match your EmailJS template variables */}
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="contact__input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="contact__input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === "success" && (
              <p className="contact__feedback contact__feedback--success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__feedback contact__feedback--error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button type="submit" className="btn btn--primary contact__submit" disabled={loading}>
              {loading ? "Sending..." : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
