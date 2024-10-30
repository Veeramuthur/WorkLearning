import { useState, useEffect } from 'react';

function CT_Stopwatch() {
  const [time, setTime] = useState<number>(0); // Time in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Start/stop timer based on isRunning state
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    } else 
        if (interval !== null) {
            clearInterval(interval);
          }
    

    // Cleanup interval on component unmount or when isRunning changes
    return () =>  {
        if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  // Start or stop the stopwatch
  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Reset the stopwatch
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: '2em', margin: '20px' }}>{formatTime()}</div>
      <button onClick={handleStartStop} style={{ marginRight: '10px' }}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CT_Stopwatch;
