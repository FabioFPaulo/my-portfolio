export interface ICertificationDocument {
  id: string;
  edition: string;
  date: string;
  title: string;
  pdfUrl: string;
  driveUrl?: string;
  description?: string;
}

export interface ICertificationItem {
  id: string;
  title: string;
  program: string;
  institution: string;
  location: string;
  mode: string;
  dateRange: string;
  badge: string;
  logo?: string;
  description: string;
  skills: string[];
  documents: ICertificationDocument[];
}

export interface ICertificationsRepository {
  getCertificationsData(): ICertificationItem[];
  getCertificationById(id: string): ICertificationItem | undefined;
}
