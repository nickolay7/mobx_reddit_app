import {TagsStore, ThreadStore} from "store";

export enum Status {
  'LOADING' = 'Loading',
  'ERROR' = 'Error',
  'SUCCEED' = 'Succeed'
}

export enum Tag {
  'REACT' = 'react',
  'ANGULAR' = 'angular',
  'VUE' = 'vue'
}

interface Thumbnail {
  src: string;
  width: string;
  height: string;
}

export interface Thread {
  id: string;
  url: string;
  title: string;
  score: string;
  author: string;
  thumbnail: Thumbnail;
  comments: string;
}

export interface Store {
  tagsStore: TagsStore | null;
  threadsStore: ThreadStore | null;
}