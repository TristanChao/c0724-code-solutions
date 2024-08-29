import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch.tsx';
import './App.css';

function App() {
  const [switchStatus, setSwitchStatus] = useState(true);

  let labelText = '';
  if (switchStatus) {
    labelText = 'On';
  } else {
    labelText = 'Off';
  }

  const switchClass = labelText.toLowerCase();

  function handleToggle() {
    if (switchStatus) {
      setSwitchStatus(false);
    } else {
      setSwitchStatus(true);
    }
  }

  return (
    <div id="container">
      <ToggleSwitch switchClass={switchClass} onToggle={handleToggle} />
      <span>{labelText}</span>
    </div>
  );
}

export default App;
