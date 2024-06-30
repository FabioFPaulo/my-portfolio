import { CardExperienceProps } from "./types";
import "./index.scss";
import useApp from "@/hooks/useApp";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function CardExperienceComponent(props: CardExperienceProps) {
  const app = useApp();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start("visible");
    } else {
      mainControls.set("hidden");
    }
  }, [isInView, mainControls, app.isLoading]);
  return (
    <motion.div
      ref={ref}
      className="card-experience"
      variants={{
        hidden: { opacity: 0, y: 74 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1.25, delay: 0.25 }}
    >
      <div className="date">{props.date}</div>
      <div className="content">
        <div className="item-title">{props.title}</div>
        <div
          className="item-description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <div className="item-company">{props.company}</div>
      </div>
    </motion.div>
  );
}
