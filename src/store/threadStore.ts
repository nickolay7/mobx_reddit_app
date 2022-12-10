import {makeAutoObservable} from "mobx";
import { redditService } from "utils/fetchReddit";
import {Status, Store, Thread} from "types";

export class ThreadStore {
  threads: Thread[] | null = null;
  status = Status.LOADING;
  rootStore: Store;

  constructor(rootStore: Store) {
    makeAutoObservable(this);
    this.rootStore = rootStore
  }

  setThreads(data: Thread[] | null) {
    this.threads = data;
  }

  setStatus(status: Status) {
    this.status = status;
  }

  setScore(direct: string, id: string) {
    const thread = this.threads && this.threads.find((thread) => thread.id === id);

    if (thread) {
      direct === 'up' ? (thread.score = String(Number(thread.score) + 1))
        : (thread.score = String(Number(thread.score) - 1));
    }
  }

  async fetchThreads() {
    try {
      if (!this.threads) {
        this.setStatus(Status.LOADING);
        const data = this.rootStore.tagsStore && await redditService.get(this.rootStore.tagsStore.tag);
        data && this.setThreads(data);
        this.setStatus(Status.SUCCEED);
      }
    } catch (e: any) {
      this.status = Status.ERROR;
      if (e instanceof Error) {
        console.log(e.message)
      }
    }
  }
}
// export const threadsStore = new ThreadStore();
