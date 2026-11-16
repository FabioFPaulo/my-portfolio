import { localCertificationsData } from "./data";
import type { ICertificationItem, ICertificationsRepository } from "./types";

export class LocalCertificationsRepository implements ICertificationsRepository {
  private data: ICertificationItem[];

  constructor(initialData: ICertificationItem[] = localCertificationsData) {
    this.data = initialData;
  }

  getCertificationsData(): ICertificationItem[] {
    return this.data;
  }

  getCertificationById(id: string): ICertificationItem | undefined {
    return this.data.find((item) => item.id === id);
  }
}

export const certificationsRepository = new LocalCertificationsRepository();
