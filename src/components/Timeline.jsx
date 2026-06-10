import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    role: "Data Science Intern",
    company: "Celebal Technologies",
    description:
      "Working on AI/ML solutions, data science workflows, and real-world machine learning applications.",
  },
  {
    year: "2025",
    role: "Data Analysis & Engineering Intern",
    company: "Coplur",
    description:
      "Processed 10,000+ records, optimized SQL queries, and built Power BI dashboards integrated with Azure Data Lake.",
  },
  {
    year: "2024",
    role: "Web Development Intern",
    company: "Kistechno Software",
    description:
      "Developed responsive web applications, implemented backend functionality, and managed Git workflows.",
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2>Experience Journey</h2>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;