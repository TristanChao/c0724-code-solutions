import { useState } from 'react';
import { HotButton } from './HotButton.tsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  let heat: string;
  if (count < 18) {
    heat = Math.floor(count / 3).toString();
  } else {
    heat = '6';
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <HotButton heat={heat} onButtonClick={handleClick} />
    </>
  );
}

export default App;
