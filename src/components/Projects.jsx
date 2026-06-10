import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBrain, FaChartLine, FaShoppingCart } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PROJECTS = [
  {
    title: "ArvyaX",
    subtitle: "AI-Assisted Journal System",
    category: "AI / LLM",
    categoryColor: "#818cf8",
    icon: <FaBrain size={22} />,
    description:
      "An intelligent journaling platform powered by LLMs with mood analysis, reflection insights, personalized growth prompts, and self-improvement recommendations — containerized with Docker.",
    impact: "LLM-powered self-growth",
    features: ["LLM Reflection Engine", "Mood Analysis", "Personalized Prompts", "Growth Insights"],
    tech: ["Python", "Flask", "LLM", "Docker"],
    github: "https://github.com/pratik-tee",
    live: "#",
    featured: true,
  },
  {
    title: "Intelligent Expense Tracker",
    subtitle: "ML-Powered Finance App",
    category: "ML Application",
    categoryColor: "#38bdf8",
    icon: <FaChartLine size={22} />,
    description:
      "Production-grade Flask app with ML-powered automatic expense categorization (Random Forest) and anomaly detection (Logistic Regression). Multi-user auth, analytics dashboard, and Excel report export. Live on Render.",
    impact: "Deployed · Live on Render",
    features: ["Random Forest Classifier", "Anomaly Detection", "Multi-user Auth", "Excel Reports"],
    tech: ["Flask", "Pandas", "Scikit-Learn", "SQLite"],
    github: "https://github.com/pratik-tee/expense-tracker",
    live: "https://expense-tracker-eysz.onrender.com/login",
    featured: true,
  },
  {
    title: "Village Era Products",
    subtitle: "Artisan E-Commerce Platform",
    category: "Full Stack",
    categoryColor: "#34d399",
    icon: <FaShoppingCart size={22} />,
    description:
      "Full-stack e-commerce platform for local artisans — product catalog, shopping cart, order management, and user authentication built with PHP/MySQL backend.",
    impact: "End-to-end CRUD app",
    features: ["Product Catalog", "Cart System", "Order Management", "Auth System"],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/pratik-tee",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Real-world applications across AI, machine learning, and full-stack development.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }} className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, borderColor: `${project.categoryColor}40` }}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: `2px solid ${project.categoryColor}30`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {project.featured && (
                <div style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "50px",
                  background: "rgba(56,189,248,0.1)",
                  color: "var(--accent)",
                  border: "1px solid rgba(56,189,248,0.2)",
                  letterSpacing: "0.05em",
                }}>FEATURED</div>
              )}

              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "16px" }}>
                <div style={{
                  width: 46, height: 46,
                  borderRadius: "12px",
                  background: `${project.categoryColor}15`,
                  border: `1px solid ${project.categoryColor}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: project.categoryColor,
                  flexShrink: 0,
                }}>
                  {project.icon}
                </div>
                <div>
                  <span style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: project.categoryColor,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}>{project.category}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.2, marginTop: "2px" }}>{project.title}</h3>
                </div>
              </div>

              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "16px", flex: 1 }}>
                {project.description}
              </p>

              {/* Impact badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--glass-border)",
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                marginBottom: "16px",
                width: "fit-content",
              }}>
                ✦ {project.impact}
              </div>

              {/* Features */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {project.features.map(f => (
                  <span key={f} style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    border: "1px solid var(--glass-border)",
                  }}>{f}</span>
                ))}
              </div>

              {/* Tech */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                {project.tech.map(t => (
                  <span key={t} className="pill" style={{ fontSize: "0.78rem" }}>{t}</span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: "center", fontSize: "0.85rem", padding: "9px 16px" }}>
                  <FaGithub size={14} /> Code
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: "center", fontSize: "0.85rem", padding: "9px 16px" }}>
                    <FaExternalLinkAlt size={12} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1000px) { .projects-grid { grid-template-columns: 1fr !important; max-width: 600px; margin: 0 auto; } }
      `}</style>
    </div>
  );
};

export default Projects;