export interface CardProjectProps {
  title: string;
  category: string;
  focus: string;
  description: string;
  technologies: string[];
  link: string;
  linkType?: "github" | "demo" | "external";
  imageSrc?: string;
  imageSize?: string;
  onLoad?: () => void;
  label?: string;
  position?: number;
}
