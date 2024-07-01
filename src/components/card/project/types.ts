export interface CardProjectProps {
  imageSrc: string;
  imageSize?: string;
  onLoad(): void;
  label: string;
  position: number;
}
