import { localLeadershipData } from "./data";
import { ILeadershipItem, ILeadershipRepository } from "./types";

export class LocalLeadershipRepository implements ILeadershipRepository {
  getLeadershipData(): ILeadershipItem[] {
    return localLeadershipData;
  }
}

export const leadershipRepository = new LocalLeadershipRepository();
