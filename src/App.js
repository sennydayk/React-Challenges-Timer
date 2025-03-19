import "./styles.css";
import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {mins} mins </span>
      <span> {secs} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
