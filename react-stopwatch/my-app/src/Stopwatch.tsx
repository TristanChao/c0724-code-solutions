import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import './Stopwatch.css';

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handleStart() {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    setIntervalId(interval);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  function handleReset() {
    if (!intervalId) {
      setSeconds(0);
    }
  }

  return (
    <div>
      <div onClick={handleReset} className="outline">
        <span className="time">{seconds}</span>
      </div>
      {intervalId ? (
        <FaPause onClick={handlePause} className="pause-styles" />
      ) : (
        <FaPlay onClick={handleStart} className="play-styles" />
      )}
    </div>
  );
}
