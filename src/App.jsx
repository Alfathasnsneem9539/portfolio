import './App.css'
import profilePhoto from './assets/myphoto.jpeg'

function App() {
  return (
    <>
      {/* =========================
          Navbar
      ========================= */}

      <header>
        <nav>
          <h1>Alfa Thasneem M</h1>

          <ul>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>


      <main>

        {/* =========================
            Home
        ========================= */}

        <section id="home">

          <div className="hero-content">

            <p className="hero-small-text">
              Hello, I'm
            </p>

            <h2>
              Alfa Thasneem M
            </h2>

            <h3>
              Aspiring Web Developer
            </h3>

            <p className="home-description">
              I am a Computer Science student passionate about creating
              websites and learning modern web technologies.
            </p>

            <a
              className="home-button"
              href="#projects"
            >
              View My Projects
            </a>

          </div>


          {/* Profile Photo */}

          <div className="hero-image-wrapper">

            <div className="hero-image-container">

              <img
                src={profilePhoto}
                alt="Alfa Thasneem"
                className="hero-profile-image"
              />

            </div>

          </div>


          {/* Violet Glow */}

          <div className="hero-glow"></div>

        </section>


        {/* =========================
            About
        ========================= */}

        <section id="about">

          <h2>About Me</h2>

          <p>
            I am a Computer Science student and an aspiring web developer.
            I enjoy creating websites and learning new technologies.
            I am currently developing my skills in HTML, CSS, JavaScript,
            React, and Node.js.
          </p>

          <p>
            I am interested in building useful and user-friendly web projects
            and continuously improving my programming and problem-solving skills.
          </p>

        </section>


        {/* =========================
            Education
        ========================= */}

        <section id="education">

          <h2>Education</h2>

          <div className="education-card">

            <h3>
              B.Sc. Computer Science
            </h3>

            <h4>
              KAHM Unity Women's College, Manjeri
            </h4>

            <p>
              FYUGP | 2024 - Present
            </p>

            <p>
              Currently pursuing a four-year undergraduate degree in Computer Science
              with an interest in web development and modern technologies.
            </p>

          </div>

        </section>


        {/* =========================
            Experience
        ========================= */}

        <section id="experience">

          <h2>Experience</h2>

          <div className="experience-card">

            <h3>
              Web Development Intern
            </h3>

            <h4>
              Perfect Professional Training Academy (PPTA)
            </h4>

            <p>
              April 2026
            </p>

            <p>
              Completed a 60-hour offline internship in Web Development.
              Gained practical experience in building websites and working
              with modern web development technologies.
            </p>

          </div>

        </section>


        {/* =========================
            Skills
        ========================= */}

        <section id="skills">

          <h2>Skills</h2>

          <div className="skills-container">

            <div className="skills-card">
              HTML
            </div>

            <div className="skills-card">
              CSS
            </div>

            <div className="skills-card">
              JavaScript
            </div>

            <div className="skills-card">
              React
            </div>

            <div className="skills-card">
              Node.js
            </div>

            <div className="skills-card">
              Git
            </div>

            <div className="skills-card">
              GitHub
            </div>

          </div>

        </section>


        {/* =========================
            Projects
        ========================= */}

        <section id="projects">

          <h2>Projects</h2>

          <div className="projects-container">


            {/* Veloura */}

            <div className="project-card">

              <h3>
                Veloura
              </h3>

              <p>
                Luxury perfume e-commerce website.
              </p>

              <a
                href="https://veloura-amber-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>

            </div>


            {/* IT Company */}

            <div className="project-card">

              <h3>
                IT Company
              </h3>

              <p>
                IT company website project.
              </p>

              <a
                href="http://it-company-red.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>

            </div>


            {/* Save My Biscuit */}

            <div className="project-card">

              <h3>
                Save My Biscuit
              </h3>

              <p>
                A fun web project based on saving a biscuit from tea.
              </p>

              <a
                href="https://prarthanajyothishnair.github.io/Save-My-Biscuit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>

            </div>


            {/* Nadan Adukkala */}

            <div className="project-card">

              <h3>
                Nadan Adukkala
              </h3>

              <p>
                A traditional Kerala food themed web project.
              </p>

              <a
                href="https://github.com/Alfathasnsneem9539/nadan-adukkala"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>

            </div>


            {/* CareSync */}

            <div className="project-card">

              <h3>
                CareSync
              </h3>

              <p>
                A medicine reminder web application.
              </p>

              <a
                href="https://alfathasneem9539.github.io/caresync/login.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            Contact
        ========================= */}

        <section id="contact">

          <h2>
            Contact
          </h2>

          <p>
            Let's connect and build something useful.
          </p>


          <div className="contact-links">

            <a href="mailto:alfathasneem95@gmail.com">
              Email
            </a>

            <a
              href="https://github.com/Alfathasnsneem9539"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alfa-thasneem-m-92237a372/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </section>

      </main>


      {/* =========================
          Footer
      ========================= */}

      <footer>

        <p>
          © 2026 Alfa Thasneem M. All rights reserved.
        </p>

      </footer>

    </>
  )
}

export default App