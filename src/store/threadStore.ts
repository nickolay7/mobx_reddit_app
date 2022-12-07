import {makeAutoObservable} from "mobx";
import { redditService } from "utils/fetchReddit";
import {Status, Thread} from "types";

class ThreadStore {
  threads: Thread[] | null = null;
  status = Status.LOADING;

  constructor() {
    makeAutoObservable(this);
  }

  setThreads(data: any) {
    this.threads = data;
  }

  async fetchTreads() {
    try {
      this.status = Status.LOADING;
      const data = await redditService.get();
      this.setThreads(data);
      this.status = Status.SUCCEED;
    } catch (e: any) {
      this.status = Status.ERROR;
      if (e instanceof Error) {
        console.log(e.message)
      }
    }
  }
}

export const threadsStore = new ThreadStore();
