import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { getNavLabel } from "../nav-translation";
import type { NavbarIslandItemProps } from "./types";

export default function NavbarIslandItem({ item }: NavbarIslandItemProps) {
  const { t } = useTranslation();

  return (
    <motion.li
      whileHover={{ x: 3 }}
      transition={{ duration: 0.15 }}
      className="list-none"
    >
      <Link
        smooth
        spy
        to={item.url}
        offset={-70}
        duration={500}
        activeClass="is-active"
        className="island-link"
        title={getNavLabel(item.label, t)}
      >
        <span className="island-dot" aria-hidden="true" />
        <span className="island-text">{getNavLabel(item.label, t)}</span>
      </Link>
    </motion.li>
  );
}
