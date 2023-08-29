import React, { useReducer } from 'react'

//defining the initail state value...
const intialStateVal = 0;
const intialStateVal2 = 5;

//reducer function handles the update of newstate based on action's condition...
const reducer = (currState, action) => {
    switch(action) {
        case 'increment':
            return currState+1;
            break;
        case 'decrement':
            return currState-1;
            break;
        case 'reset':
            return intialStateVal;
            break;
        default:
            return currState;
    }
}
//NOTE: default case: we are just returning the currentState..

//This component implements a simple useReducer hook with simple state...
function SimpleReducerCounter() {
    //lets define a simple useReducer hook to manage the count state...
    const[counter, dispatch] = useReducer(reducer, intialStateVal);
    
    //If i want one more counter with same state behavior...[example of multiple useReducer]
    const[counter2, dispatchCounter2] = useReducer(reducer, intialStateVal2);
    return (
        <div>
            <h2>This shows a simple Counter implemented using useReducer hook</h2>
            <div>
                <h2>Counter 1: {counter}</h2>
                <button onClick={()=>{dispatch('increment')}}>Incremet by 1</button>
                <button onClick={()=>{dispatch('decrement')}}>decrement by 1</button>
                <button onClick={()=>{dispatch('reset')}}>Reset Counter</button>
            </div>
            {/* This is a second counter with its own independent state but same behaviour as counter 1 */}
            <div>
                <h2>Counter 2: {counter2}</h2>
                <button onClick={()=> dispatchCounter2('increment')}>Incremet by 1</button>
                <button onClick={()=> dispatchCounter2('decrement')}>decrement by 1</button>
                <button onClick={()=> dispatchCounter2('reset')}>Reset Counter</button>
            </div>
        </div>
    )
}

export default SimpleReducerCounter