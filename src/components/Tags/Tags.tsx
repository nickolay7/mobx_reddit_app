import classNames from "classnames";
import {useStores} from "store";
import {Tag} from "types";
import {useEffect, useState} from "react";

export const Tags = () => {
  const { tagsStore, threadsStore } = useStores();
  const [activeTag, setActiveTag] = useState(tagsStore.tag)

  const tags = [Tag.REACT, Tag.VUE, Tag.ANGULAR];

  const renderTags = tags.map((tag) => {
    const isActive = tag === activeTag;
    const classes = classNames('ui-tag', { isActive })

    const tagHandler = () => {
      threadsStore.setThreads(null);
      setActiveTag(tag);
      tagsStore.setTag(tag);
    }

    return <span key={tag} className={classes} onClick={tagHandler}>{tag}</span>;
  });

  useEffect(() => {
    threadsStore.fetchThreads();
  }, [threadsStore, tagsStore.tag]);

  return (
    <div className="ui-button-group flex justify-center py-6">
      {renderTags}
    </div>
  );
}
