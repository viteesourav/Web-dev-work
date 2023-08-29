import React from 'react'
import useCounter from '../Hooks/useCounter'

//using Custom Hook:
//A counter that is capable to handling Increment, decrement and reset...
function CounterHookTwo() {
    
    const[counterCount, updateCounter] = useCounter(10, 5);
    const[counterCount2, updateCounter2] = useCounter(100, 100);
    
    return (
        <>
            <div>
                <h3>Count1: {counterCount}</h3>
                <button onClick={()=>updateCounter('increment')}>Increment</button>
                <button onClick={()=>updateCounter('decrement')}>Decrement</button>
                <button onClick={()=>updateCounter('reset')}>Reset</button>
            </div>
            <div>
                <h3>Count2: {counterCount2}</h3>
                <button onClick={()=>updateCounter2('increment')}>Increment</button>
                <button onClick={()=>updateCounter2('decrement')}>Decrement</button>
                <button onClick={()=>updateCounter2('reset')}>Reset</button>
            </div>
        </>
    )
}

export default CounterHookTwo