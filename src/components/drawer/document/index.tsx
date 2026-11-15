import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import type { IDocumentDrawerProps } from "./types";
import "./index.css";

// Configuração otimizada do worker do PDF.js para Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function DocumentDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  pdfUrl,
  downloadUrl,
}: IDocumentDrawerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(600);
  const [isPdfLoading, setIsPdfLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const viewerContainerRef = useRef<HTMLDivElement>(null);

  // Monitoriza a largura do container do drawer para ajuste responsivo
  const updateWidth = useCallback(() => {
    if (viewerContainerRef.current) {
      const clientWidth = viewerContainerRef.current.clientWidth;
      if (clientWidth > 0) {
        // Deixa uma margem lateral de 32px
        setContainerWidth(Math.max(280, clientWidth - 48));
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const timer = setTimeout(updateWidth, 350);

    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timer);
    };
  }, [isOpen, updateWidth]);

  // Bloqueio do scroll do body e escuta da tecla Escape
  useEffect(() => {
    if (!isOpen) return;

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

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsPdfLoading(false);
    setHasError(false);
  };

  const onDocumentLoadError = () => {
    setIsPdfLoading(false);
    setHasError(true);
  };

  const zoomIn = () => setScale((prev) => Math.min(2.5, +(prev + 0.15).toFixed(2)));
  const zoomOut = () => setScale((prev) => Math.max(0.6, +(prev - 0.15).toFixed(2)));
  const resetZoom = () => setScale(1.0);
  const rotateClockwise = () => setRotation((prev) => (prev + 90) % 360);

  const prevPage = () => setPageNumber((prev) => Math.max(1, prev - 1));
  const nextPage = () =>
    setPageNumber((prev) => (numPages ? Math.min(numPages, prev + 1) : prev));

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
            {/* Cabeçalho do Drawer */}
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
                <a
                  href={downloadUrl || pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-open-external"
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

            {/* Barra de Ferramentas Customizada (Dark Glassmorphism) */}
            <div className="drawer-toolbar">
              {/* Controlo de Zoom */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={zoomOut}
                  className="toolbar-btn"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={resetZoom}
                  className="toolbar-zoom-label"
                  title="Reset Zoom"
                >
                  {Math.round(scale * 100)}%
                </button>

                <button
                  type="button"
                  onClick={zoomIn}
                  className="toolbar-btn"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Rotação */}
              <div className="toolbar-group">
                <button
                  type="button"
                  onClick={rotateClockwise}
                  className="toolbar-btn"
                  title="Rotate Clockwise"
                  aria-label="Rotate"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>

              {/* Paginação (quando aplicável) */}
              {numPages && numPages > 1 && (
                <div className="toolbar-group">
                  <button
                    type="button"
                    onClick={prevPage}
                    disabled={pageNumber <= 1}
                    className="toolbar-btn disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Previous Page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <span className="text-xs text-slate-300 font-medium px-1">
                    {pageNumber} / {numPages}
                  </span>

                  <button
                    type="button"
                    onClick={nextPage}
                    disabled={pageNumber >= numPages}
                    className="toolbar-btn disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Next Page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Corpo do Drawer: Renderização em Canvas Nativo via react-pdf */}
            <div ref={viewerContainerRef} className="drawer-body">
              {isPdfLoading && !hasError && (
                <div className="pdf-loading-state">
                  <div className="pdf-spinner" />
                  <p className="text-xs text-slate-400 mt-3 font-medium">
                    Rendering certificate with high precision...
                  </p>
                </div>
              )}

              {hasError ? (
                <div className="pdf-error-state">
                  <svg
                    className="w-10 h-10 text-rose-400/80 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-slate-200">
                    Failed to load document preview
                  </p>
                  <p className="text-xs text-slate-400 mt-1 mb-4 text-center max-w-xs">
                    You can still open and download the official document directly.
                  </p>
                  <a
                    href={downloadUrl || pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-semibold shadow-lg shadow-sky-500/20"
                  >
                    Open Document in New Tab
                  </a>
                </div>
              ) : (
                <div className="pdf-canvas-wrapper">
                  <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading=""
                  >
                    <div className="pdf-page-card">
                      <Page
                        pageNumber={pageNumber}
                        width={containerWidth}
                        scale={scale}
                        rotate={rotation}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        loading=""
                      />
                    </div>
                  </Document>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
