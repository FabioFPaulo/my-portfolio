import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IDocumentDrawerProps } from "./types";
import "./index.scss";

export default function DocumentDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  pdfUrl,
  downloadUrl,
}: IDocumentDrawerProps) {
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

  if (typeof document === "undefined") return null;

  // Parâmetros de visualização nativa: ajustar à largura e exibir toolbar
  const pdfViewerSrc = pdfUrl ? `${pdfUrl}#view=FitH&toolbar=1&navpanes=0` : "";

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

            {/* Corpo do Drawer: Visualizador Nativo de Alta Performance */}
            <div className="drawer-body">
              <object
                data={pdfViewerSrc}
                type="application/pdf"
                className="w-full h-full border-0"
                aria-label={title}
              >
                <iframe
                  src={pdfViewerSrc}
                  title={title}
                  className="w-full h-full border-0"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <p className="text-slate-300 text-sm mb-4">
                      Unable to display PDF preview directly.
                    </p>
                    <a
                      href={downloadUrl || pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-xs font-semibold"
                    >
                      Open Document
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
