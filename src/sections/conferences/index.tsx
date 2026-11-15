import useApp from "@/hooks/useApp";
import Container from "@/components/container";
import Title from "@/components/title";
import { conferencesRepository, IConferenceItem } from "@/repositories";
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion, AnimatePresence } from "framer-motion";
import { PDFViewer } from "@embedpdf/viewer-react";
import "./index.scss";

export default function ConferencesSection() {
  const app = useApp();
  const conferencesList = conferencesRepository.getConferencesData();
  const [selectedConference, setSelectedConference] =
    useState<IConferenceItem | null>(null);

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

  const togglePreview = (conference: IConferenceItem) => {
    if (selectedConference?.id === conference.id) {
      setSelectedConference(null);
    } else {
      setSelectedConference(conference);
    }
  };

  const isSplit = selectedConference !== null;

  return (
    <Container.Section colorScheme="color-2" id="conferences">
      <Title.Primary
        title="Conferences & Seminars"
        subtitle="International presentations, emerging technologies, and academic proceedings"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={mainControls}
        transition={{ duration: 0.5 }}
        className={`conferences-wrapper ${
          isSplit ? "is-split" : "is-single"
        }`}
      >
        {/* Coluna de Conferências */}
        <div
          className={`conference-card-col ${
            isSplit ? "col-split" : "w-full"
          }`}
        >
          {conferencesList.map((item) => {
            const isSelected = selectedConference?.id === item.id;

            return (
              <div
                key={item.id}
                className={`conference-card ${
                  isSelected ? "is-active" : ""
                }`}
              >
                {/* Header: Badge e Datas */}
                <div className="conference-header">
                  <span className="conference-badge">{item.role}</span>
                  <div className="conference-date">
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
                    <time>{`${item.startDate} – ${item.endDate}`}</time>
                  </div>
                </div>

                {/* Título da Conferência */}
                <h3 className="conference-title">
                  {item.conferenceAcronym}
                </h3>
                <div className="conference-acronym-badge">
                  <span>{item.conferenceName}</span>
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
                </div>

                {/* Box de Artigo Apresentado */}
                <div className="paper-box">
                  <span className="paper-label">Paper Presentation</span>
                  <p className="paper-title">"{item.paperTitle}"</p>
                </div>

                {/* Descrição Justificada */}
                {item.description && (
                  <p className="conference-description">
                    {item.description}
                  </p>
                )}

                {/* Tópicos */}
                {item.topics && item.topics.length > 0 && (
                  <div className="conference-topics">
                    {item.topics.map((topic, idx) => (
                      <span key={idx} className="topic-pill">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Ações: Ver PDF (Slide Preview) e Link Oficial */}
                <div className="conference-actions">
                  <button
                    type="button"
                    onClick={() => togglePreview(item)}
                    className={`btn-preview-toggle ${
                      isSelected ? "active" : ""
                    }`}
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
                    {isSelected
                      ? "Close PDF Preview"
                      : "View Document / Certificate"}
                  </button>

                  <a
                    href={item.officialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-official-link"
                  >
                    <span>Website</span>
                    <svg
                      className="w-3.5 h-3.5 opacity-70"
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Coluna da Direita: PDF Preview com Animação Slide */}
        <AnimatePresence>
          {selectedConference && (
            <motion.div
              key="pdf-preview-panel"
              initial={{ opacity: 0, x: 60, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              className="pdf-preview-col"
            >
              <div className="pdf-preview-panel">
                <div className="pdf-preview-topbar">
                  <div className="pdf-title-group">
                    <svg
                      className="pdf-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-semibold text-slate-100">
                      {selectedConference.conferenceAcronym} – Document
                      Preview
                    </span>
                  </div>

                  <div className="pdf-actions-group">
                    <a
                      href={selectedConference.certificatePdf}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-open-tab"
                    >
                      <span>Open in New Tab</span>
                      <svg
                        className="w-3 h-3"
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

                    <button
                      type="button"
                      onClick={() => setSelectedConference(null)}
                      className="btn-close-preview"
                      aria-label="Close Preview"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="pdf-viewer-container">
                  <PDFViewer
                    src={selectedConference.certificatePdf}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container.Section>
  );
}
