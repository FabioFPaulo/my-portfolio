import Container from "@/components/container";
import Title from "@/components/title";
import "./index.scss";
import Card from "@/components/card";
import { listLanguages } from "./utils";
import { motion, useAnimation, useInView } from "framer-motion";
import useApp from "@/hooks/useApp";
import { useEffect, useRef } from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function LanguagesSection() {
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
    <Container.Section id="languages" colorScheme="color-1">
      <Title.Primary
        title="Most Used Languages"
        subtitle="Uncover the programming languages that i frequently use"
      />
      <motion.div
        ref={ref}
        variants={variants}
        initial="closed"
        animate={mainControls}
        className="list"
      >
        {listLanguages.map((e, index) => (
          <Card.Language
            svg={e.svg}
            percent={e.percent}
            title={e.title}
            key={index}
          />
        ))}
      </motion.div>
    </Container.Section>
  );
}
