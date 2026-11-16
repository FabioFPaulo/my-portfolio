import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import useApp from "@/hooks/useApp";
import { scrollToSection } from "@/utils/navigation";
import { componentData } from "./utils";
import "./index.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Banner() {
  const app = useApp();
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, app.isLoading]);

  const getFieldLabel = (label: string) => {
    switch (label.toLowerCase()) {
      case "date of birth":
        return t("banner.fields.dateOfBirth");
      case "address":
        return t("banner.fields.address");
      case "email":
        return t("banner.fields.email");
      case "phone":
        return t("banner.fields.phone");
      default:
        return label;
    }
  };

  // Ícones representativos para os metadados biográficos
  const getFieldIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "date of birth":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "address":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "email":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "phone":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <section ref={ref} className="hero-banner" id="home">
      {/* Imagem de Fundo Original Preservada com Qualidade e Destaque */}
      <img
        src={`${import.meta.env.BASE_URL}images/bg.jpg`}
        alt="Background"
        className="bg-image"
        onLoad={app.incrementImages}
      />

      {/* Conteúdo Principal */}
      <div className="hero-container">
        {/* Lado Esquerdo: Tipografia, Metadados e CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="hero-left-content"
        >
          {/* Badge de Disponibilidade & Função */}
          <motion.div variants={itemVariants} className="hero-badge-row">
            <div className="hero-status-pill">
              <span className="status-beacon">
                <span className="beacon-ping" />
                <span className="beacon-dot" />
              </span>
              <span className="status-label">{t("banner.available")}</span>
            </div>
            <span className="hero-role-tag">{t("banner.msc")}</span>
          </motion.div>

          {/* Título & Subtítulo */}
          <motion.div variants={itemVariants} className="hero-headings">
            <span className="hero-greeting">
              {t("banner.greeting")}
            </span>
            <h1 className="hero-title">{componentData.title}</h1>
            <p className="hero-subtitle">
              {t("banner.role")} &bull;{" "}
              <span className="hero-specialty">{t("banner.specialty")}</span>
            </p>
          </motion.div>

          {/* Divisor Gradiente de Precisão */}
          <motion.div variants={itemVariants} className="hero-divider" />

          {/* Cartões de Metadados Biográficos */}
          <motion.div variants={itemVariants} className="hero-fields-grid">
            {componentData.fields.map((field, index) => (
              <div key={index} className="hero-field-card group">
                <div className="field-icon-box">
                  {getFieldIcon(field.label)}
                </div>
                <div className="field-data">
                  <span className="field-label">{getFieldLabel(field.label)}</span>
                  <span className="field-value" title={field.value}>
                    {field.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Botões de Ação Hero */}
          <motion.div variants={itemVariants} className="hero-actions-row">
            <a
              href={`${import.meta.env.BASE_URL}files/cv.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-primary"
            >
              <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t("banner.downloadCv")}</span>
            </a>

            <Link
              to="#projects"
              onClick={() => scrollToSection("projects")}
              className="btn-hero-secondary"
            >
              <span>{t("banner.exploreProjects")}</span>
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Retrato com Halo Luminescente & Floating Badges */}
        <div className="hero-right-content">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92, y: 35 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
              },
            }}
            initial="hidden"
            animate={mainControls}
            className="hero-portrait-stage"
          >
            {/* Halo de Luz Difusa Posterior */}
            <div className="portrait-halo" aria-hidden="true" />

            {/* Imagem Pessoal com Suporte a Preload */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="portrait-image-wrapper"
            >
              <img
                alt={componentData.title}
                src={`${import.meta.env.BASE_URL}images/person_lg2.png`}
                className="portrait-image"
                onLoad={app.incrementImages}
              />
            </motion.div>

            {/* Floating Badge 1: Mestrado & Investigação */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
              className="floating-badge floating-badge-top"
            >
              <div className="badge-icon-disc bg-sky-500/20 text-sky-400 border border-sky-400/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="badge-text-box">
                <span className="badge-primary">{t("banner.badgeDeepLearning")}</span>
                <span className="badge-secondary">{t("banner.badgeWeb3D")}</span>
              </div>
            </motion.div>

            {/* Floating Badge 2: Produção Científica & Acreditações */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
              className="floating-badge floating-badge-bottom"
            >
              <div className="badge-icon-disc bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="badge-text-box">
                <span className="badge-primary">{t("banner.badgePapers")}</span>
                <span className="badge-secondary">{t("banner.badgeIndexing")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de Rolagem Suave */}
      <div className="hero-scroll-indicator">
        <Link
          to="about-me"
          smooth
          offset={-70}
          duration={500}
          className="scroll-cue-link group"
        >
          <span className="scroll-cue-text">{t("banner.scrollToExplore")}</span>
          <div className="scroll-cue-mouse">
            <span className="scroll-cue-dot" />
          </div>
        </Link>
      </div>
    </section>
  );
}
