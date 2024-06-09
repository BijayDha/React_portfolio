import "./App.css";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
></link>;

function App() {
  return (
    <>
      {/* <!---------DARK MODE TOGGLE------------> */}
      <label for="dark-mode" className="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />
      {/* <!---------------------> */}
      <header>
        {/* <!---Navbar----> */}
        <nav>
          <div className="flex-container navbar">
            <div className="flex-container logo-container">
              <div className="logo-name">Dented</div>
              <div className="line">|</div>
              <div>Soft. Engineer</div>
            </div>
            <ul className="flex-container nav-items">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* <!--------Hamburger Menu-----------> */}
            <label for="hamburger-menu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburger-menu" />
            <div className="side-menu">
              <ul className="flex-container side-nav-items">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-------------------> */}
          </div>
        </nav>
      </header>
      {/* <!-------------------------------> */}
      <div className="wrapper-container">
        {/* <!---HERO SECTION-----> */}
        <section id="home">
          <div className="grid-container hero-section">
            <div className="intro-text">
              <p>
                Hi I am <b>Dented Code</b>
              </p>
              <p>
                <b>Software Engineer</b>
              </p>
              <br />
              <p>I love Coding!</p>
              <a href="./assets/profile-image.png" download>
                <button className="download-btn">
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
            <div className="image-grid-item">
              <img src="./assets/profile-image.png" alt="profile-image" />
            </div>
          </div>
        </section>
        {/* <!-------------------------------> */}
        {/* <!---Summary Section------> */}
        <section>
          <div className="flex-container summary-container">
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>IT</span>
                <p>Graduate</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div className="flex-container border-horizontal">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>5+ Projects</span>
                <p>Completed</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>1 Year</span>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-------------------------------> */}
        {/* <!-----Skills Section------> */}
        <section id="skills">
          <center>
            <h2>Skills</h2>
          </center>
          <div className="flex-container skills-container">
            <div>
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div>
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="fa-brands fa-js"></i>
              <p>JS</p>
            </div>
            <div>
              <i className="fa-brands fa-square-github"></i>
              <p>Github</p>
            </div>
            <div>
              <i className="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
          </div>
        </section>
        {/* <!----------------------> */}
        {/* <!---------My Recent Work Section-------------> */}
        <section id="projects">
          <center>
            <h2>My Recent Works</h2>
          </center>
          <div className="flex-container">
            {/* <!---Recent Work Card 1-----> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-image.png" alt="project-image" />
              </div>
              <div className="card-icons">
                <a>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a>
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Personal Portfolio</h4>
              <p>HTML | CSS</p>
            </div>
            {/* <!---Recent Work Card 2-----> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-image.png" alt="project-image" />
              </div>
              <div className="card-icons">
                <a>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a>
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Personal Portfolio</h4>
              <p>HTML | CSS</p>
            </div>
            {/* <!---Recent Work Card 3-----> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-image.png" alt="project-image" />
              </div>
              <div className="card-icons">
                <a>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a>
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Personal Portfolio</h4>
              <p>HTML | CSS</p>
            </div>
            {/* <!---Recent Work Card 4-----> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-image.png" alt="project-image" />
              </div>
              <div className="card-icons">
                <a>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a>
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Personal Portfolio</h4>
              <p>HTML | CSS</p>
            </div>
            {/* <!---Recent Work Card 5-----> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-image.png" alt="project-image" />
              </div>
              <div className="card-icons">
                <a>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a>
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Personal Portfolio</h4>
              <p>HTML | CSS</p>
            </div>
            {/* <!---Recent Work Card 6-----> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-image.png" alt="project-image" />
              </div>
              <div className="card-icons">
                <a>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a>
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Personal Portfolio</h4>
              <p>HTML | CSS</p>
            </div>
          </div>
        </section>
        {/* <!----------------------> */}
        {/* <!----About Me Section-------> */}
        <section className="about-me-section" id="about">
          <center>
            <h2>About Me</h2>
          </center>
          <div className="flex-container about-me-container">
            <div>
              <img src="./assets/profile-image.png" alt="profile-image" />
            </div>
            <div className="bio-container">
              <h4>Dented Code</h4>
              <p>
                Narendra Sunar is a seasoned full-stack engineer with expertise
                in React, Ruby on Rails, and Node.js, spanning over 6 years in
                software development. Passionate about impactful web
                applications, he mentors junior developers with enthusiasm,
                finding it a rewarding investment of his time. Narendra's
                teaching extends to HTML and CSS basics, where he employs
                interactive methods like hands-on coding and PowerPoint slides.
                Recently, he's delved into CSS animations and integrating tools
                like Intro.js into React applications. With a knack for detail,
                Narendra refines his coding style with features like Flow for
                type checking, demonstrating a commitment to robust and
                efficient development practices.
              </p>
            </div>
          </div>
        </section>
        {/* <!---Get In Touch Section------> */}
        <section id="contact">
          <center>Get In Touch</center>
          <div className="flex-container get-in-touch-container">
            <a>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a>
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:0413705873">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </div>
          <center>OR</center>
          <div className="send-email-container">
            <a href="mailto:myemail@gmail.com">
              <button className="download-btn">
                myemail@gmail.com <i className="fa-solid fa-paper-plane"></i>
              </button>
            </a>
          </div>
        </section>
      </div>
      <footer>
        <div className="flex-container footer-container">
          <div>
            <h6>Links</h6>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Social Links</h6>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <center>&copy; Copy right all reserved. Made by Me</center>
      </footer>
      {/* <!----Go to Top Section------> */}
      <div className="go-to-top">
        <a href="#home">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
      {/* <!----------------> */}
    </>
  );
}

export default App;
