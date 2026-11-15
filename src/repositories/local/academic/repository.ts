import { localAcademicData } from "./data";
import { IAcademicItem, IAcademicRepository } from "./types";

export class LocalAcademicRepository implements IAcademicRepository {
  getAcademicData(): IAcademicItem[] {
    return localAcademicData;
  }
}

export const academicRepository = new LocalAcademicRepository();
