
import { useState, useEffect } from "react"

const RealTimeClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateClock = () => {
            setCurrentTime(new Date());
        }

        // Set up an interval to call updateClock every second 
        const timeId = setInterval(updateClock, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(timeId);
        }
    }, []) // Empty dependency array ensures this runs only once


    return (
        <div>
            <h1>Real Time Clock</h1>
            <p>
                {currentTime.toLocaleTimeString()}
            </p>
        </div>
    )
}

export default RealTimeClock
