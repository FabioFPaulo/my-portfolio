import useApp from "@/hooks/useApp";
import "./index.scss";
import { projectsList } from "./utils";
import Cards from "../../components/card";
import Container from "@/components/container";
import Title from "@/components/title";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
};

export default function ProjectsSection() {
  const app = useApp();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start("open");
    } else {
      mainControls.start("closed");
    }
  }, [isInView, mainControls, app.isLoading]);

  return (
    <Container.Section colorScheme="color-2" id="projects">
      <Title.Primary
        title="Projects"
        subtitle="Discover the projects that have shaped my professional journey"
      />

      <motion.div
        ref={ref}
        variants={variants}
        initial="closed"
        animate={mainControls}
        className="list"
      >
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
      </motion.div>
    </Container.Section>
  );
}
