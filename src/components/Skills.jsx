import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SKILLS = [
  {
    title: "Languages",
    icon: "⌨️",
    color: "#38bdf8",
    skills: ["Python", "C++", "C", "SQL", "JavaScript", "PHP"],
  },
  {
    title: "AI / ML",
    icon: "🤖",
    color: "#818cf8",
    skills: ["Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Data Analysis", "LLM Applications", "Prompt Engineering"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "#34d399",
    skills: ["Flask", "React", "HTML", "CSS", "Bootstrap", "REST APIs"],
  },
  {
    title: "Data & Databases",
    icon: "🗄️",
    color: "#fb923c",
    skills: ["MySQL", "SQLite", "Power BI", "Azure Data Lake", "Data Pipelines"],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "#f472b6",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Linux", "Render"],
  },
  {
    title: "Core CS",
    icon: "🎓",
    color: "#a3e635",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

const Skills = () => {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A full-stack toolkit spanning AI, data engineering, and modern web development.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }} className="skills-grid">
          {SKILLS.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: `${cat.color}40` }}
              className="glass-card"
              style={{ borderTop: `2px solid ${cat.color}30` }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: cat.color }}>{cat.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: `${cat.color}18`, color: cat.color, borderColor: `${cat.color}40` }}
                    className="pill"
                    style={{ cursor: "default" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
};

export default Skills;