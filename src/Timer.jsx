import { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (timerId === null) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      setTimerId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
    setTime(0);
  };

  return (
    <div>
      <h2>Timer: {time} sec</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;

