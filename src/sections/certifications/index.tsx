import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import useApp from "@/hooks/useApp";
import Container from "@/components/container";
import Title from "@/components/title";
import DocumentDrawer from "@/components/drawer/document";
import {
  certificationsRepository,
  type ICertificationDocument,
} from "@/repositories";
import "./index.css";

export default function CertificationsSection() {
  const app = useApp();
  const certificationsList = certificationsRepository.getCertificationsData();
  const [selectedDocument, setSelectedDocument] =
    useState<ICertificationDocument | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start({ opacity: 1, y: 0 });
    } else {
      mainControls.start({ opacity: 0, y: 35 });
    }
  }, [isInView, mainControls, app.isLoading]);

  return (
    <Container.Section colorScheme="color-1" id="certifications">
      <Title.Primary
        title="Certifications"
        subtitle="Professional accreditations, scientific mentoring programs, and technical workshops"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={mainControls}
        transition={{ duration: 0.5 }}
        className="certifications-container"
      >
        {certificationsList.map((item) => (
          <div key={item.id} className="certification-card">
            {/* Header com Logo, Instituição, Categoria e Período */}
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
                  <time>{item.dateRange}</time>
                </div>
              </div>
            </div>

            {/* Título Principal e Programa */}
            <h3 className="certification-title">{item.title}</h3>
            <p className="certification-program">{item.program}</p>

            {/* Descrição Justificada */}
            <p className="certification-description">{item.description}</p>

            {/* Skills Pills */}
            {item.skills && item.skills.length > 0 && (
              <div className="certification-skills">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Edições & Certificados Disponíveis */}
            {item.documents && item.documents.length > 0 && (
              <div className="editions-section">
                <h5 className="editions-title">
                  <svg
                    className="w-4 h-4 text-sky-400"
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
                  <span>Certificados & Edições Concluídas</span>
                </h5>

                <div className="editions-list">
                  {item.documents.map((doc) => (
                    <div key={doc.id} className="edition-item">
                      <div className="edition-info">
                        <div className="edition-header">
                          <span className="edition-badge">{doc.edition}</span>
                          <span className="edition-date">
                            <svg
                              className="w-3 h-3 text-slate-400"
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
                            {doc.date}
                          </span>
                        </div>
                        <h6 className="edition-name">"{doc.title}"</h6>
                        {doc.description && (
                          <p className="edition-description">
                            {doc.description}
                          </p>
                        )}
                      </div>

                      <div className="edition-action">
                        <button
                          type="button"
                          onClick={() => setSelectedDocument(doc)}
                          className="btn-preview-cert"
                          title="Visualizar Certificado em PDF"
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span>Ver Certificado</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Drawer Vertical Reutilizável */}
      <DocumentDrawer
        isOpen={Boolean(selectedDocument)}
        onClose={() => setSelectedDocument(null)}
        title={selectedDocument?.title || "Certificado"}
        subtitle={
          selectedDocument
            ? `${selectedDocument.edition} • Instituto Politécnico de Bragança`
            : undefined
        }
        pdfUrl={selectedDocument?.pdfUrl || ""}
        downloadUrl={
          selectedDocument?.driveUrl || selectedDocument?.pdfUrl || ""
        }
      />
    </Container.Section>
  );
}
