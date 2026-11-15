export interface ICertificationItem {
  id: string;
  year: string;
  edition: string;
  title: string;
  program: string;
  institution: string;
  location: string;
  mode: string;
  date: string;
  badge: string;
  logo?: string;
  description: string;
  skills: string[];
  pdfUrl: string;
  driveUrl?: string;
}

export interface ICertificationsRepository {
  getCertificationsData(): ICertificationItem[];
  getCertificationById(id: string): ICertificationItem | undefined;
}
