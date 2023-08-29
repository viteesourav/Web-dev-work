import { useState } from "react"

//Custom Hook For Tracking Input State and hanlde onChange evt Bind...
function useInputter(inital) {
    //A state to hold the input value...
    const[inputter, setInputter] = useState(inital);

    //An object that holds the current Val and a function that can update the state...
    const evtBind = {
        value: inputter,
        onChange: (evt) => {
            setInputter(evt.target.value);
        }
    }

    //A function to reset the field value back to initial State...
    const resetInputter = () => setInputter(inital);

    return [inputter, evtBind, resetInputter];  //Returning both of them..
}

export default useInputter