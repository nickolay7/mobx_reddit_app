import {useState} from "react";
import classNames from "classnames";

export const Tags = () => {
  const [activeTag, setActiveTag] = useState('vue');

  const tags = ['react', 'vue', 'angular'];

  const renderTags = tags.map((tag) => {
    const isActive = tag === activeTag;
    const classes = classNames('ui-tag', { isActive })

    return <span className={classes} onClick={() => setActiveTag(tag)}>{tag}</span>;
  })

  return (
    <div className="ui-button-group flex justify-center py-6">
      {renderTags}
    </div>
  );
}
