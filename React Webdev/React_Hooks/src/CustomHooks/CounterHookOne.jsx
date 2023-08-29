import React, { useState } from 'react'

//without Custom Hook...
//A Button that can either increment or decrement Counter...
function CounterHookOne() {

    const[counter, setCounter]=useState(0);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=> setCounter(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=> setCounter(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=> setCounter(0)}>Reset</button>
        </div>
    )
}

export default CounterHookOne