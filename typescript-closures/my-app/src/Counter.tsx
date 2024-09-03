import { useCallback, useEffect, useState } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const handleGetData = useCallback(() => {
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    const data = handleGetData();
    setData(data);
    setCounter((prev) => prev + 1);
  }, [handleGetData]);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
