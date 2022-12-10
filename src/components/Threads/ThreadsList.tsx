import React from 'react';
import { ThreadItem } from "./ThreadItem";
import {useStores} from "../../store";

export const ThreadsList = () => {
  const { threadsStore } = useStores();

  return (
    <div className='ThreadList'>
      {
        (threadsStore.threads &&
          threadsStore.threads.length > 0) ?
          threadsStore.threads.map((thread) => (
            <ThreadItem key={thread.id} thread={thread}/>
          )) : 'threads not found'}
    </div>
  );
};
