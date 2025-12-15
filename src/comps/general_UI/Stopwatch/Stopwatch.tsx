import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Stopwatch.module.css";

export default function Stopwatch() {
  const startTimeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number>(null);
  const elapsedBeforePauseRef = useRef<number>(0);

  // The current time.
  const [now, setNow] = useState<number>(Date.now());
  // Is the stopwatch running?
  const [isRunning, setIsRunning] = useState<boolean>(false);
  // The laps.
  const [laps, setLaps] = useState<string[]>([]); // TODO -> Rename to "laps"

  // Unmount cleanup
  useEffect(() => {
    // Runs on unmount
    return () => {
      // Cancel the animation frame in case 
      cancelAnimationFrame(animFrameRef.current as number);
    };
  }, []); // Runs once on mount

  // Starts the timer
  const handleStart = () => {
    // If already running
    if (isRunning)
      return; // Don't run the function

    // Set start time to "now minus elapsedBeforePause"
    // so the timer resumes from where it left off
    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;
    setIsRunning(true);
    // Store the ID of the animation frame in a ref
    animFrameRef.current = requestAnimationFrame(updateTimer);
  };

  // Updates the timer
  const updateTimer = useCallback(() => {
    setNow(Date.now()); // Triggers a UI update
    // Store the ID of the animation frame in a ref
    animFrameRef.current = requestAnimationFrame(updateTimer);
  }, []); // No dependencies

  let timeElapsed = 0;

  // If the time started (isn't null)
  if (startTimeRef.current !== null) {
    // Get the time elapsed in seconds
    timeElapsed = (now - startTimeRef.current) / 1000;
  } else {
    // If stopped/cleared, show what we had before pausing
    timeElapsed = elapsedBeforePauseRef.current / 1000;
  }

  const handleLog = () => {
    if (timeElapsed === 0)
      return;

    // Store the log. This will also append it to the list.
    setLaps(prev => [...prev, timeElapsed.toFixed(2)])

    // Log the current elapsed time 
    console.log(timeElapsed.toFixed(2));
  };

  const handlePause = () => {
    if (!isRunning) {
      // Do not pause if the timer isn't running 
      return;
    }

    // Pause the timer
    cancelAnimationFrame(animFrameRef.current as number);
    setIsRunning(false); // Set the "running" flag to false

    // If the timer's start time is not null
    if (startTimeRef.current !== null) {
      // Store total time elapsed so far for resuming later
      elapsedBeforePauseRef.current = now - startTimeRef.current;
    }
  };

  // Resets the timer
  const handleClear = () => {
    // Stop the timer
    cancelAnimationFrame(animFrameRef.current as number);
    setIsRunning(false);

    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;

    setNow(Date.now());
    setLaps([]); // Empty the laps
  };

  return (
    <>
      <h3>Stopwatch</h3>
      <p>Seconds passed: {timeElapsed.toFixed(2)} seconds</p>

      <div className={styles.btnWrap}>
        <button onClick={handleStart} disabled={isRunning}>
          {elapsedBeforePauseRef.current > 0 ? "Resume" : "Start"}
        </button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleLog}>Log</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <h3>Log</h3>

      <ul className={styles.stopwatchLogs}>
        {laps.map((log, logIndex) => (
          <li key={logIndex}>
            {/* e.g.: Lap 1: 6.00s */}
            Lap {logIndex + 1}: {log}s
          </li>
        ))}
      </ul>
    </>
  );
}
