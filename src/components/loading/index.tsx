import { motion } from "framer-motion";
import "./index.css";

export default function LoadingComponent() {
  return (
    <motion.div
      key="app-preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(10px)",
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      }}
      className="loading-container"
    >
      {/* Luz radial de fundo */}
      <div className="radial-glow" aria-hidden="true" />

      {/* Hub Central: Monograma FP com Anéis Orbitais */}
      <div className="monogram-wrapper">
        {/* Anel Orbital Externo Rotativo */}
        <motion.div
          className="orbital-ring-outer"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div className="orbital-dot" />
        </motion.div>

        {/* Anel Médio Pulsante */}
        <motion.div
          className="orbital-ring-middle"
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Emblema Monograma FP */}
        <motion.div
          className="monogram-badge"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="monogram-text">FP</span>
        </motion.div>
      </div>

      {/* Identificação Pessoal */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="identity-group"
      >
        <h1 className="name-title">FÁBIO PAULO</h1>
        <div className="role-tag">
          <span className="status-dot" />
          <span className="role-text">Software Engineer & Researcher</span>
        </div>
      </motion.div>

      {/* Barra de Progresso de Precisão */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "180px" }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="progress-container"
      >
        <div className="progress-track">
          <motion.div
            className="progress-indicator"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.span
          className="status-caption"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          INITIALIZING ENVIRONMENT...
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
