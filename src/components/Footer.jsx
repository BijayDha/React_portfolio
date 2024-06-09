import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex-container footer-container">
          <div>
            <h6>Links</h6>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
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
    </div>
  );
};

export default Footer;
