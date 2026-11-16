export interface IDocumentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  pdfUrl: string;
  downloadUrl?: string;
}
