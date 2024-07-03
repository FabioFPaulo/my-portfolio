import "./index.scss";
import { motion } from "framer-motion";
import { CardExperienceProps } from "./types";

const variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 74,
  },
};

export default function CardExperienceComponent(props: CardExperienceProps) {
  return (
    <motion.div className="card-experience" variants={variants}>
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
