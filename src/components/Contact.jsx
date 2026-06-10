import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
 const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length) { setErrors(errs); return; }
  setErrors({});
  setStatus("sending");

  try {
   await emailjs.send(
  SERVICE_ID,
  TEMPLATE_ID,
  {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  },
  PUBLIC_KEY
);
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  } catch (err) {
    console.error(err);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 4000);
  }
};

  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: "12px",
    background: "rgba(5,11,24,0.8)",
    border: `1.5px solid ${errors[field] ? "#f87171" : "var(--glass-border)"}`,
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  });

  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Let's <span className="highlight">Connect</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Open to SDE roles, internships, AI/ML collaborations, and freelance projects.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "24px" }} className="contact-grid">

          {/* Info */}
          <motion.div variants={fadeUp} className="glass-card">
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Open to Opportunities</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "28px", fontSize: "0.95rem" }}>
              Currently in my final year — actively applying for SDE roles, AI/ML positions, and engineering internships. I respond within 24 hours.
            </p>

            {[
              { icon: <FaEnvelope />, label: "Email", value: "pratikteenwal8@gmail.com", href: "mailto:pratikteenwal8@gmail.com" },
              { icon: <FaPhone />, label: "Phone", value: "+91 6376142843", href: "tel:+916376142843" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Jaipur, Rajasthan, India", href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 0",
                borderBottom: "1px solid var(--glass-border)",
              }}>
                <div style={{
                  width: 38, height: 38,
                  borderRadius: "10px",
                  background: "var(--accent-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                  fontSize: "0.95rem",
                }}>{icon}</div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                  {href
                    ? <a href={href} style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</a>
                    : <div style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</div>}
                </div>
              </div>
            ))}

            <div style={{ marginTop: "28px" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "14px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Find me on</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { href: "https://github.com/pratik-tee", icon: <FaGithub />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/pratik-tinwal-b7317b2b4/", icon: <FaLinkedin />, label: "LinkedIn" },
                  { href: "https://leetcode.com/u/pratik_tin/", icon: <SiLeetcode />, label: "LeetCode" },
                  { href: "https://wa.me/916376142843", icon: <FaWhatsapp />, label: "WhatsApp" },
                ].map(({ href, icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    className="btn btn-ghost"
                    style={{ padding: "8px 14px", fontSize: "0.85rem", gap: "6px" }}
                  >
                    {icon} {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} className="glass-card">
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "22px" }}>Send a Message</h3>

            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: "rgba(74, 222, 128, 0.1)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  color: "#4ade80",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle("name")}
                    onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
                    onBlur={e => e.target.style.borderColor = errors.name ? "#f87171" : "var(--glass-border)"}
                  />
                  {errors.name && <span style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.name}</span>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle("email")}
                    onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
                    onBlur={e => e.target.style.borderColor = errors.email ? "#f87171" : "var(--glass-border)"}
                  />
                  {errors.email && <span style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.email}</span>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject (e.g. SDE Role at Acme Corp)"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  style={inputStyle("subject")}
                  onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
                  onBlur={e => e.target.style.borderColor = errors.subject ? "#f87171" : "var(--glass-border)"}
                />
                {errors.subject && <span style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.subject}</span>}
              </div>

              <div>
                <textarea
                  rows={6}
                  placeholder="Tell me about the role, project, or collaboration..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle("message"), resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
                  onBlur={e => e.target.style.borderColor = errors.message ? "#f87171" : "var(--glass-border)"}
                />
                {errors.message && <span style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{errors.message}</span>}
              </div>

              <motion.button
                 type="submit"
                  disabled={status === "sending"}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
                style={{ alignSelf: "flex-start", padding: "13px 28px" }}
              >
                <FaPaperPlane size={13} />
                {status === "sending" ? " Sending..." : " Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;