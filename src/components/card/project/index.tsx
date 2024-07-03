import { CardProjectProps } from "./types";
import { motion } from "framer-motion";
import "./index.scss";
import useApp from "@/hooks/useApp";

const variants = {
  open: {
    scale: 1,
    //opacity: 1,
  },
  closed: {
    scale: 0,
    //opacity: 0,
  },
};

export default function CardProjectComponent(props: CardProjectProps) {
  const app = useApp();

  return (
    <motion.div variants={variants} className="card-project">
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
