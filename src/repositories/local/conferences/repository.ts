import {localConferencesData} from "./data";
import type {IConferenceItem, IConferencesRepository} from "./types";

export class LocalConferencesRepository implements IConferencesRepository {
    private data: IConferenceItem[];

    constructor(initialData: IConferenceItem[] = localConferencesData) {
        this.data = initialData;
    }

    getConferencesData(): IConferenceItem[] {
        return this.data;
    }

    getConferenceById(id: string): IConferenceItem | undefined {
        return this.data.find((item) => item.id === id);
    }
}

export const conferencesRepository = new LocalConferencesRepository();
