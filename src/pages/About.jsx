import profileImage from "../assets/my.png";

const About = () => {
  return (
    <div>
      <section className="about-me-section" id="about">
        <center>
          <h2>About Me</h2>
        </center>
        <div className="flex-container about-me-container">
          <div>
            <img src={profileImage} alt="profile-image" />
          </div>
          <div className="bio-container">
            <h4>Dented Code</h4>
            <p>
              Bijay Dhakal is a seasoned full-stack engineer with expertise in
              React, Node.js, Express.js, and MongoDB spanning over 2 years in
              IT Industry. Passionate about impactful web applications, he
              mentors junior developers with enthusiasm, finding it a rewarding
              investment of his time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
