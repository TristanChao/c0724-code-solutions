import { useState } from 'react';
import { Topic } from './Topic.tsx';

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
    const topic = (
      <Topic
        id={topics[i].id}
        title={topics[i].title}
        key={topics[i].id}
        content={topics[i].content}
        isDisplayed={topics[i].id === displayId}
        onHeaderClick={setDisplayId}
      />
    );
    topicBoxArray.push(topic);
  }

  return <div className="accordion">{topicBoxArray}</div>;
}
