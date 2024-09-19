import "../App.css";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div>
      <h2>PROJECTS</h2>
      <div className="projects">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </div>
  );
};

export default Projects;
