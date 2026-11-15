import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import useApp from "@/hooks/useApp";
import Container from "@/components/container";
import Title from "@/components/title";
import {
  publicationsRepository,
  type IPublicationItem,
} from "@/repositories";
import "./index.css";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

export default function PublicationsSection() {
  const app = useApp();
  const publicationsList = publicationsRepository.getPublicationsData();
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const handleCopyCitation = (item: IPublicationItem) => {
    const citation = `${item.authors.join(", ")} (${item.year}). ${item.title}. In ${item.venue}${
      item.publicationDetails ? `, ${item.publicationDetails}` : ""
    }.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <Container.Section colorScheme="color-1" id="publications">
      <Title.Primary
        title="Publications"
        subtitle="Peer-reviewed conference papers, symposium proceedings, and scientific contributions"
      />

      <motion.div
        ref={ref}
        variants={listVariants}
        initial="closed"
        animate={mainControls}
        className="publications-container"
      >
        {publicationsList.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="publication-card group"
          >
            {/* Header: Ano, Acrónimo, Status e Publisher */}
            <div className="publication-header">
              <div className="publication-badges-left">
                <span className="year-badge">{item.year}</span>
                {item.conferenceAcronym && (
                  <span className="acronym-badge">
                    {item.conferenceAcronym}
                  </span>
                )}
                {item.status && (
                  <span className="status-badge">{item.status}</span>
                )}
              </div>

              {item.publisher && (
                <div className="publisher-badge">
                  <svg
                    className="w-3.5 h-3.5 mr-1 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>{item.publisher}</span>
                </div>
              )}
            </div>

            {/* Título do Artigo */}
            <h3 className="publication-title">{item.title}</h3>

            {/* Linha de Autores com destaque */}
            <div className="publication-authors">
              <svg
                className="w-4 h-4 text-slate-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div className="authors-list">
                {item.authors.map((author, idx) => {
                  const isAuthorSelf =
                    author.includes("Paulo") || author.includes("Fábio");
                  return (
                    <span
                      key={idx}
                      className={
                        isAuthorSelf ? "author-self" : "author-coauthor"
                      }
                    >
                      {author}
                      {idx < item.authors.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Local de Publicação e Detalhes de Edição */}
            <div className="publication-venue-box">
              <div className="venue-line">
                <svg
                  className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="venue-name">{item.venue}</span>
              </div>
              {item.publicationDetails && (
                <div className="details-line">
                  <span className="details-label">Citation & Index:</span>
                  <span className="details-value">
                    {item.publicationDetails}
                  </span>
                </div>
              )}
            </div>

            {/* Abstract / Descrição Justificada */}
            <p className="publication-description">{item.description}</p>

            {/* Tópicos / Palavras-chave */}
            {item.topics && item.topics.length > 0 && (
              <div className="publication-topics">
                {item.topics.map((topic, idx) => (
                  <span key={idx} className="topic-pill">
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Ações: Copiar Citação & Link Oficial (se disponível) */}
            <div className="publication-actions">
              <button
                type="button"
                onClick={() => handleCopyCitation(item)}
                className="btn-copy-citation"
                title="Copiar citação formatada"
              >
                {copiedId === item.id ? (
                  <>
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-emerald-300 font-semibold">
                      Citação Copiada!
                    </span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    <span>Copiar Citação</span>
                  </>
                )}
              </button>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-venue-link"
                  title="Visitar Website Oficial"
                >
                  <span>Conferência / Website</span>
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
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container.Section>
  );
}
