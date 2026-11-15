export interface IPersonalProjectItem {
  id: string;
  title: string;
  category: string;
  focus: string;
  description: string;
  technologies: string[];
  link: string;
  linkType: "github" | "demo" | "external";
}

export interface IProjectsRepository {
  getProjectsData(): IPersonalProjectItem[];
}
