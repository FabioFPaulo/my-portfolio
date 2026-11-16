import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  SITE_URL,
  SITE_TITLE_DEFAULT,
  SITE_TITLE_TEMPLATE,
  SECTION_TITLES,
} from "@/constants/seo";
import { generateAllStructuredData } from "@/services/seo/structured-data";

export default function HeadSEO() {
  const location = useLocation();

  useEffect(() => {
    const rawHash = location.hash.replace("#", "");
    const sectionName = SECTION_TITLES[rawHash];

    // Atualizar título do documento
    if (sectionName && rawHash !== "home") {
      document.title = SITE_TITLE_TEMPLATE.replace("%s", sectionName);
    } else {
      document.title = SITE_TITLE_DEFAULT;
    }

    // Atualizar link canonical com o hash atual
    const canonicalLink = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.href = rawHash ? `${SITE_URL}/#${rawHash}` : `${SITE_URL}/`;
    }

    // Injetar ou atualizar dados estruturados JSON-LD
    let scriptTag = document.getElementById("structured-data-jsonld") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "structured-data-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(generateAllStructuredData());
  }, [location.hash]);

  return null;
}
