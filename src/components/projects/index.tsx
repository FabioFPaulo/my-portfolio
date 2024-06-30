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
              <img
                src={project.image_src}
                style={project.image_size ? { width: project.image_size } : {}}
                alt={project.label}
              />
              <div>{project.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
