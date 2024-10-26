import React, { useState } from 'react';

// A simulated Semaphore with a given limit
const useSemaphore = (limit: number) => {
  const [count, setCount] = useState(0);

  const acquire = () => setCount((prev) => prev + 1);
  const release = () => setCount((prev) => prev - 1);

  const execute = async (fn: () => Promise<void>) => {
    if (count < limit) {
      acquire();
      try {
        await fn();
      } finally {
        release();
      }
    } else {
      console.log("Limit reached, please wait...");
    }
  };

  return { execute, count };
};

const SemaphoreExample = () => {
  const { execute, count } = useSemaphore(3); // Allow up to 3 concurrent operations

  const handleClick = async () => {
    await execute(async () => {
      console.log(`Executing operation ${count + 1}`);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a task
      console.log(`Finished operation ${count}`);
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={count >= 3}>
        {count >= 3 ? 'Max operations reached' : `Start Operation (${count}/3)`}
      </button>
    </div>
  );
};

export default SemaphoreExample;
