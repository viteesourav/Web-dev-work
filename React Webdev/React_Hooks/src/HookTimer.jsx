import React, { useEffect, useRef, useState } from 'react'

//This hook shows a timer, and a button to remove the timer.
//useRef is used to hold the timer instance throught all the re-renders [It make sure the value persist]
function HookTimer() {
    const[timer, setTimer] = useState(0);

    const InternalTimerRef = useRef(null);  //Note: This can hold any value through Component re-renders
    
    //Store all the required value in InternalTimerRef.current and use it whereever needed.
    // Advantages: It value will presist in re-renders and Change in it's value wont trigger any re-renders..
    //OnComponentMount...
    useEffect(()=>{
        InternalTimerRef.current = setInterval(()=> {
            setTimer(prevTime => prevTime + 1);
        }, 1000);

        //cleanup Code [ComponentDidUnmount]
        return () => {
            clearInterval(InternalTimerRef.current);
        }
    }, []);

    return (
        <div>
            <h1>Timer: {timer}</h1>
            <button onClick={()=>clearInterval(InternalTimerRef.current)}>Clear Timer</button>
        </div>
    )
}

export default HookTimer