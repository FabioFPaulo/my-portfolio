import { useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IProps } from "./types";
import { items } from "../utils";
import NavabarItemComponent from "./item";
import "./index.scss";

const variants = {
  closed: {
    x: -384,
  },
  open: {
    x: 0,
  },
};

const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function NavbarVertical(props: IProps) {
  const [isHidden, setIsHidden] = useState(!props.isOpen);
  const mainControls = useAnimation();

  const onAnimationComplete = useCallback(() => {
    if (isHidden) {
      props.toggle();
    }
  }, [isHidden, props]);

  const onClose = useCallback(() => {
    setIsHidden(true);
    mainControls.start("closed");
  }, [mainControls]);

  useEffect(() => {
    if (props.isOpen) {
      setIsHidden(false);
      mainControls.start("open");
    } else {
      mainControls.set("closed");
    }
  }, [mainControls, props.isOpen]);
  return (
    <motion.div id="vertical-nav" className={props.isOpen ? "" : "hidden"}>
      <div className="navbar-backdrop" onClick={onClose} />
      <motion.nav
        onAnimationComplete={onAnimationComplete}
        variants={variants}
        initial="closed"
        animate={mainControls}
      >
        <div className="sidebar-header">
          <button className="navbar-close" onClick={props.toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="sidebar-list">
          <motion.ul
            variants={variants2}
            initial="closed"
            animate={mainControls}
          >
            {items.map((item, index) => (
              <NavabarItemComponent item={item} key={index} />
            ))}
          </motion.ul>
        </div>
      </motion.nav>
    </motion.div>
  );
}
