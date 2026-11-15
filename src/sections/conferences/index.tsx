import useApp from "@/hooks/useApp";
import Container from "@/components/container";
import Title from "@/components/title";
import DocumentDrawer from "@/components/drawer/document";
import { conferencesRepository, IConferenceItem } from "@/repositories";
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
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
        className="conferences-container"
      >
        {conferencesList.map((item) => (
          <div key={item.id} className="conference-card">
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
            <h3 className="conference-title">{item.conferenceAcronym}</h3>
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
              <p className="conference-description">{item.description}</p>
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

            {/* Ações: Abrir Drawer Vertical e Link Oficial */}
            <div className="conference-actions">
              <button
                type="button"
                onClick={() => setSelectedConference(item)}
                className="btn-preview-toggle"
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
                <span>View Document / Certificate</span>
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
        ))}
      </motion.div>

      {/* Slide-over Drawer Vertical a nível de página */}
      <DocumentDrawer
        isOpen={Boolean(selectedConference)}
        onClose={() => setSelectedConference(null)}
        title={selectedConference?.conferenceAcronym || "Document Preview"}
        subtitle={
          selectedConference
            ? `${selectedConference.role} • ${selectedConference.conferenceName}`
            : undefined
        }
        pdfUrl={selectedConference?.certificatePdf || ""}
        downloadUrl={
          selectedConference?.driveUrl || selectedConference?.certificatePdf
        }
      />
    </Container.Section>
  );
}
