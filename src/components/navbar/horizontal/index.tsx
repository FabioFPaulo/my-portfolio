import { motion } from "framer-motion";
import "./index.css";
import { items } from "../utils";
import NavbarHorizontalItem from "./item";
import { IProps } from "./types";
import NavbarLogo from "../logo";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

export default function NavbarHorizontal(props: IProps) {
  return (
    <nav id="horizontal-nav">
      <div className="navbar-container">
        {/* Brand / Logo à esquerda */}
        <div className="navbar-brand">
          <NavbarLogo />
        </div>

        {/* Links centrais flutuantes (desktop) */}
        <motion.ul
          variants={listVariants}
          initial="closed"
          animate="open"
          className="horizontal-list"
        >
          {items.map((item, index) => (
            <NavbarHorizontalItem key={index} item={item} />
          ))}
        </motion.ul>

        {/* Ação rápida à direita e botão hambúrguer para mobile */}
        <div className="navbar-actions">
          <a
            href={`${import.meta.env.BASE_URL}files/cv.pdf`}
            target="_blank"
            rel="noreferrer"
            className="navbar-cta-btn hidden md:inline-flex"
          >
            <span>Currículo</span>
            <svg
              className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-y-0.5"
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

          <div className="burger">
            <button
              onClick={props.toggle}
              aria-label="Abrir menu"
              className="burger-btn"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
