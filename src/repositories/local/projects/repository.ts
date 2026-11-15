import { localProjectsData } from "./data";
import { IPersonalProjectItem, IProjectsRepository } from "./types";

export class LocalProjectsRepository implements IProjectsRepository {
  getProjectsData(): IPersonalProjectItem[] {
    return localProjectsData;
  }
}

export const projectsRepository = new LocalProjectsRepository();
