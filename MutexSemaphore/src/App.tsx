import React from 'react';
import MutexExample from './components/useMutex';
import SemaphoreExample from './components/useSemaphore';

const App = () => {
  return (
    <div>
      <h1>Mutex and Semaphore Examples</h1>

      <section>
        <h2>Mutex Example</h2>
        <MutexExample />
      </section>

      <section>
        <h2>Semaphore Example</h2>
        <SemaphoreExample />
      </section>
    </div>
  );
};

export default App;
