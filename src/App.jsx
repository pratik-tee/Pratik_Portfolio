import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home" style={{ padding: 0 }}><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;