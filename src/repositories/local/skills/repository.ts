import { localSkillsData } from "./data";
import { ISkillCategory, ISkillsRepository } from "./types";

export class LocalSkillsRepository implements ISkillsRepository {
  getSkillsData(): ISkillCategory[] {
    return localSkillsData;
  }
}

export const skillsRepository = new LocalSkillsRepository();
