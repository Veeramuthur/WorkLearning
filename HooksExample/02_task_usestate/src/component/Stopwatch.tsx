import { useState } from 'react'
const Stopwatch = () => {

    const [currentTime, setCurrentTime] = useState<string | number>('');

    const start = () => {

        const startTime = new Date(Date.now());
        const milliseconds = startTime.getMilliseconds();
        const timeString = startTime.toLocaleTimeString([], { hour12: false });
        setCurrentTime(`${timeString}.${milliseconds.toString().padStart(3, '0')}`);
    }

    const stop = () => {


    const stopTime = new Date(Date.now());
    const milliseconds = stopTime.getMilliseconds();
    const timeString = stopTime.toLocaleTimeString([], { hour12: false });
    setCurrentTime(`${timeString}.${milliseconds.toString().padStart(3, '0')}`);

    }

    const reset = () => {
        setCurrentTime(0);
    }



    return (
        <div>
            <h1>stopwatch</h1>

            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
            <p>{currentTime}</p> 


        </div>
    )
}

export default Stopwatch
