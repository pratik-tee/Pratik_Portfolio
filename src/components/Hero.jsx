import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImg from "../assets/profile.jpg";

const TITLES = [
  "Software Engineer",
  "AI/ML Developer",
  "Data Engineer",
  "Full-Stack Builder",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  const stats = [
    { value: "500+", label: "DSA Problems" },
    { value: "3+", label: "Internships" },
    { value: "9.4", label: "CGPA / 10" },
    { value: "Top 20%", label: "LeetCode" },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "100px 8% 60px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "50px",
            alignItems: "center",
          }}
        >

          {/* Status badge */}
          <motion.div variants={item}>
            <span className="badge badge-accent" style={{ marginBottom: "28px", display: "inline-flex" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
              Open to SDE, Data Engineering & AI/ML Roles
            </span>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={profileImg}
                alt="Pratik"
                style={{
                  width: "380px",
                  maxWidth: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 20px 50px rgba(59,130,246,0.3)",
                }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            Hi, I'm{" "}
            <span className="highlight">Pratik</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={item} style={{
            fontSize: "clamp(1.3rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "24px",
            height: "2.2em",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            <FaCode style={{ color: "var(--accent)", flexShrink: 0 }} />
            <span style={{ color: "var(--accent)" }}>{displayed}</span>
            <span style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "var(--accent)",
              borderRadius: "1px",
              animation: "blink 1s step-end infinite",
            }} />
          </motion.div>

          {/* Headline */}
          <motion.p variants={item} style={{
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            lineHeight: 1.8,
            marginBottom: "36px",
          }}>
            Computer Science undergrad (B.Tech '27) at SKIT Jaipur — building{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>production-grade AI systems</span>,{" "}
            scalable data pipelines, and full-stack applications. Currently interning at{" "}
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>Celebal Technologies</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects <FaArrowRight size={13} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload size={13} /> Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "60px" }}>
            {[
              { href: "https://github.com/pratik-tee", icon: <FaGithub size={22} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/pratik-tinwal-b7317b2b4/", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
              { href: "https://leetcode.com/u/pratik_tin/", icon: <SiLeetcode size={20} />, label: "LeetCode" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                whileHover={{ y: -3, scale: 1.1 }}
                style={{
                  width: 44, height: 44,
                  borderRadius: "12px",
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
              >
                {icon}
              </motion.a>
            ))}
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginLeft: "4px" }}>
              Open to opportunities
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              maxWidth: "700px",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.4)" }}
                style={{
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  textAlign: "center",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "4px",
                }}>{s.value}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
};

export default Hero;