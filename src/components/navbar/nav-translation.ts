import type { TFunction } from "i18next";

export const getNavLabel = (label: string, t: TFunction): string => {
  switch (label.toLowerCase()) {
    case "home":
      return t("nav.home");
    case "about me":
      return t("nav.aboutMe");
    case "education":
      return t("nav.education");
    case "experiences":
      return t("nav.experiences");
    case "projects":
      return t("nav.projects");
    case "leadership":
      return t("nav.leadership");
    case "conferences":
      return t("nav.conferences");
    case "certifications":
      return t("nav.certifications");
    case "skills":
      return t("nav.skills");
    case "publications":
      return t("nav.publications");
    default:
      return label;
  }
};
