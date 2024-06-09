import profileImage from "../assets/my.png";

const HeroSection = () => {
  return (
    <div>
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
            <a href="./assets/my.png" download>
              <button className="download-btn">
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="image-grid-item">
            <img src={profileImage} alt="profile-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
