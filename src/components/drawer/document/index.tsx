import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { IDocumentDrawerProps } from "./types";
import "./index.scss";

// Configuração resiliente do worker estático do pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

export default function DocumentDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  pdfUrl,
  downloadUrl,
}: IDocumentDrawerProps) {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  // Bloqueio do scroll do body e escuta da tecla Escape
  useEffect(() => {
    if (!isOpen) {
      setPageNumber(1);
      setScale(1.0);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.15, 2.0));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.15, 0.6));
  const handleResetZoom = () => setScale(1.0);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Escuro Translúcido com Fade */}
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="document-drawer-backdrop"
            aria-hidden="true"
          />

          {/* Painel Lateral Vertical com Slide Horizontal da Direita */}
          <motion.div
            key="drawer-panel"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="document-drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            {/* Cabeçalho do Drawer com Controlos do react-pdf */}
            <div className="drawer-header">
              <div className="drawer-title-group">
                <div className="drawer-icon-box">
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
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="drawer-title-text">
                  <span className="drawer-title">{title}</span>
                  {subtitle && (
                    <span className="drawer-subtitle">{subtitle}</span>
                  )}
                </div>
              </div>

              <div className="drawer-actions">
                {/* Controlos de Zoom */}
                <div className="hidden sm:flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-0.5 mr-1">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="px-1.5 py-0.5 text-[10px] font-medium text-slate-300 hover:text-white rounded hover:bg-slate-800"
                    title="Reset Zoom"
                  >
                    {Math.round(scale * 100)}%
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>

                {/* Abrir Link Externo / Google Drive */}
                <a
                  href={downloadUrl || pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-open-external"
                  title="Open original document in new tab"
                >
                  <span>Open in Tab</span>
                  <svg
                    className="w-3.5 h-3.5"
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

                {/* Botão Fechar */}
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-close-drawer"
                  aria-label="Close Document Preview"
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

            {/* Paginação se o documento tiver mais de 1 página */}
            {numPages > 1 && (
              <div className="px-6 py-2 bg-slate-950/70 border-b border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>
                  Page {pageNumber} of {numPages}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
                    className="px-2 py-0.5 rounded bg-slate-800 disabled:opacity-40 text-white"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={() =>
                      setPageNumber((p) => Math.min(p + 1, numPages))
                    }
                    className="px-2 py-0.5 rounded bg-slate-800 disabled:opacity-40 text-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Corpo do Drawer: Canvas renderizado com react-pdf */}
            <div className="drawer-body flex justify-center items-start overflow-auto p-4 sm:p-6 bg-slate-950">
              <Document
                file={pdfUrl}
                onLoadSuccess={({ numPages: total }) => setNumPages(total)}
                loading={
                  <div className="flex flex-col items-center justify-center p-16 text-slate-400">
                    <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin mb-3" />
                    <span className="text-xs font-medium">
                      Loading certificate...
                    </span>
                  </div>
                }
                error={
                  <div className="flex flex-col items-center justify-center p-16 text-center text-slate-400">
                    <p className="text-sm text-slate-300 mb-4 font-medium">
                      Unable to load PDF preview in canvas.
                    </p>
                    <a
                      href={downloadUrl || pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-semibold shadow-lg shadow-sky-500/20"
                    >
                      Open Document Directly
                    </a>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-2xl shadow-black/80 rounded-xl overflow-hidden border border-slate-800"
                />
              </Document>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
