import { motion } from "framer-motion";
import { items } from "../utils";
import NavbarIslandItem from "./item";
import type { NavbarIslandProps } from "./types";
import "./index.css";

const islandVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

export default function NavbarIsland({ className = "" }: NavbarIslandProps) {
  return (
    <aside
      id="vertical-island-nav"
      aria-label="Section navigation"
      className={className}
    >
      <motion.div
        variants={islandVariants}
        initial="hidden"
        animate="visible"
        className="island-wrapper"
      >
        <ul className="island-list">
          {items.map((item, index) => (
            <NavbarIslandItem key={item.url} item={item} index={index} />
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}
