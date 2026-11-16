export interface ISeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords: string[];
  ogImage: string;
  ogType?: "website" | "profile" | "article";
}

export interface IJsonLdPerson {
  "@context": "https://schema.org";
  "@type": "Person";
  "@id": string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  email?: string;
  image?: string;
  sameAs?: string[];
  alumniOf?: {
    "@type": "EducationalOrganization";
    name: string;
    url?: string;
  }[];
  knowsAbout?: string[];
}

export interface IJsonLdWebSite {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  author: {
    "@type": "Person";
    name: string;
  };
}
