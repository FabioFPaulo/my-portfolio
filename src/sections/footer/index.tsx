import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "@/components/container";
import "./index.css";

export default function FooterSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fabiofrapaulo@outlook.pt");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Container.Section id="footer" colorScheme="color-2">
      <footer className="footer-wrapper">
        {/* Top Grid com 4 colunas principais */}
        <div className="footer-grid">
          {/* Coluna 1: Identidade Profissional & Bio */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <div className="brand-monogram">
                <span>FP</span>
              </div>
              <div>
                <h3 className="brand-name">Fábio Paulo</h3>
                <p className="brand-role">Software Engineer & MSc Researcher</p>
              </div>
            </div>

            <p className="footer-bio">
              Computer Engineer and MSc in Informatics from the Polytechnic University of Bragança. Specialized in modern full-stack web and mobile systems, applied Deep Learning, and real-time Web3D architectures.
            </p>

            {/* Status Beacon */}
            <div className="footer-status-beacon">
              <span className="beacon-dot">
                <span className="beacon-ping"></span>
                <span className="beacon-core"></span>
              </span>
              <span className="beacon-text">
                Available for engineering projects & research
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (Storytelling) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link
                  to="home"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about-me"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="academic-education"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Academic Education
                </Link>
              </li>
              <li>
                <Link
                  to="experiences"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Personal Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Académico & Científico */}
          <div className="footer-col">
            <h4 className="footer-col-title">Academic & Research</h4>
            <ul className="footer-links-list">
              <li>
                <Link
                  to="leadership"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Leadership & Mentoring
                </Link>
              </li>
              <li>
                <Link
                  to="conferences"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Conferences & Seminars
                </Link>
              </li>
              <li>
                <Link
                  to="certifications"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Certifications (Verão Ciência)
                </Link>
              </li>
              <li>
                <Link
                  to="languages"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link
                  to="publications"
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-nav-link"
                >
                  <svg className="link-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Scientific Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contacto & Recursos */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect & Resume</h4>
            <div className="footer-contact-box">
              {/* Email Interativo */}
              <div className="contact-item">
                <span className="contact-label">Direct Email</span>
                <div className="email-action-row">
                  <a
                    href="mailto:fabiofrapaulo@outlook.pt"
                    className="email-link"
                  >
                    fabiofrapaulo@outlook.pt
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-copy-email"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Localização */}
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Bragança, Portugal</span>
              </div>

              {/* Ações: GitHub & Download CV */}
              <div className="footer-action-buttons">
                <a
                  href="https://github.com/FabioFPaulo"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-footer-github"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}files/cv.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-footer-cv"
                >
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior (Colophon & Direitos) */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-white">Fábio Paulo</span>. All rights reserved.
          </div>

          <div className="footer-stack-pill">
            <span className="tech-dot"></span>
            <span>React 19 • TypeScript • Tailwind CSS v4 • Vite 8</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </footer>
    </Container.Section>
  );
}
