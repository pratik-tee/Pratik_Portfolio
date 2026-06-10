import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { href: "https://github.com/pratik-tee", icon: <FaGithub size={18} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/pratik-tinwal-b7317b2b4/", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
    { href: "https://leetcode.com/u/pratik_tin/", icon: <SiLeetcode size={17} />, label: "LeetCode" },
    { href: "mailto:pratikteenwal8@gmail.com", icon: <FaEnvelope size={17} />, label: "Email" },
  ];

  return (
    <footer style={{
      background: "rgba(3, 7, 18, 0.95)",
      borderTop: "1px solid var(--glass-border)",
      padding: "60px 8% 28px",
      position: "relative",
      zIndex: 1,
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px",
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "10px",
                background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: "1rem", color: "#050b18",
              }}>PT</div>
              <span style={{ fontSize: "1.15rem", fontWeight: 700 }}>
                Pratik<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9rem", maxWidth: "280px", marginBottom: "20px" }}>
              Software Engineer & AI/ML Developer. Building intelligent systems, scalable software, and data-driven solutions.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  whileHover={{ y: -3, color: "var(--accent)" }}
                  style={{
                    width: 38, height: 38,
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--glass-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "color 0.2s, background 0.2s",
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "18px", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>Navigation</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "var(--accent)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "18px", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="mailto:pratikteenwal8@gmail.com" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>pratikteenwal8@gmail.com</a>
              <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>+91 6376142843</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Jaipur, India</span>
              <a href="/resume.pdf" target="_blank" rel="noreferrer"
                className="btn btn-outline"
                style={{ marginTop: "8px", padding: "9px 16px", fontSize: "0.82rem", width: "fit-content" }}>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--glass-border)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Pratik· All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "5px" }}>
            Built with <FaHeart style={{ color: "#f87171", fontSize: "0.8rem" }} /> using React & Framer Motion
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;