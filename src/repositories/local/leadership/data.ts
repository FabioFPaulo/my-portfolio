import { ILeadershipItem } from "./types";

export const localLeadershipData: ILeadershipItem[] = [
  {
    id: "cedri-internship-supervisor",
    role: "Internship Supervisor",
    project: "CeDRI Web Portal",
    institution: "CeDRI, Polytechnic University of Bragança",
    student: "Igor Moreira (CTeSP Student)",
    startDate: "Jan, 2025",
    endDate: "Jun, 2025",
    badge: "Internship Supervision",
    description:
      "Provided technical guidance and mentoring to a CTeSP student on the continuous maintenance and architectural evolution of the CeDRI web portal. Supervised the implementation of new functionalities, conducted thorough peer code reviews, and led the troubleshooting process for production-level issues. By steering the student's workflow and engineering discipline, the stability of the production web portal was maintained while successfully incorporating new features.",
    skills: [
      "Code Review",
      "Technical Mentoring",
      "Production Troubleshooting",
      "Workflow Management",
      "System Stability",
    ],
  },
  {
    id: "verao-ciencia-mentorship",
    role: "Technical Instructor & Mentor",
    project: "Verão Ciência (2024 – 2026 Editions)",
    institution: "Polytechnic University of Bragança",
    startDate: "Jul, 2024",
    endDate: "Aug, 2026",
    badge: "Academic Mentorship",
    description:
      "Collaborated with professors across consecutive annual editions (2024, 2025, 2026) to mentor students developing their first web and mobile applications using ReactJS. Prepared instructional materials, introduced fundamental component-based architecture patterns, and guided students in implementing mobile-first layouts, adaptive components, and media-query responsive techniques.",
    skills: [
      "ReactJS Instruction",
      "Component Architecture",
      "Mobile-First Design",
      "Student Coaching",
      "Hands-on Workshops",
    ],
  },
];
