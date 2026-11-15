export interface IConferenceItem {
  id: string;
  conferenceName: string;
  conferenceEdition: string;
  conferenceAcronym: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  paperTitle: string;
  officialLink: string;
  certificatePdf: string;
  driveUrl?: string;
  description?: string;
  topics?: string[];
}

export interface IConferencesRepository {
  getConferencesData(): IConferenceItem[];
  getConferenceById(id: string): IConferenceItem | undefined;
}
