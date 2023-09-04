import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      intervalId = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);
      setTimerId(intervalId);
    } else {
      clearInterval(timerId);
    }
  }, [startTimer]);
  return (
    <div className="container">
      <h1>{time}</h1>
      <div>
        <button onClick={() => setStartTimer(true)}>Start</button>
        <button onClick={() => setStartTimer(false)}>stop</button>
      </div>
    </div>
  );
};

export default Timer;
