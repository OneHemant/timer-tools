import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="text">
      <h2>Timer</h2>
      <p>{seconds}</p>

 
    
      <button className="buttons" onClick={() => setRunning(true)}>Start</button>
      <button className="buttons" onClick={() => setRunning(false)}>Stop</button>
      <button className="buttons" onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );  
}

export default App;
