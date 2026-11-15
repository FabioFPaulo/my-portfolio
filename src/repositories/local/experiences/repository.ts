import {localExperiencesData} from "./data";
import type {IExperienceItem, IExperiencesRepository} from "./types";

export class LocalExperiencesRepository implements IExperiencesRepository {
    getExperiencesData(): IExperienceItem[] {
        return localExperiencesData;
    }
}

export const experiencesRepository = new LocalExperiencesRepository();
