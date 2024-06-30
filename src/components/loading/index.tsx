import "./index.scss";
import { motion } from "framer-motion";

export default function LoadingComponent() {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-circle"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <p className="loading-text">Loading content ...</p>
    </div>
  );
}
