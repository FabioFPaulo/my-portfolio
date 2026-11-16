import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import useApp from "@/hooks/useApp";
import { scrollToSection } from "@/utils/navigation";

export default function HashScrollHandler() {
  const location = useLocation();
  const app = useApp();
  const hasInitialScrolled = useRef(false);

  // Deep linking no carregamento inicial da página após a saída do preloader
  useEffect(() => {
    if (!app.isLoading && !hasInitialScrolled.current) {
      hasInitialScrolled.current = true;
      const hash = location.hash;
      if (hash) {
        // Pequeno atraso para garantir que o layout e animações iniciais assentem
        const timer = setTimeout(() => {
          scrollToSection(hash, true);
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [app.isLoading, location.hash]);

  // Scroll suave quando a hash muda programaticamente via React Router
  useEffect(() => {
    if (!app.isLoading && hasInitialScrolled.current && location.hash) {
      scrollToSection(location.hash, true);
    }
  }, [location.hash, app.isLoading]);

  return null;
}
