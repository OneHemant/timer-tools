import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // in milliseconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10); // every 10ms
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  // Calculate minutes, seconds, milliseconds
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  return (
    <div className="text">
      <h2>Timer</h2>
      <p>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(3, "0")}
      </p>

      <button className="buttons" onClick={() => setRunning(!running)}>Start | Stop</button>
      <button className="buttons" onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default App;
