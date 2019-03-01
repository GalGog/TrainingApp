import React from 'react';

setInterval(Tick, 1000);

const   Tick = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>

    )
};

export  default Tick;