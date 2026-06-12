export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Rabin Aryal</h1>
          <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with expertise in building modern web applications.
            I love learning new technologies and solving complex problems.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-list">
              <span className="skill">JavaScript</span>
              <span className="skill">React</span>
              <span className="skill">Next.js</span>
              <span className="skill">Node.js</span>
              <span className="skill">CSS</span>
              <span className="skill">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project goes here.</p>
              <a href="#">View Project →</a>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project goes here.</p>
              <a href="#">View Project →</a>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your third project goes here.</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out! I'd love to hear from you.</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">Email</a>
            <a href="https://github.com" className="contact-link">GitHub</a>
            <a href="https://linkedin.com" className="contact-link">LinkedIn</a>
            <a href="https://twitter.com" className="contact-link">Twitter</a>
          </div>
        </div>
      </section>
    </main>
  );
}
