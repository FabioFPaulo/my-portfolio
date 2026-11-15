import { IItem } from "../types";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    x: -20,
    opacity: 0,
  },
};

export default function NavabarItemComponent({ item }: { item: IItem }) {
  return (
    <motion.li variants={itemVariants} className="list-none">
      <Link
        smooth
        spy
        to={item.url}
        offset={-70}
        activeClass="sidebar-active-link"
        className="block py-3 px-4 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all capitalize cursor-pointer"
      >
        {item.label}
      </Link>
    </motion.li>
  );
}
