import React, { useState, useEffect } from 'react';

function getTime() {
    return new Date().toLocaleTimeString();
}

export default function Timer() {
    
    const [time, setTime] = useState(getTime());
    const [intervalId, setIntervalId] = useState(null);

    function didMount () {
        let id = setInterval(() => {
            setTime(getTime());
        }, 100);
        setIntervalId(id);
    }

    function willUnmount() {
        clearInterval(intervalId);
    }

    function adminstrateTimer() {
        didMount();
        return willUnmount();
    }

    useEffect(adminstrateTimer, []);

    return (
        <p>{ time }</p>
    )
}