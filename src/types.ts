export enum Status {
  'LOADING' = 'Loading',
  'ERROR' = 'Error',
  'SUCCEED' = 'Succeed'
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
}