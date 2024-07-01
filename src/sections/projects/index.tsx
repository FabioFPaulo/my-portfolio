import useApp from "@/hooks/useApp";
import "./index.scss";
import { projectsList } from "./utils";
import Cards from "../../components/cards";
import Containers from "@/components/containers";
import Title from "@/components/title";

export default function Projects() {
  const app = useApp();
  return (
    <Containers.Section colorScheme="color-1" id="projects">
      <Title.Primary
        title="Projects"
        subtitle="Discover the projects that have shaped my professional journey"
      />

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
    </Containers.Section>
  );
}
