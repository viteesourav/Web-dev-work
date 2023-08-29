import React, { createContext, useReducer } from 'react'
import ChildCompA from './ChildCompA'
import ChildCompB from './ChildCompB'


//Defining the initalState and reduce function for useReducer...
const initialState = {
    count: 0
};

const reduce = (state, action) => {
    const{type, counterStep=1} = action;
    switch(type) {
        case 'increment':
            return {
                ...state,
                count: state.count + counterStep
            }
            break;
        case 'decrement':
            return {
                ...state,
                count: state.count + counterStep
            }
            break;
        case 'reset':
            return {
                count: initialState.count
            }
            break;
        default:
            return state;
    }
}

//defining a context that takes the counter and dispatch fun returned by the useReducer...
export const GlobalStateContext = createContext();

//You have parent Component with a state, ChildCompA and ChildCompB should be able to access the state.
//NOTE: ChildCompA and ChildCompB can be deeply nested in hirachy, thus will use Context to shae State and methods. 
function ParentComp1() {
  
    const[counter, dispatch] = useReducer(reduce, initialState);
    const {count} = counter;

    return (
        <div>
            <h3>{`Global Counter From ParentComp1: ${count}`}</h3>
            <GlobalStateContext.Provider value={{gCounter: counter, gdispatch: dispatch}}>
                <ChildCompA />
                <ChildCompB />
            </GlobalStateContext.Provider>
        </div>
    )
}

export default ParentComp1