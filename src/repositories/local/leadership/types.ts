export interface ILeadershipItem {
  id: string;
  role: string;
  project: string;
  institution: string;
  student?: string;
  startDate: string;
  endDate: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface ILeadershipRepository {
  getLeadershipData(): ILeadershipItem[];
}
