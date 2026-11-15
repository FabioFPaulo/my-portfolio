import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAnimation, useInView, motion } from "framer-motion";
import useApp from "@/hooks/useApp";
import Cards from "@/components/card";
import Container from "@/components/container";
import Title from "@/components/title";
import { projectsRepository } from "@/repositories";
import "./index.css";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

export default function Projects() {
  const { t } = useTranslation();
  const app = useApp();
  const projectsList = projectsRepository.getProjectsData();

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
        title={t("sections.projects.title")}
        subtitle={t("sections.projects.subtitle")}
      />
      <motion.div
        ref={ref}
        variants={listVariants}
        initial="closed"
        animate={mainControls}
        className="projects-grid"
      >
        {projectsList.map((project) => (
          <Cards.Project
            key={project.id}
            title={project.title}
            category={project.category}
            focus={project.focus}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            linkType={project.linkType}
          />
        ))}
      </motion.div>
    </Container.Section>
  );
}
