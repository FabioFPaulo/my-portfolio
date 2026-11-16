import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import type { IItem } from "../types";
import { getNavLabel } from "../nav-translation";

export default function NavbarHorizontalItem({
  item,
  onClick,
}: {
  item: IItem;
  onClick?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <motion.li
      whileHover={{ x: 2 }}
      transition={{ duration: 0.12 }}
      className="list-none"
    >
      <Link
        smooth
        spy
        to={item.url}
        offset={-70}
        duration={500}
        activeClass="is-active"
        onClick={onClick}
        className="dropdown-item-link"
      >
        <span className="dropdown-item-dot" aria-hidden="true" />
        <span className="dropdown-item-text">{getNavLabel(item.label, t)}</span>
      </Link>
    </motion.li>
  );
}
