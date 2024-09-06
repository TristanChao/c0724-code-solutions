import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <p>some above text</p>
      <Popup
        isOpen={isOpen}
        buttonRef={buttonRef}
        onShadeClick={() => setIsOpen(!isOpen)}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Popup>
      <p>some below text</p>
    </>
  );
}

export default App;
