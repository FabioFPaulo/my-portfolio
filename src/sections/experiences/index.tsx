import useApp from "@/hooks/useApp";
import Cards from "@/components/card";
import Container from "@/components/container";
import Title from "@/components/title";
import { experiencesRepository } from "@/repositories";
import { formatStartEndDate } from "./utils";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import "./index.css";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.08, staggerDirection: -1 },
  },
};

export default function Experiences() {
  const app = useApp();
  const experiencesList = experiencesRepository.getExperiencesData();

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
    <Container.Section colorScheme="color-1" id="experiences">
      <Title.Primary
        title="Work Experience"
        subtitle="Professional roles, research projects, and systems engineering contributions"
      />
      <div className="timeline-container">
        <motion.div
          ref={ref}
          variants={listVariants}
          initial="closed"
          animate={mainControls}
          className="timeline-list"
        >
          {experiencesList.map((item) => (
            <Cards.Experience
              key={item.id}
              date={formatStartEndDate(item.startDate, item.endDate)}
              title={item.role}
              project={item.project}
              company={item.company}
              location={item.location}
              website={item.website}
              isCurrent={item.isCurrent}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </motion.div>
      </div>
    </Container.Section>
  );
}
