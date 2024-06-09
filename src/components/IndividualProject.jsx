import React from "react";
import projectImage from "../assets/a.png";
const IndividualProject = () => {
  return (
    <div>
      <div className="recent-work-card">
        <div className="card-image">
          <img src={projectImage} alt="project-image" />
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
  );
};

export default IndividualProject;
