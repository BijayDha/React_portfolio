import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <div className="wrapper-container">
        {/* <!---HERO SECTION-----> */}
        <HeroSection />
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
        <Skills />
        {/* <section id="skills">
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
        </section> */}
        {/* <!----------------------> */}
        {/* <!---------My Recent Work Section-------------> */}
        <Projects />

        {/* <!----------------------> */}
        {/* <!----About Me Section-------> */}

        <About />
        {/* <section className="about-me-section" id="about">
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
        </section> */}

        {/* <!---Get In Touch Section------> */}
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
