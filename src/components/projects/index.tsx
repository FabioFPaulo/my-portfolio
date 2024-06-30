import useApp from "@/hooks/useApp";
import "./index.scss";
import { projectsList } from "./utils";
import Cards from "../cards";

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
            <Cards.Project
              key={index}
              onLoad={app.incrementImages}
              imageSrc={project.image_src}
              imageSize={project.image_size}
              label={project.label}
              position={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
