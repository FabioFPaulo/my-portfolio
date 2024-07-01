import useApp from "@/hooks/useApp";
import { CardProjectProps } from "./types";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import "./index.scss";
const DURATION = 0.1;

export default function CardProjectComponent(props: CardProjectProps) {
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
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: DURATION,
        delay: props.position * DURATION,
        ease: "easeOut",
      }}
      className="card-project"
    >
      <img
        src={props.imageSrc}
        style={props.imageSize ? { width: props.imageSize } : {}}
        alt={props.label}
        onLoad={app.incrementImages}
      />
      <div>{props.label}</div>
    </motion.div>
  );
}
