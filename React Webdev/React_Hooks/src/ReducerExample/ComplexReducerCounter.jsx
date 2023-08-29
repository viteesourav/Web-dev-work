import React, { useReducer } from 'react'

//defining the initail state value...
const intialStateVal = {
    counter1: 0,
    counter2: 5
};

//reducer function handles the update of newstate based on action's condition...
//Here action Obj has 3 keys: type, countStep and isCounter1...
//Also State is Obj, so we need to use ObjState update syntax [use spread operator] while returning the new state...
const reducer = (currState, action) => {
    const{type, countStep, isCounter1} = action; //destructing the action for easy use..
    switch(type) {
        case 'increment':
            return (isCounter1) ? 
            {...currState, counter1: currState.counter1+countStep}
            : {...currState, counter2: currState.counter2+countStep};
            break;
        case 'reset':
            return (isCounter1) ? 
            {...currState, counter1: intialStateVal.counter1}
            : {...currState, counter2: intialStateVal.counter2};
            break;
        default:
            return currState;
    }
}

//This component implements a complex useReducer hook with  state and oction as onject. [**Gives more control over state Update**]
function ComplexReducerCounter() {
    //Here the counter is an object that holds state for both the couneters...
    const[counter, dispatch] = useReducer(reducer, intialStateVal);

    /*
    For this example....
    dispatch is a function, that takes action, Here action is obj taking 3 things
    1) type: specify how to update state, 
    2) countStep: specify how much to update.
    3) isCounter1: specify which counter's state to update...
    */
    return (
        <div>
            <h2>This shows a simple Counter implemented using useReducer hook</h2>
            <div>
                <h2>Counter 1: {counter.counter1}</h2>
                <button onClick={()=> dispatch({type: 'increment', countStep: 1, isCounter1: true}) }>Incremet by 1</button>
                <button onClick={()=> dispatch({type: 'increment', countStep: 5, isCounter1: true}) }>decrement by 5</button>
                <button onClick={()=> dispatch({type:'reset', isCounter1: true}) }>Reset Counter</button>
            </div>
            {/* This is a second counter with its own independent state but same behaviour as counter 1 */}
            <div>
                <h2>Counter 2: {counter.counter2}</h2>
                <button onClick={()=> dispatch({type: 'increment', countStep: 1, isCounter1: false}) }>Incremet by 1</button>
                <button onClick={()=> dispatch({type: 'increment', countStep: 5, isCounter1: false}) }>decrement by 5</button>
                <button onClick={()=> dispatch({type:'reset', isCounter1: false}) }>Reset Counter</button>
            </div>
        </div>
    )
}

export default ComplexReducerCounter