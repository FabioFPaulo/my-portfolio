import {motion} from "framer-motion";
import {Link} from "react-scroll";
import type {IItem} from "../types";

export default function NavbarHorizontalItem({
                                                 item,
                                             }: {
    item: IItem;
    haveSeparator?: boolean;
}) {
    return (
        <motion.li
            whileHover={{y: -1}}
            transition={{duration: 0.15}}
            className="list-none"
        >
            <Link
                smooth
                spy
                to={item.url}
                offset={-70}
                activeClass="active-nav-link"
                className="px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 rounded-full capitalize cursor-pointer block hover:bg-slate-800/60 whitespace-nowrap"
            >
                {item.label}
            </Link>
        </motion.li>
    );
}
