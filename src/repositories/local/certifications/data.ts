import type { ICertificationItem } from "./types";

export const localCertificationsData: ICertificationItem[] = [
  {
    id: "verao-ciencia-ipb",
    title: "Verão Ciência – Mentoria & Desenvolvimento Web com ReactJS",
    program: "Programa de Estágios de Iniciação Científica (Verão Ciência)",
    institution: "Instituto Politécnico de Bragança (IPB)",
    location: "Bragança, Portugal",
    mode: "Presential",
    dateRange: "2024 – 2026",
    badge: "Teaching & Mentoring",
    logo: `${import.meta.env.BASE_URL}images/ipb_logo.png`,
    description:
      "Atividade continuada de mentoria e instrução técnica realizada em colaboração com o corpo docente do Instituto Politécnico de Bragança nas edições anuais de 2024, 2025 e 2026. Orientação prática de estudantes na conceção e implementação das suas primeiras aplicações web e mobile modernas utilizando ReactJS, arquitetura baseada em componentes, boas práticas de mobile-first, layouts responsivos e media queries.",
    skills: [
      "ReactJS",
      "Component Architecture",
      "Responsive Web Design",
      "Mobile-First Principles",
      "Technical Mentoring",
      "Front-End Engineering",
    ],
    documents: [
      {
        id: "verao-ciencia-2026",
        edition: "Edição 2026",
        date: "9 Aug, 2026",
        title:
          "Aprende a criar as tuas próprias páginas para smartphone / tablet / web",
        pdfUrl: `${import.meta.env.BASE_URL}files/iceet_2025_certificate.pdf`,
        description:
          "Consolidação de conceitos avançados de design responsivo e arquitetura modular de componentes.",
      },
      {
        id: "verao-ciencia-2025",
        edition: "Edição 2025",
        date: "13 Jul, 2025",
        title:
          "Aprende a criar as tuas próprias apps para smartphone / tablet / web",
        pdfUrl: `${import.meta.env.BASE_URL}files/iceet_2025_certificate.pdf`,
        description:
          "Orientação prática no desenvolvimento de layouts adaptativos e componentes dinâmicos em ReactJS.",
      },
      {
        id: "verao-ciencia-2024",
        edition: "Edição 2024",
        date: "14 Jul, 2024",
        title: "Aprende a criar as tuas próprias páginas Web",
        pdfUrl: `${import.meta.env.BASE_URL}files/iceet_2025_certificate.pdf`,
        description:
          "Iniciação ao desenvolvimento frontend moderno, introdução ao ecossistema React e demonstrações práticas.",
      },
    ],
  },
];
