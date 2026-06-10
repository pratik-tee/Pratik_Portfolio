import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaCertificate, FaUsers } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ACHIEVEMENTS = [
  { icon: <FaCode />, color: "#38bdf8", title: "500+ DSA Problems", desc: "Solved across LeetCode, GeeksforGeeks & more" },
  { icon: <FaTrophy />, color: "#f59e0b", title: "Top 20% Global", desc: "LeetCode global ranking among millions of users" },
  { icon: <FaCertificate />, color: "#818cf8", title: "Databricks ML Certified", desc: "Databricks Machine Learning Fundamentals" },
  { icon: <FaCertificate />, color: "#818cf8", title: "Databricks GenAI Certified", desc: "Databricks Generative AI Fundamentals" },
  { icon: <FaCertificate />, color: "#34d399", title: "NPTEL Certified", desc: "Problem Solving Through Programming in C" },
  { icon: <FaUsers />, color: "#fb923c", title: "LNM Hacks 6.0", desc: "Participant at national-level hackathon" },
  { icon: <FaUsers />, color: "#f472b6", title: "Google DevFest 2024", desc: "Attended Google Developer Festival 2024" },
];

const Achievements = () => {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Achievements & <span className="highlight">Certifications</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">Awards, certifications, and competitive programming milestones.</p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }} className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: `${a.color}40` }}
              className="glass-card"
              style={{ padding: "22px 20px" }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: "12px",
                background: `${a.color}12`,
                border: `1px solid ${a.color}25`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: a.color,
                fontSize: "1.1rem",
                marginBottom: "14px",
              }}>
                {a.icon}
              </div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "6px", lineHeight: 1.3 }}>{a.title}</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1000px) { .achievements-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 700px)  { .achievements-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 450px)  { .achievements-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
};

export default Achievements;