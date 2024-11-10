import { useEffect, useState } from "react"


const Sample = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(" Sample Component Count: " + count)

    }, [count]);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       console.log("Timer tick");
    //     }, 1000);

    //     // Cleanup function to clear the timer
    //     return () => clearInterval(timer);
    //   }, []);

    return (
        <div>
            <h1>Sample</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Sample
