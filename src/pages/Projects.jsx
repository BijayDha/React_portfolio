import projectImage from "../assets/a.png";
import IndividualProject from "../components/IndividualProject";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <center>
          <h2>My Recent Works</h2>
        </center>
        <div className="flex-container">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return <IndividualProject key={index} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
