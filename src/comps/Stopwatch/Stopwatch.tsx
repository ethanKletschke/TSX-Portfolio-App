import { useState, useRef } from "react";
import styles from "./Stopwatch.module.css";

export default function Stopwatch() {
  const startTimeRef = useRef<number | null>(null); 
  const [now, setNow] = useState<number>(Date.now());


  const update = () => {
    setNow(Date.now()); 
    requestAnimationFrame(update);
  };

  const handleStart = () => {
    startTimeRef.current = Date.now();
    requestAnimationFrame(update);
  };

  const handleLog = () => {

  };

  let secondsPassed = 0;

  if (startTimeRef.current !== null) {
    secondsPassed = (now - startTimeRef.current) / 1000;
  }

  return (
    <div className={styles.stopwatchWrapper}>
      <p>Seconds passed: {secondsPassed.toFixed(4)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleLog}>Log</button>
    </div>
  );
}
