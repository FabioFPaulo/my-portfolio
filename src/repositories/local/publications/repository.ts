import { localPublicationsData } from "./data";
import type { IPublicationItem, IPublicationsRepository } from "./types";

export class LocalPublicationsRepository implements IPublicationsRepository {
  private data: IPublicationItem[];

  constructor(initialData: IPublicationItem[] = localPublicationsData) {
    this.data = initialData;
  }

  getPublicationsData(): IPublicationItem[] {
    return this.data;
  }

  getPublicationById(id: string): IPublicationItem | undefined {
    return this.data.find((item) => item.id === id);
  }
}

export const publicationsRepository = new LocalPublicationsRepository();
