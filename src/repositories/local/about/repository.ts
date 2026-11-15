import { localAboutData } from "./data";
import { IAboutData, IAboutRepository } from "./types";

export class LocalAboutRepository implements IAboutRepository {
  getAboutData(): IAboutData {
    return localAboutData;
  }
}

export const aboutRepository = new LocalAboutRepository();
