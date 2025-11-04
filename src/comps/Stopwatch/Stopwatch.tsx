import { useState, useRef } from "react";
import styles from "./Stopwatch.module.css";

export default function Stopwatch() {
  // Create a ref that persists
  const startTimeRef = useRef<number | null>(null); 
  const [now, setNow] = useState<number>(Date.now());

  // Updates the timer
  const update = () => {
    setNow(Date.now()); // Triggers a UI update
    requestAnimationFrame(update);
  };

  // Starts the timer
  const handleStart = () => {
    startTimeRef.current = Date.now();
    requestAnimationFrame(update);
  };

  
  let timeElapsed = 0;
  
  if (startTimeRef.current !== null) {
    timeElapsed = (now - startTimeRef.current) / 1000;
  }
  
  const handleLog = () => {
    // TODO -> Make a textarea and log to it using state
    // WIP -> Temporary logging of the current time elapsed
    console.debug(timeElapsed.toFixed(2));
  };
  
  return (
    <div className={styles.stopwatchWrapper}>
      <p>Seconds passed: {timeElapsed.toFixed(2)} seconds</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleLog}>Log</button>
    </div>
  );
}
