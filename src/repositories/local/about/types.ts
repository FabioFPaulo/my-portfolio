export interface IAboutHighlight {
  title: string;
  subtitle: string;
  badge?: string;
}

export interface IAboutData {
  title: string;
  subtitle: string;
  bio: string[];
  highlights: IAboutHighlight[];
  specializations: string[];
}

export interface IAboutRepository {
  getAboutData(): IAboutData;
}
