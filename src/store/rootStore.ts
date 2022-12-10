import {TagsStore} from "./tagsStore";
import {ThreadStore} from "./threadStore";
import {createContext, useContext} from "react";

export class RootStore {
  tagsStore: TagsStore;
  threadsStore: ThreadStore;
  constructor() {
    this.tagsStore = new TagsStore(this);
    this.threadsStore = new ThreadStore(this);
  }
}

const StoresContext = createContext(new RootStore());

export const useStores = () => useContext(StoresContext);