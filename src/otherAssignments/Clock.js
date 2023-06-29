import React, { useEffect, useState } from "react";

const Clock = () => {
    // let sec = 0;

    const [time, setTime] = useState(0);
    const [lapsTime, setlapsTime] = useState([]);
    const [stop, setStop] = useState(true);

    useEffect(() => {
        let timeout;

        if (!stop) {
            timeout = setInterval(() => {
                setTime((val) => val + 10);
            }, 1);
        } else if (!time <= 0 && stop) {
            setlapsTime([...lapsTime, time]);
            console.log(time);
        }

        return () => clearInterval(timeout);
    }, [stop]);

    const formatTime = (timeInMilliseconds) => {
        const time = new Date(timeInMilliseconds);
        return time.toISOString().slice(11, -1);
    };

    const stopStart = () => {
        setStop((prev) => !prev);
    };

    return (
        <div>
            <h2>{formatTime(time)}</h2>
            <button onClick={stopStart}>{stop ? "Start" : "Stop"}</button>
            <button onClick={() => setlapsTime([...lapsTime, time])}>
                Register
            </button>
            <button
                onClick={() => {
                    setTime(0);
                    setlapsTime([]);
                }}
            >
                Reset
            </button>
            {lapsTime.map((prevTime, index) => {
                return <h2 key={index}>{formatTime(prevTime)}</h2>;
            })}
        </div>
    );
};

export default Clock;
