import { useState } from 'react';
import { TopicContent } from './TopicContent';
import { TopicHeader } from './TopicHeader';

type Topic = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  topics: Topic[];
};
export function Accordion({ topics }: Props) {
  const [displayId, setDisplayId] = useState<number>();

  const topicBoxArray: JSX.Element[] = [];

  for (let i = 0; i < topics.length; i++) {
    const header = (
      <TopicHeader
        id={topics[i].id}
        currentDisplayId={displayId}
        title={topics[i].title}
        key={`header${topics[i].id}`}
        onHeaderClick={setDisplayId}
      />
    );
    const content = (
      <TopicContent
        isDisplayed={topics[i].id === displayId}
        content={topics[i].content}
        key={`content${topics[i].id}`}
      />
    );
    topicBoxArray.push(header, content);
  }

  return <div className="accordion">{topicBoxArray}</div>;
}
