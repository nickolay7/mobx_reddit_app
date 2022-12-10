import {observer} from "mobx-react-lite";
import {useStores} from "store";
import {Status} from "types";

import {Loader} from "components/Loader";
import {ThreadsList} from "components/Threads";
import {useEffect} from "react";
import {Tags} from "components/Tags";

export const Home = observer(() => {
  const { threadsStore } = useStores();

  useEffect(() => {
    threadsStore.fetchThreads();
  }, [threadsStore]);

  const renderContent = (status: Status) => {
    switch (status) {
      case Status.SUCCEED:
        return <ThreadsList />
      case Status.LOADING:
        return <Loader className='mx-auto' />
      default:
        return <p>Error</p>
    }
  }

  return (
      <div className='mt-6'>
        <h1 className='ui-title-3 text-center'>Reddit Threads</h1>
        <Tags />
        {renderContent(threadsStore.status)}
      </div>
  );
});
