import { Link } from "react-router";
import { scrollToSection } from "@/utils/navigation";

export default function NavbarLogo() {
  return (
    <Link
      to="#home"
      onClick={() => scrollToSection("home")}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-extrabold text-sm tracking-wider">
          FP
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-base tracking-tight group-hover:text-sky-300 transition-colors">
          Fábio Paulo
        </span>
        <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Web Developer
        </span>
      </div>
    </Link>
  );
}
