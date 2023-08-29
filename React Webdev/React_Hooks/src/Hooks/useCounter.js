import { useReducer } from "react"

//Custom Hook to handle Count for increment and decrement and reset...
function useCounter(initial=0, countStep=1) {
  
    //reducerHook to handle and update the counter State...
    const[counterCount, dispatch] = useReducer((currState, action)=> {
        const{type} = action;
        switch(type) {
            case 'increment':
                return currState + countStep;
                break;
            case 'decrement':
                return currState - countStep;
                break;
            case 'reset':
                return initial;
                break;
            default:
                return currState;
        }
    }, initial);

  //Helper function...[Takes param as action and pass it to dispatch]
  const updateCounter = (actionType) => {
    dispatch({type: actionType});
  }

  return [counterCount, updateCounter];

}

export default useCounter