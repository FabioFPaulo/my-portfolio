export interface CardExperienceProps {
  date: string;
  title: string;
  description: string;
  company: string;
  animationDelay?: number;
}

export interface CardProjectProps {
  imageSrc: string;
  imageSize?: string;
  onLoad(): void;
  label: string;
  position: number;
}
