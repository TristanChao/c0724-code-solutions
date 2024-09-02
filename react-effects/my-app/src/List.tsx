/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  console.log('render');

  useEffect(() => {
    async function read() {
      try {
        const response = await readItems();
        if (!response) throw new Error('Response failed.');

        setIsLoading(false);
        setItems(response);
      } catch (err) {
        setIsLoading(false);
        setError(err);
        console.error(err);
      }
    }

    read();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
