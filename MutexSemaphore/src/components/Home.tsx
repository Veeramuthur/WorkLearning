import React from 'react';
import { useMutex } from '../components/useMutex';
import { useSemaphore } from '../components/useSemaphore';

const Home = () => {
    return (
        <>
          <MutexExample/>
          <SemaphoreExample/>
        </>
    )
}

export default Home
