import React, { useState, useEffect } from 'react';

function Timer({ task, interval, onTimeUpdate }) {
  const [timeLeft, setTimeLeft] = useState(interval * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsActive(false);
            onTimeUpdate(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, interval, onTimeUpdate]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(interval * 60);
  };

  return (
    <div className="timer">
      <h2>Current Task: {task.name}</h2>
      <div>
        <span>Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</span>
      </div>
      <button onClick={handleStart} disabled={isActive}>Start</button>
      <button onClick={handlePause} disabled={!isActive}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
