export interface IAcademicItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  website: string;
  logo: string;
  badge: string;
}

export interface IAcademicRepository {
  getAcademicData(): IAcademicItem[];
}
