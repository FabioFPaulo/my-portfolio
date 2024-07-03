import { CircularProgressbar } from "react-circular-progressbar";
import "./index.scss";
import { CardLanguageProps } from "./types";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function CardLanguageComponent(props: CardLanguageProps) {
  return (
    <motion.div variants={variants} className="card-language">
      <div className="progress">
        <CircularProgressbar value={props.percent} />
        {props.svg}
      </div>
      <div className="title">{props.title}</div>
    </motion.div>
  );
}
