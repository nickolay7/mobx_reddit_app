import {observer} from "mobx-react-lite";

import {useEffect} from "react";
import {threadsStore} from "store";
import {Status} from "types";

import { ReactComponent as UserIcon } from 'assets/img/user.svg'
import { ReactComponent as MessageIcon } from 'assets/img/message.svg'
import {Loader} from "../../components/Loader";

export const Home = observer(() => {
  useEffect(() => {
    threadsStore.fetchTreads();
  }, []);

  const renderContent = (status: Status) => {
    switch (status) {
      case Status.SUCCEED:
        return (
          <div className='TreadList'>
            {
              (threadsStore.threads &&
              threadsStore.threads.length > 0) ?
              threadsStore.threads.map((tread) => (
                <div key={tread.id} className='TreadItem'>
                  {tread.thumbnail.width && (
                    <img
                      src={tread.thumbnail.src}
                      alt={tread.title}
                      style={{
                        width: tread.thumbnail.width,
                        height: tread.thumbnail.height,
                      }}
                    />
                  )}

                  <a
                    className='ui-title-4 ui-link mb-4'
                    href={tread.url}
                    target='_blank'
                  >
                    {Number(tread.score) > 40 && '🔥  '}
                    {tread.title}
                  </a>

                  <div className='flex flex-wrap justify-between'>
                    <div className='TreadMeta'>
                      <p className='flex items-center mb-2'>
                        <UserIcon className='mr-1' />
                        By {tread.author}
                      </p>
                      <p className='flex items-center'>
                        <MessageIcon className='mr-1' />
                        {tread.comments} comments
                      </p>
                    </div>
                  </div>
                </div>
              )) : 'threads not found'}
          </div>
        )
      case Status.LOADING:
        return <Loader className='mx-auto' />
      default:
        return <p>Error</p>
    }
  }

  return (
      <div className='mt-6'>
        {renderContent(threadsStore.status)}
      </div>
  );
});
