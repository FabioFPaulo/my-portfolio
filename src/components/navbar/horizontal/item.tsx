import { motion } from "framer-motion";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import type { IItem } from "../types";
import { getNavLabel } from "../nav-translation";
import { scrollToSection } from "@/utils/navigation";

export default function NavbarHorizontalItem({
  item,
  isActive = false,
  onClick,
}: {
  item: IItem;
  isActive?: boolean;
  onClick?: () => void;
}) {
  const { t } = useTranslation();

  const handleClick = () => {
    scrollToSection(item.url);
    if (onClick) onClick();
  };

  return (
    <motion.li
      whileHover={{ x: 2 }}
      transition={{ duration: 0.12 }}
      className="list-none"
    >
      <Link
        to={item.url}
        onClick={handleClick}
        className={`dropdown-item-link ${isActive ? "is-active" : ""}`}
      >
        <span className="dropdown-item-dot" aria-hidden="true" />
        <span className="dropdown-item-text">{getNavLabel(item.label, t)}</span>
      </Link>
    </motion.li>
  );
}
