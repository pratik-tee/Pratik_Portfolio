import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaCircle } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const EXPERIENCES = [
  {
    company: "Celebal Technologies",
    role: "Data Science Intern",
    duration: "May 2026 – Present",
    type: "Current",
    color: "#38bdf8",
    points: [
      "Building end-to-end AI/ML solutions applied to real business problems",
      "Developing and evaluating machine learning models with production-ready pipelines",
      "Collaborating on data-driven workflows involving feature engineering & model deployment",
    ],
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Data Science"],
  },
  {
    company: "Coplur",
    role: "Data Analysis & Engineering Intern",
    duration: "June 2025 – July 2025",
    type: "Past",
    color: "#818cf8",
    points: [
      "Processed & cleaned 10,000+ records using Pandas & NumPy, reducing inconsistencies by 35%",
      "Optimized SQL queries achieving 20% faster data retrieval",
      "Built Power BI dashboards integrated with Azure Data Lake for stakeholder reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Azure Data Lake"],
  },
  {
    company: "Kistechno Software",
    role: "Web Development Intern",
    duration: "June 2024 – July 2024",
    type: "Past",
    color: "#34d399",
    points: [
      "Developed 8+ responsive web pages using HTML, CSS, Bootstrap",
      "Implemented PHP backend logic for form handling and dynamic content",
      "Collaborated using Git workflows in a team environment",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "Git"],
  },
];

const Experience = () => {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">3 internships across AI/ML, data engineering, and full-stack development.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, #38bdf8, #818cf8, #34d399)",
            opacity: 0.3,
            borderRadius: "1px",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingLeft: "60px" }}>
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: "absolute",
                  left: "-48px",
                  top: "28px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: exp.color,
                  border: `3px solid var(--bg-primary)`,
                  boxShadow: `0 0 12px ${exp.color}60`,
                }} />

                <motion.div
                  whileHover={{ borderColor: `${exp.color}40`, x: 4 }}
                  className="glass-card"
                  style={{ borderLeft: `3px solid ${exp.color}` }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "16px",
                  }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: exp.color }}>{exp.role}</h3>
                        {exp.type === "Current" && (
                          <span className="badge badge-accent" style={{ fontSize: "0.72rem" }}>
                            <FaCircle size={6} /> Live
                          </span>
                        )}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        <FaBuilding size={12} />
                        <span style={{ fontWeight: 600 }}>{exp.company}</span>
                      </div>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      background: "rgba(255,255,255,0.03)",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      border: "1px solid var(--glass-border)",
                    }}>
                      <FaCalendarAlt size={11} />
                      {exp.duration}
                    </div>
                  </div>

                  <ul style={{ paddingLeft: "18px", marginBottom: "18px" }}>
                    {exp.points.map((pt, i) => (
                      <li key={i} style={{
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        marginBottom: "8px",
                        fontSize: "0.95rem",
                      }}>{pt}</li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tech.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;