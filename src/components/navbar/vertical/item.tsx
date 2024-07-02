import { IItem } from "../types";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export default function NavabarItemComponent({ item }: { item: IItem }) {
  return (
    <motion.li variants={variants}>
      <Link smooth spy to={item.url} offset={-50} activeClass="active">
        {item.label}
      </Link>
    </motion.li>
  );
}
