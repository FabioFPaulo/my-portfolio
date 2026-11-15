import useApp from "@/hooks/useApp";
import Container from "@/components/container";
import Title from "@/components/title";
import { leadershipRepository } from "@/repositories";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import "./index.css";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function LeadershipSection() {
  const app = useApp();
  const leadershipList = leadershipRepository.getLeadershipData();

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
    <Container.Section colorScheme="color-1" id="leadership">
      <Title.Primary
        title="Leadership & Mentoring"
        subtitle="Technical guidance, code reviews, and software engineering supervision"
      />
      <motion.div
        ref={ref}
        variants={listVariants}
        initial="closed"
        animate={mainControls}
        className={`leadership-grid ${leadershipList.length === 1 ? "is-single" : ""}`}
      >
        {leadershipList.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="leadership-card group"
          >
            {/* Header: Badge e Período */}
            <div className="leadership-header">
              <span className="leadership-badge">{item.badge}</span>
              <div className="leadership-date">
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

            {/* Título e Projeto */}
            <h3 className="leadership-role">{item.role}</h3>
            <div className="leadership-project-line">
              <span className="leadership-project">{item.project}</span>
              <span className="leadership-institution">• {item.institution}</span>
            </div>

            {/* Orientando (se aplicável) */}
            {item.student && (
              <div className="leadership-student-badge">
                <span className="student-label">Supervisão:</span>
                <span className="student-name">{item.student}</span>
              </div>
            )}

            {/* Descrição Justificada */}
            <p className="leadership-description">{item.description}</p>

            {/* Tags de Competências de Liderança */}
            {item.skills && item.skills.length > 0 && (
              <div className="leadership-skills">
                {item.skills.map((skill, index) => (
                  <span key={index} className="leadership-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Container.Section>
  );
}
