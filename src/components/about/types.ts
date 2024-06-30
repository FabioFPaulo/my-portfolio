export interface IAbout {
  description: string;
  skills: Skill[];
}

interface Skill {
  percent: number;
  label: string;
}
