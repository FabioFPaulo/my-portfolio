import "./index.css";
import {motion} from "framer-motion";
import type {CardExperienceProps} from "./types";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        opacity: 0,
        y: 35,
    },
};

export default function CardExperienceComponent(props: CardExperienceProps) {
    return (
        <motion.div variants={itemVariants} className="timeline-item group">
            {/* Nó da Timeline */}
            <div className="timeline-node">
                <div className={`timeline-dot ${props.isCurrent ? "current" : ""}`}>
                    {props.isCurrent && (
                        <span className="current-pulse"/>
                    )}
                </div>
            </div>

            {/* Cartão de Conteúdo da Experiência */}
            <div className="experience-card">
                {/* Header: Cargo, Projeto, Empresa e Data */}
                <div className="experience-header">
                    <div className="experience-title-area">
                        <div className="experience-role-line">
                            <h3 className="experience-role">{props.title}</h3>
                            {props.project && (
                                <span className="experience-project-badge">
                  {props.project}
                </span>
                            )}
                        </div>

                        <div className="experience-company-line">
                            <span className="experience-company">{props.company}</span>
                            {props.location && (
                                <span className="experience-location">• {props.location}</span>
                            )}
                            {props.website && (
                                <a
                                    href={props.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="experience-website-link"
                                    aria-label={`Website de ${props.company}`}
                                >
                                    <svg
                                        className="w-3.5 h-3.5 inline ml-1"
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
                    </div>

                    {/* Badge de Período / Data */}
                    <div className="experience-date-badge">
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
                        <time>{props.date}</time>
                    </div>
                </div>

                {/* Descrição Detalhada Justificada */}
                <div
                    className="experience-description"
                    dangerouslySetInnerHTML={{__html: props.description}}
                />

                {/* Tags de Tecnologias Utilizadas */}
                {props.technologies && props.technologies.length > 0 && (
                    <div className="experience-technologies">
                        {props.technologies.map((tech, index) => (
                            <span key={index} className="tech-pill">
                {tech}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
