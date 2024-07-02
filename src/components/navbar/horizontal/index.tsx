import { motion } from "framer-motion";
import "./index.scss";
import { items } from "../utils";
import NavbarHorizontalItem from "./item";
import { IProps } from "./types";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function NavbarHorizontal(props: IProps) {
  return (
    <nav id="horizontal-nav" className="">
      <div className="burger">
        <button onClick={props.toggle}>
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <motion.ul
        variants={variants}
        initial="closed"
        animate="open"
        className="horizontal-list"
      >
        {items.map((item, index) => (
          <NavbarHorizontalItem
            key={index}
            item={item}
            haveSeparator={index + 1 !== items.length}
          />
        ))}
      </motion.ul>
    </nav>
  );
}
