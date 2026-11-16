import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { isScrollingProgrammatically } from "@/utils/navigation";

const DEFAULT_SECTION_IDS = [
  "home",
  "about-me",
  "academic-education",
  "experiences",
  "projects",
  "leadership",
  "conferences",
  "certifications",
  "languages",
  "publications",
];

export function useSectionObserver(sectionIds: string[] = DEFAULT_SECTION_IDS): string {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window === "undefined") return sectionIds[0];
    const initialHash = window.location.hash.replace("#", "");
    return initialHash && sectionIds.includes(initialHash) ? initialHash : sectionIds[0];
  });

  // Sincronizar imediatamente quando a hash da rota mudar
  useEffect(() => {
    const currentHash = location.hash.replace("#", "");
    if (currentHash && sectionIds.includes(currentHash)) {
      setActiveSection(currentHash);
    }
  }, [location.hash, sectionIds]);

  // Observador de scroll para atualizar secção ativa conforme o utilizador rola manualmente
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Ignora se estiver a decorrer uma animação de scroll programática
      if (isScrollingProgrammatically()) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Se estiver muito próximo do fundo da página, ativa a última secção
          if (scrollY + windowHeight >= documentHeight - 60) {
            const lastSection = sectionIds[sectionIds.length - 1];
            setActiveSection(lastSection);
            if (window.history.replaceState) {
              const newHash = `#${lastSection}`;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, "", newHash);
              }
            }
            ticking = false;
            return;
          }

          // Se estiver no topo
          if (scrollY <= 60) {
            const firstSection = sectionIds[0];
            setActiveSection(firstSection);
            if (window.history.replaceState) {
              const newHash = `#${firstSection}`;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, "", newHash);
              }
            }
            ticking = false;
            return;
          }

          // Percorre de baixo para cima para encontrar a secção que cruzou o topo da janela
          const triggerOffset = 130; // compensação da navbar (70px) + margem confortável
          let currentSection = sectionIds[0];

          for (const id of sectionIds) {
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= triggerOffset) {
                currentSection = id;
              }
            }
          }

          setActiveSection((prev) => {
            if (prev !== currentSection) {
              if (window.history.replaceState) {
                const newHash = `#${currentSection}`;
                if (window.location.hash !== newHash) {
                  window.history.replaceState(null, "", newHash);
                }
              }
              return currentSection;
            }
            return prev;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
