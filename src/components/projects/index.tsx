import useApp from "@/hooks/useApp";
import "./index.scss";
import { projectsList } from "./utils";

export default function Projects() {
  const app = useApp();
  return (
    <div className="projects">
      <div className="projects-content">
        <div className="title">Projects</div>
        <div className="subtitle">
          Discover the projects that have shaped my professional journey
        </div>
        <div className="list">
          {projectsList.map((project, index) => (
            <div className="item" key={index}>
              <img
                src={project.image_src}
                style={project.image_size ? { width: project.image_size } : {}}
                alt={project.label}
                onLoad={app.incrementImages}
              />
              <div>{project.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
