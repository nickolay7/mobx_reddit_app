import {observer} from "mobx-react-lite";

import styles from './Home.module.scss';
import {useEffect} from "react";
import {threadsStore} from "store";
import {Status} from "types";

export const Home = observer(() => {
  useEffect(() => {
    threadsStore.fetchTreads();
  }, []);

  // console.log(threadsStore)

  const renderContent = (status: Status) => {
    switch (status) {
      case Status.SUCCEED:
        return (
          <div>
            {threadsStore.threads &&
              threadsStore.threads.length > 0 &&
              threadsStore.threads.map(({id, url, title}) => (
                <a key={id} href={url}>
                  {title}
                </a>
              ))}
          </div>
        )
      case Status.LOADING:
        return <p>loading ....</p>
      default:
        return <p>Error</p>
    }
  }

  return (
    <div className={styles.home}>
      <>
        <h1 className='ui-title-1'>Home Page</h1>
        {renderContent(threadsStore.status)}
      </>
    </div>
  );
});
