import { CardAcademicProps } from "./types";
import "./index.scss";
import useApp from "@/hooks/useApp";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
export default function CardAcademicComponent(props: CardAcademicProps) {
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
    <motion.a
      data-testid="card-academic-container"
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: props.leftAnimation ? 74 * -1 : 74 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3 }}
      href={props.href}
      target="_blank"
      className="card-academic-container"
      role="link"
    >
      <img src={props.src} data-testid="card-academic-img" />
      <div className="card-academic-title" data-testid="card-academic-title">
        {props.title}
      </div>
      <div className="card-academic-date" data-testid="card-academic-date">
        {props.dateString}
      </div>
    </motion.a>
  );
}
