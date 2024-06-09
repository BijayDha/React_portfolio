import React from "react";

const Delete = () => {
  return (
    <div>
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

      {/* <footer>
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
      </footer> */}

      {/* <!----Go to Top Section------> */}
      {/* <div className="go-to-top">
        <a href="#home">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div> */}
      {/* <!----------------> */}
    </div>
  );
};

export default Delete;
