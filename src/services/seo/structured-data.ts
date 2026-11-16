import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR_NAME,
  AUTHOR_ROLE,
  AUTHOR_EMAIL,
  AUTHOR_GITHUB,
  OG_IMAGE_PATH,
  SITE_KEYWORDS,
} from "@/constants/seo";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    jobTitle: AUTHOR_ROLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    email: `mailto:${AUTHOR_EMAIL}`,
    image: OG_IMAGE_PATH,
    sameAs: [AUTHOR_GITHUB],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Instituto Politécnico de Bragança (IPB)",
        url: "https://www.ipb.pt",
      },
    ],
    knowsAbout: SITE_KEYWORDS,
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: ["pt-PT", "en-US"],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
    },
  };
}

export function generateProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: `${SITE_URL}/`,
    name: `${AUTHOR_NAME} — Portfolio & Research`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function generateAllStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(),
      generateWebSiteSchema(),
      generateProfilePageSchema(),
    ],
  };
}
