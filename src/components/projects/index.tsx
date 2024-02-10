import "./index.scss";
import { projectsList } from "./utils";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-content">
        <div className="title">Projects</div>
        <div className="subtitle">
          Discover the projects that have shaped my professional journey
        </div>
        <div className="list">
          {projectsList.map((project) => (
            <div className="item">
              <img src={project.image_src} alt={project.label} />
              <div>{project.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
