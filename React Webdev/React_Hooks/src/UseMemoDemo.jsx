import React, { useMemo, useState } from 'react'

//This shows how to handle slow functions with useMemo hook.
//counter1: attached a slow function, counter2: normal funtion.
function UseMemoDemo() {

    const[counter1, setCounter1] = useState(5);
    const[counter2, setCounter2] = useState(10);

    //A function that takes a lot of time...
    //without useMemo Hook...
    // const isEven = () => {
    //     for(let i =0; i< 80000000; i++);
    //     return counter1%2 == 0;
    // }

    /*
    NOTE: Since on every re-render the isEven Func Runs and compute the value, It will make the whole re-render slow.
         Solution: 
         -- useMemo hook, It will execute the slow function only when counter1 state updates
         -- It presev the prev fun data for any re-render not related to counter1 state.       
    */

    //with useMemo Hook...
    const isEven = useMemo(() => {
        for(let i =0; i< 80000000; i++);
        return counter1%2 == 0;
    }, [counter1]);

    //here useMemo, makes counter2 run normal, counter1 runs a heavy function, so it caches it's result.
    return (
        <div>
            <div>
                <h2>Counter1 - {counter1} <span>{isEven ? 'Even' : 'Odd'}</span></h2>
                <button onClick={()=> setCounter1(prevCount => prevCount+1)}>Increment</button>
            </div>
            <div>
                <h2>Counter2 - {counter2}</h2>
                <button onClick={()=> setCounter2(prevCount => prevCount+1)}>Increment</button>
            </div>
        </div>
    )
}

export default UseMemoDemo