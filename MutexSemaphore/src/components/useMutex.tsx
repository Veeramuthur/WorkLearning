import React, { useState } from 'react';

// A simulated Mutex
const useMutex = () => {
  const [locked, setLocked] = useState(false);

  const lock = () => setLocked(true);
  const unlock = () => setLocked(false);

  const execute = async (fn: () => Promise<void>) => {
    if (!locked) {
      lock();
      try {
        await fn();
      } finally {
        unlock();
      }
    }
  };

  return { execute, locked };
};

const MutexExample = () => {
  const { execute, locked } = useMutex();

  const handleClick = async () => {
    await execute(async () => {
      console.log("Executing critical section...");
      await new Promise((resolve) => setTimeout(resolve, 9000)); // Simulate a task
      console.log("Finished execution");
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={locked}>
        {locked ? 'Operation in Progress...' : 'Start Operation'}
      </button>
    </div>
  );
};

export default MutexExample;
