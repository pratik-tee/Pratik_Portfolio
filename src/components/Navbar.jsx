import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: scrolled
          ? "rgba(5,11,24,0.92)"
          : "rgba(5,11,24,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(56,189,248,0.1)"
          : "1px solid transparent",
        padding: "0 8%",
        height: "68px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <a href="#home" style={{ textDecoration: "none" }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.95rem",
              color: "#050b18",
            }}
          >
            PT
          </div>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Pratik<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </motion.div>
      </a>

      <ul
        className="desktop-nav"
        style={{
          display: "flex",
          listStyle: "none",
          gap: "6px",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <motion.a
              href={"#" + link.id}
              onClick={() => setActive(link.id)}
              whileHover={{ y: -1 }}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: active === link.id ? "var(--accent)" : "var(--text-secondary)",
                background: active === link.id ? "var(--accent-glow)" : "transparent",
                transition: "all 0.2s",
                textDecoration: "none",
                display: "block",
              }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
        <li>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: "8px",
              padding: "9px 20px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
              color: "#050b18",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 4px 15px rgba(56,189,248,0.3)",
            }}
          >
            Hire Me
          </motion.a>
        </li>
      </ul>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text-primary)",
          fontSize: "1.4rem",
          cursor: "pointer",
          display: "none",
          padding: "4px",
        }}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "68px",
              left: 0,
              right: 0,
              background: "rgba(5,11,24,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--glass-border)",
              padding: "20px 8%",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={"#" + link.id}
                onClick={() => {
                  setActive(link.id);
                  setMenuOpen(false);
                }}
                style={{
                  padding: "12px 16px",
                  borderRadius: "10px",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "10px",
                padding: "12px 24px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                color: "#050b18",
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                fontSize: "0.95rem",
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;