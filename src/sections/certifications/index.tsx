import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import useApp from "@/hooks/useApp";
import Container from "@/components/container";
import Title from "@/components/title";
import DocumentDrawer from "@/components/drawer/document";
import {
  certificationsRepository,
  type ICertificationItem,
} from "@/repositories";
import "./index.css";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

const cardVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
  closed: {
    opacity: 0,
    y: 35,
  },
};

export default function CertificationsSection() {
  const app = useApp();
  const certificationsList = certificationsRepository.getCertificationsData();
  const [selectedCertification, setSelectedCertification] =
    useState<ICertificationItem | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start("open");
    } else {
      mainControls.start("closed");
    }
  }, [isInView, mainControls, app.isLoading]);

  return (
    <Container.Section colorScheme="color-1" id="certifications">
      <Title.Primary
        title="Certifications"
        subtitle="Professional accreditations, scientific mentoring programs, and technical workshop certificates"
      />

      <motion.div
        ref={ref}
        variants={listVariants}
        initial="closed"
        animate={mainControls}
        className="certifications-container"
      >
        {certificationsList.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="certification-card group"
          >
            {/* Header: Instituição, Logo, Categoria e Data */}
            <div className="certification-header">
              <div className="institution-info">
                {item.logo && (
                  <div className="institution-logo-wrapper">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="institution-logo"
                    />
                  </div>
                )}
                <div>
                  <h4 className="institution-name">{item.institution}</h4>
                  <div className="institution-meta">
                    <span className="location-tag">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location}
                    </span>
                    <span className="meta-separator">•</span>
                    <span className="mode-badge">{item.mode}</span>
                  </div>
                </div>
              </div>

              <div className="certification-badges">
                <span className="category-badge">{item.badge}</span>
                <div className="date-badge">
                  <svg
                    className="w-3.5 h-3.5 mr-1.5 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time>{item.date}</time>
                </div>
              </div>
            </div>

            {/* Título da Certificação & Subtítulo */}
            <h3 className="certification-title">{item.title}</h3>
            <div className="certification-program-line">
              <span className="edition-badge">{item.edition}</span>
              <span className="program-text">{item.program}</span>
            </div>

            {/* Descrição Justificada */}
            <p className="certification-description">{item.description}</p>

            {/* Tags de Competências */}
            {item.skills && item.skills.length > 0 && (
              <div className="certification-skills">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Ações: Ver Certificado (Drawer) & Link Google Drive */}
            <div className="certification-actions">
              <button
                type="button"
                onClick={() => setSelectedCertification(item)}
                className="btn-preview-cert"
                title="Visualizar Certificado em PDF no visualizador integrado"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Visualizar Certificado</span>
              </button>

              {item.driveUrl && (
                <a
                  href={item.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-drive-link"
                  title="Abrir ficheiro no Google Drive"
                >
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5M9.73 15L6.3 21h13.12l3.43-6M22.85 15l-6.57-11.5H9.42l6.56 11.5" />
                  </svg>
                  <span>Google Drive</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-70 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Slide-over Drawer Vertical com react-pdf */}
      <DocumentDrawer
        isOpen={Boolean(selectedCertification)}
        onClose={() => setSelectedCertification(null)}
        title={selectedCertification?.title || "Certificado"}
        subtitle={
          selectedCertification
            ? `${selectedCertification.edition} • ${selectedCertification.institution}`
            : undefined
        }
        pdfUrl={selectedCertification?.pdfUrl || ""}
        downloadUrl={
          selectedCertification?.driveUrl || selectedCertification?.pdfUrl || ""
        }
      />
    </Container.Section>
  );
}
