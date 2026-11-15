import { useCallback, useEffect, useState } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import { IProps } from "./types";
import { items } from "../utils";
import NavabarItemComponent from "./item";
import NavbarLogo from "../logo";
import "./index.css";

const panelVariants: Variants = {
  closed: {
    x: "-100%",
    transition: { type: "tween", duration: 0.25 },
  },
  open: {
    x: 0,
    transition: { type: "tween", duration: 0.3 },
  },
};

const listVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
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
    <div id="vertical-nav" className={props.isOpen ? "" : "hidden"}>
      {/* Backdrop com desfoque escuro */}
      <div
        className="navbar-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Painel lateral deslizante */}
      <motion.nav
        onAnimationComplete={onAnimationComplete}
        variants={panelVariants}
        initial="closed"
        animate={mainControls}
        className="sidebar-panel"
      >
        <div className="sidebar-header">
          <NavbarLogo />
          <button
            className="navbar-close-btn"
            onClick={props.toggle}
            aria-label="Fechar menu"
          >
            <svg
              className="h-5 w-5"
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
              />
            </svg>
          </button>
        </div>

        <div className="sidebar-list">
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate={mainControls}
            className="space-y-1"
          >
            {items.map((item, index) => (
              <NavabarItemComponent item={item} key={index} />
            ))}
          </motion.ul>
        </div>

        {/* Rodapé do menu móvel com botão de CV */}
        <div className="sidebar-footer">
          <a
            href={`${import.meta.env.BASE_URL}files/cv.pdf`}
            target="_blank"
            rel="noreferrer"
            className="sidebar-cv-btn"
          >
            <span>Descarregar Currículo</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
