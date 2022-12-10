import React from 'react';
import {observer} from "mobx-react-lite";
import {Thread} from "types";

import {ReactComponent as UserIcon} from "assets/img/user.svg";
import {ReactComponent as MessageIcon} from "assets/img/message.svg";
import { ReactComponent as UpIcon } from 'assets/img/chevron-up.svg'
import { ReactComponent as DownIcon } from 'assets/img/chevron-down.svg'
import {useStores} from "store";

interface ThreadProps {
  thread: Thread;
}

export const ThreadItem = observer(({
                             thread: {
                               id,
                               comments,
                               url,
                               thumbnail: {src, width, height},
                               title,
                               score,
                               author
                             }
                           }: ThreadProps) => {
  const { threadsStore } = useStores();
  const doSome = (direct: string, id: string) => {
    threadsStore.setScore(direct, id);
  }

  const observableElement = threadsStore.threads && threadsStore.threads.find((item) => item.id === id);

  return (
    <div>
      <div key={id} className='TreadItem'>
        {width && (
          <img
            src={src}
            alt={title}
            style={{
              width: width,
              height: height,
            }}
          />
        )}

        <a
          className='ui-title-4 ui-link mb-4'
          href={url}
        >
          {Number(score) > 40 && '🔥  '}
          {title}
        </a>

        <div className='flex flex-wrap justify-between'>
          <div className='TreadMeta'>
            <p className='flex items-center mb-2'>
              <UserIcon className='mr-1'/>
              By {author}
            </p>
            <p className='flex items-center'>
              <MessageIcon className='mr-1'/>
              {comments} comments
            </p>
          </div>
          <span className='Badge'>
            <UpIcon
              className='mr-1'
              onClick={() => doSome('up', id)}
            />
              {observableElement?.score}
            <DownIcon
              className='ml-1'
              onClick={() => doSome('down', id)}
            />
          </span>
        </div>
      </div>
    </div>
  );
});
