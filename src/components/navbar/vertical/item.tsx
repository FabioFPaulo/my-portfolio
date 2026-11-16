import type {IItem} from "../types";
import {Link} from "react-router";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {getNavLabel} from "../nav-translation";
import {scrollToSection} from "@/utils/navigation";

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

export default function NavabarItemComponent({
    item,
    isActive = false,
    onClick,
}: {
    item: IItem;
    isActive?: boolean;
    onClick?: () => void;
}) {
    const {t} = useTranslation();

    const handleClick = () => {
        scrollToSection(item.url);
        if (onClick) onClick();
    };

    return (
        <motion.li variants={itemVariants} className="list-none">
            <Link
                to={item.url}
                onClick={handleClick}
                className={`block py-3 px-4 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all capitalize cursor-pointer ${
                    isActive ? "sidebar-active-link" : ""
                }`}
            >
                {getNavLabel(item.label, t)}
            </Link>
        </motion.li>
    );
}
