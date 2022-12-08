import React from 'react';
import {ReactComponent as UserIcon} from "assets/img/user.svg";
import {ReactComponent as MessageIcon} from "assets/img/message.svg";
import { ReactComponent as UpIcon } from 'assets/img/chevron-up.svg'
import { ReactComponent as DownIcon } from 'assets/img/chevron-down.svg'
import {Thread} from "types";

interface ThreadProps {
  thread: Thread;
}

export const ThreadItem = ({
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
  const doSome = (to: string, id: string) => {}

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
          target='_blank'
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
              {score}
            <DownIcon
              className='ml-1'
              onClick={() => doSome('down', id)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
