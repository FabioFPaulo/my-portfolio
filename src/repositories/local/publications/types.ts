export interface IPublicationItem {
  id: string;
  year: string;
  title: string;
  authors: string[];
  venue: string;
  conferenceAcronym?: string;
  status?: string;
  publisher?: string;
  publicationDetails?: string;
  link?: string;
  description: string;
  topics: string[];
}

export interface IPublicationsRepository {
  getPublicationsData(): IPublicationItem[];
  getPublicationById(id: string): IPublicationItem | undefined;
}
