/**
 * Utilitário de scroll suave cinematográfico e gestão de âncoras na navegação
 */

// Easing cúbico (aceleração suave inicial e desaceleração progressiva)
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let activeScrollAnimationId: number | null = null;
let isProgrammaticScrolling = false;
let userInterventionListenersAttached = false;

function cancelCurrentScroll() {
  if (activeScrollAnimationId !== null) {
    cancelAnimationFrame(activeScrollAnimationId);
    activeScrollAnimationId = null;
    isProgrammaticScrolling = false;
  }
}

function ensureUserInterventionListeners() {
  if (typeof window === "undefined" || userInterventionListenersAttached) return;

  const onUserInteraction = () => {
    if (isProgrammaticScrolling) {
      cancelCurrentScroll();
    }
  };

  window.addEventListener("wheel", onUserInteraction, { passive: true });
  window.addEventListener("touchmove", onUserInteraction, { passive: true });
  userInterventionListenersAttached = true;
}

export function isScrollingProgrammatically(): boolean {
  return isProgrammaticScrolling;
}

export function scrollToSection(target: string, smooth: boolean = true): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  ensureUserInterventionListeners();

  const sectionId = target.startsWith("#") ? target.slice(1) : target;
  const element = document.getElementById(sectionId);

  if (!element) return;

  const navbarHeight = 70;
  const startPosition = window.pageYOffset;
  const elementTop = element.getBoundingClientRect().top;
  const targetPosition = Math.max(0, elementTop + startPosition - navbarHeight);
  const distance = targetPosition - startPosition;

  // Se a distância for insignificante ou smooth for desativado
  if (!smooth || Math.abs(distance) < 4) {
    window.scrollTo(0, targetPosition);
    return;
  }

  // Cancelar animação prévia em curso
  cancelCurrentScroll();

  isProgrammaticScrolling = true;

  // Duração calibrada: base de 650ms, escalonando proporcionalmente até 950ms para distâncias longas
  const baseDuration = 650;
  const variableDuration = Math.min(300, (Math.abs(distance) / 1800) * 300);
  const duration = baseDuration + variableDuration;

  let startTime: number | null = null;

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (progress < 1) {
      activeScrollAnimationId = requestAnimationFrame(step);
    } else {
      activeScrollAnimationId = null;
      // Pequena janela para o browser acomodar antes de retomar o observer
      setTimeout(() => {
        isProgrammaticScrolling = false;
      }, 60);
    }
  }

  activeScrollAnimationId = requestAnimationFrame(step);
}
