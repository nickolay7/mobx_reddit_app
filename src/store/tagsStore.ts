import {Store, Tag} from "../types";
import {makeAutoObservable} from "mobx";

export class TagsStore {
  tag = Tag.REACT;
  rootStore: Store;

  constructor(rootStore: Store) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setTag(tag: Tag) {
    this.tag = tag;
  }
}