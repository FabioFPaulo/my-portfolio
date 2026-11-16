import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./index.css";

interface LanguageSelectorProps {
  className?: string;
  isCompact?: boolean;
}

export default function LanguageSelector({
  className = "",
  isCompact = false,
}: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("pt") ? "pt" : "en";

  const changeLanguage = (lang: "pt" | "en") => {
    if (currentLang === lang) return;
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  return (
    <div
      className={`language-selector-wrapper ${
        isCompact ? "is-compact" : ""
      } ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="language-selector-pill">
        {/* Ícone de Globo Minimalista */}
        <div className="globe-icon-box" aria-hidden="true">
          <svg
            className="w-3.5 h-3.5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Botão Português */}
        <button
          type="button"
          onClick={() => changeLanguage("pt")}
          className={`lang-option-btn ${currentLang === "pt" ? "active" : ""}`}
          aria-pressed={currentLang === "pt"}
          title="Mudar idioma para Português"
        >
          {currentLang === "pt" && (
            <motion.div
              layoutId="activeLangIndicator"
              className="active-lang-indicator"
              transition={{ type: "spring", stiffness: 450, damping: 35 }}
            />
          )}
          <span className="lang-code">PT</span>
        </button>

        <span className="lang-separator" aria-hidden="true">
          /
        </span>

        {/* Botão Inglês */}
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={`lang-option-btn ${currentLang === "en" ? "active" : ""}`}
          aria-pressed={currentLang === "en"}
          title="Switch language to English"
        >
          {currentLang === "en" && (
            <motion.div
              layoutId="activeLangIndicator"
              className="active-lang-indicator"
              transition={{ type: "spring", stiffness: 450, damping: 35 }}
            />
          )}
          <span className="lang-code">EN</span>
        </button>
      </div>
    </div>
  );
}
