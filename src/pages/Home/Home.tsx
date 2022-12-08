import {observer} from "mobx-react-lite";
import {threadsStore} from "store";
import {Status} from "types";

import {Loader} from "components/Loader";
import {ThreadsList} from "components/Threads";
import {useEffect} from "react";

export const Home = observer(() => {
  useEffect(() => {
    threadsStore.fetchTreads();
  }, []);

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
        {renderContent(threadsStore.status)}
      </div>
  );
});
