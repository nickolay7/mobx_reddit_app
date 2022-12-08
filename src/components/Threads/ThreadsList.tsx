import React from 'react';
import {threadsStore} from "store";
import { ThreadItem } from "./ThreadItem";

export const ThreadsList = () => {

  return (
    <div className='ThreadList'>
      {
        (threadsStore.threads &&
          threadsStore.threads.length > 0) ?
          threadsStore.threads.map((thread) => (
            <ThreadItem thread={thread}/>
          )) : 'threads not found'}
    </div>
  );
};
