export interface ISkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: "brain" | "server" | "layout" | "smartphone" | "database" | "terminal";
  skills: string[];
}

export interface ISkillsRepository {
  getSkillsData(): ISkillCategory[];
}
