import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { IItem } from "../types";

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

export default function NavbarHorizontalItem({
  item,
  haveSeparator,
}: {
  item: IItem;
  haveSeparator: boolean;
}) {
  return (
    <React.Fragment>
      <motion.li variants={variants}>
        <Link smooth spy to={item.url} offset={-60} activeClass="active">
          {item.label}
        </Link>
      </motion.li>
      {haveSeparator && (
        <li className="separator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
      )}
    </React.Fragment>
  );
}
