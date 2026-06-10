import { FaDownload, FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="container">
      <h2 className="section-title">
        My <span className="highlight">Resume</span>
      </h2>

      <div className="resume-grid">
        <div className="card resume-card">
          <h3>My Resume, at a Glance</h3>

          <p>
            A concise snapshot of my education, internships, projects,
            technical skills, and achievements tailored for AI/ML,
            Data Engineering, and Full-Stack Development roles.
          </p>

          <div className="resume-stats">
            <div>
              <h4>9.4</h4>
              <span>CGPA</span>
            </div>

            <div>
              <h4>3+</h4>
              <span>Internships</span>
            </div>

            <div>
              <h4>500+</h4>
              <span>DSA</span>
            </div>
          </div>

          <a
            href="/Pratik Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaDownload />
            &nbsp; Download Resume
          </a>
        </div>

        <div className="card profiles-card">
          <h3>Coding Profiles</h3>

          <div className="profile-item">
            <FaLaptopCode className="profile-icon" />
            <div>
              <h4>LeetCode</h4>
              <p>@pratik_tin</p>
            </div>
          </div>

          <div className="profile-item">
            <FaGithub className="profile-icon" />
            <div>
              <h4>GitHub</h4>
              <p>@pratik-tee</p>
            </div>
          </div>

          <div className="profile-item">
            <FaLinkedin className="profile-icon" />
            <div>
              <h4>LinkedIn</h4>
              <p>Pratik</p>
            </div>
          </div>

          <div className="profile-links">
            <a
              href="https://leetcode.com/u/pratik_tin/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LeetCode
            </a>

            <a
              href="https://github.com/pratik-tee"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pratik-tinwal-b7317b2b4/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;