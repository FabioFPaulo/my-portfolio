export interface IExperienceItem {
  id: string;
  role: string;
  project?: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  website?: string;
  description: string;
  technologies: string[];
}

export interface IExperiencesRepository {
  getExperiencesData(): IExperienceItem[];
}
