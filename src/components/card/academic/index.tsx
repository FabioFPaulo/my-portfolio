import { CardAcademicProps } from "./types";
import "./index.scss";
import useApp from "@/hooks/useApp";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function CardAcademicComponent(props: CardAcademicProps) {
  const app = useApp();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start("visible");
    } else {
      mainControls.set("hidden");
    }
  }, [isInView, mainControls, app.isLoading]);

  return (
    <motion.a
      data-testid="card-academic-container"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.45 }}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="card-academic-container group"
      role="link"
    >
      {/* Top Header: Logo & Badge */}
      <div className="card-academic-header">
        <div className="card-academic-logo-wrapper">
          <img
            src={props.src}
            alt={props.institution || props.title}
            data-testid="card-academic-img"
            className="card-academic-img"
          />
        </div>
        {props.badge && (
          <span className="card-academic-badge">{props.badge}</span>
        )}
      </div>

      {/* Title & External Link Indicator */}
      <div className="card-academic-title-wrapper">
        <h3
          className="card-academic-title"
          data-testid="card-academic-title"
        >
          {props.title}
        </h3>
        <svg
          className="card-academic-arrow"
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
      </div>

      {/* Institution & Location */}
      {props.institution && (
        <div className="card-academic-institution">
          <span>{props.institution}</span>
          {props.location && (
            <span className="card-academic-location">• {props.location}</span>
          )}
        </div>
      )}

      {/* Footer: Date & Merit Grade */}
      <div className="card-academic-footer">
        <div
          className="card-academic-date"
          data-testid="card-academic-date"
        >
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
          {props.dateString}
        </div>

        {props.grade && (
          <div className="card-academic-grade">
            {props.grade}
          </div>
        )}
      </div>
    </motion.a>
  );
}
