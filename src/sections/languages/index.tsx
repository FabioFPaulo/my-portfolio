import Container from "@/components/container";
import Title from "@/components/title";
import Card from "@/components/card";
import { skillsRepository } from "@/repositories";
import { motion, useAnimation, useInView } from "framer-motion";
import useApp from "@/hooks/useApp";
import { useEffect, useRef } from "react";
import "./index.css";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

export default function LanguagesSection() {
  const app = useApp();
  const skillsList = skillsRepository.getSkillsData();

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
    <Container.Section id="languages" colorScheme="color-1">
      <Title.Primary
        title="Technical Skills"
        subtitle="Specialized engineering competencies, frameworks, and modern tools"
      />
      <motion.div
        ref={ref}
        variants={listVariants}
        initial="closed"
        animate={mainControls}
        className="skills-grid"
      >
        {skillsList.map((category) => (
          <Card.Language
            key={category.id}
            title={category.title}
            description={category.description}
            iconName={category.iconName}
            skills={category.skills}
          />
        ))}
      </motion.div>
    </Container.Section>
  );
}
