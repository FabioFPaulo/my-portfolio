import {localSkillsData} from "./data";
import type {ISkillCategory, ISkillsRepository} from "./types";

export class LocalSkillsRepository implements ISkillsRepository {
    getSkillsData(): ISkillCategory[] {
        return localSkillsData;
    }
}

export const skillsRepository = new LocalSkillsRepository();
