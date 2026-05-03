import "./App.css";

function App() {
  const services = [
    "Cloud infrastructure",
    "Backend development",
    "Automation",
    "Full-stack apps",
    "AI workflows",
    "Reliable systems",
  ];

  const projects = [
    {
      name: "Chat Server & Client",
      description:
        "Java networking project with a multithreaded server, private messaging, heartbeat protocol, file transfer, SHA-256 validation, and JUnit tests.",
      stack: ["Java", "Networking", "JUnit", "SHA-256"],
      note: "Maximum grade",
    },
    {
      name: "Client On Board Platform",
      description:
        "Full-stack platform where clients upload project proposals and users can browse, manage, and assign projects.",
      stack: ["Full-Stack", "Backend", "Frontend", "GitLab"],
      note: "Private repository",
    },
    {
      name: "DevOps Portfolio",
      description:
        "React and Vite portfolio built to present my profile, projects, CV, and professional links in one place.",
      stack: ["React", "Vite", "GitHub Pages"],
      note: "Public repository coming soon",
    },
    {
      name: "AI Workflow Assistant",
      description:
        "AI workflow assistant concept connecting a full-stack interface with an LLM API to automate practical workflows.",
      stack: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
      note: "In progress",
    },
  ];

  return (
    <main>
      <nav className="nav">
        <p className="logo">AL</p>

        <div>
          <a href="#profile">About</a>
          <a href="#services">Skills</a>
          <a href="#projects">Work</a>
          <a href="mailto:stacylozovan@gmail.com">Contact</a>
        </div>
      </nav>

     <section className="hero">
  <div className="hero-copy">
    <p className="eyebrow">DevOps / Full-Stack / Automation</p>

  <h1>
  <span className="line">Cloud-ready</span>
  <span className="line">systems</span>
  <span className="sub">from code to deployment.</span>
</h1>

          <p className="intro">
            I build practical systems with a focus on backend logic, automation and
            cloud infrastructure — designed to be clear, reliable and ready for real use.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn-primary">
              View work
            </a>
            <a href="mailto:stacylozovan@gmail.com" className="btn-outline">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src="/profile.jpg" alt="Anastasiia Lozovan" />
          <div className="media-label">
            <span>Anastasiia Lozovan</span>
            <span>DevOps & Full-Stack Developer</span>
          </div>
        </div>
      </section>

      <section id="profile" className="about-section">
        <p className="section-small">About</p>

        <div className="about-grid">
          <h2>Practical engineering with a clean, reliable approach.</h2>

          <div className="about-text">
            <p>
              I focus on DevOps, backend development, cloud infrastructure and
              full-stack applications. I like building systems that feel clear,
              useful and maintainable — from the first line of code to deployment.
            </p>

            <div className="about-links">
              <a href="https://github.com/stacylozovan" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://gitlab.com/stacylozovan2610" target="_blank" rel="noreferrer">
                GitLab
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <p className="section-small">What I do</p>
          <h2>DEVOPS / BACKEND / AUTOMATION</h2>
        </div>

        <div className="services-list">
          {services.map((item, index) => (
            <div className="service-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>Reliable, structured and maintainable technical solutions.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p className="section-small">Selected work</p>
          <h2>PROJECTS</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="project-note">{project.note}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="section-small">Ready to talk?</p>
          <h2>LET’S BUILD SOMETHING PRACTICAL.</h2>
          <p>
            Open to junior opportunities, internships, DevOps projects and
            full-stack collaboration.
          </p>
        </div>

        <div className="footer-links">
          <a href="mailto:stacylozovan@gmail.com">Email</a>
          <a href="https://github.com/stacylozovan" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://gitlab.com/stacylozovan2610" target="_blank" rel="noreferrer">
            GitLab
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;