import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "@/components/container";
import Title from "@/components/title";
import useApp from "@/hooks/useApp";
import { aboutRepository } from "@/repositories";
import "./index.scss";

export default function AboutSection() {
  const app = useApp();
  const aboutData = aboutRepository.getAboutData();

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
    <Container.Section colorScheme="color-1" id="about-me">
      <div ref={ref}>
        <Title.Primary
          title={aboutData.title}
          subtitle={aboutData.subtitle}
        />

        <div className="about-grid">
          {/* Coluna da Esquerda: Narrativa Biográfica e Competências */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-bio-container"
          >
            <div className="bio-paragraphs">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index} className="bio-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="specializations-container">
              <span className="specializations-title">Core Technologies:</span>
              <div className="specializations-list">
                {aboutData.specializations.map((spec, index) => (
                  <span key={index} className="spec-badge">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita: Cartões de Destaque */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="about-highlights-container"
          >
            {aboutData.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-header">
                  <span className="highlight-badge">{highlight.badge}</span>
                </div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-subtitle">{highlight.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container.Section>
  );
}
