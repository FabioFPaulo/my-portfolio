import useApp from "@/hooks/useApp";
import Cards from "../../components/card";
import Container from "../../components/container";
import Title from "../../components/title";
import "./index.scss";
import { experiencesData, formatStartEndDate } from "./utils";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export default function Experiences() {
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
    <Container.Section colorScheme="color-1" id="experiences">
      <Title.Primary
        title="Experiences"
        subtitle="Discover the experiences that have shaped my professional journey"
      />
      <motion.div
        ref={ref}
        variants={variants}
        initial="closed"
        animate={mainControls}
        className="list"
      >
        {experiencesData.map((item, index) => (
          <Cards.Experience
            key={index}
            date={formatStartEndDate(item.start_at, item.end_at)}
            title={item.title}
            company={item.company}
            description={item.description}
          />
        ))}
      </motion.div>
    </Container.Section>
  );
}
