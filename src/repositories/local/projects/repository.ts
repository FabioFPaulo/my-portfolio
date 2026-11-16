import {localProjectsData} from "./data";
import type {IPersonalProjectItem, IProjectsRepository} from "./types";

export class LocalProjectsRepository implements IProjectsRepository {
    getProjectsData(): IPersonalProjectItem[] {
        return localProjectsData;
    }
}

export const projectsRepository = new LocalProjectsRepository();
