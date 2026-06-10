import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const info = [
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Jaipur, Rajasthan, India" },
    { icon: <FaGraduationCap />, label: "Education", value: "B.Tech CSE · SKIT (2023–2027)" },
    { icon: <FaStar />, label: "CGPA", value: "9.4 / 10" },
    { icon: <FaBriefcase />, label: "Currently", value: "Data Science Intern @ Celebal" },
  ];

  const traits = [
    { emoji: "🧩", title: "Problem Solver", desc: "500+ DSA problems across platforms" },
    { emoji: "🤖", title: "AI Builder", desc: "LLMs, ML pipelines & intelligent systems" },
    { emoji: "🌐", title: "Full-Stack Dev", desc: "React, Flask, Python & databases" },
    { emoji: "📊", title: "Data Engineer", desc: "Pipelines, dashboards & analytics" },
  ];

  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Building at the intersection of AI, data, and software engineering.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "24px",
          marginBottom: "32px",
        }}
          className="about-main-grid"
        >
          {/* Story card */}
          <motion.div variants={fadeUp} className="glass-card">
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px", color: "var(--text-primary)" }}>
              Engineering with curiosity & craft
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "16px" }}>
              I'm a <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Computer Science undergraduate</span> entering my final year with hands-on experience across AI/ML, data engineering, and full-stack development. I don't just take courses — I ship real products.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "16px" }}>
              From building an <span style={{ color: "var(--accent)", fontWeight: 500 }}>AI-powered journaling system</span> with LLMs to processing 10,000+ records with optimized SQL pipelines, I thrive at the boundary where data meets intelligent software.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
              I'm actively looking for <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>SDE/SWE roles</span> where I can contribute to scalable systems, build meaningful features, and grow alongside top engineering teams.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "24px" }}>
              {["Python", "React", "Flask", "SQL", "ML", "Docker", "Azure"].map(tag => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div variants={fadeUp} className="glass-card">
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "20px" }}>Quick Info</h3>
            {info.map(({ icon, label, value }) => (
              <div key={label} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "14px 0",
                borderBottom: "1px solid var(--glass-border)",
              }}>
                <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "2px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>{value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trait cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="traits-grid">
          {traits.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(56,189,248,0.35)" }}
              className="glass-card"
              style={{ textAlign: "center", padding: "24px 16px" }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{t.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px" }}>{t.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .about-main-grid { grid-template-columns: 1fr !important; }
          .traits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .traits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default About;