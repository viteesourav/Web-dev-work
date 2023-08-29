import React, { useEffect, useState } from 'react'

//This component shows how the dependecy array of useEffect Hook can cause issue.. [be careful using dependecy array]
//NOTE: If useEffect uses any state, do mention it in dependecy array, Also If state is obj do the prevState update [This will work even if state is not in dependecy array]
//NOTE: dependecy Array: Look for any changes happening for the mentioned state or prop, IF empty, ignore all and just run once.
function AutoIncrementCount() {
    const[counter, setCounter] = useState(0);

    //a function that the interval timer uses..
    const task = () => {
        console.log('Count Updating...');
        // setCounter(counter+1);
        //NOTE: This will stuck at 1, as you need to mention the counter state in the dependecy arr..
        // Basically this way of updating, will stop rendering the comp, => If no re-render happens then no update to Screen.
        //When we add counter as dependecy, On eveytime counter updates, It triggers re-render.
        

        //This works expected without any dependecy array as prevstate keep track of counter...
        setCounter(prevState => prevState+1); 

    }

    //Have a useEffect that starts a IntervalTimer as the comp Load...
    useEffect(()=>{
        // Every 1 sec it will increment the count...
        console.log('Setting up the Interval Timer');
        const timer = setInterval(task ,1000);

        //You need to remove the timer from memory once the comp unmount...
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
    <div>
        {console.log('Comp is rendering...')}
        <h3>{`Your count is ${counter}`}</h3>
    </div>
  )
}

export default AutoIncrementCount