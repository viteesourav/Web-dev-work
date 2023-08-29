import React from 'react'
import useInputter from '../Hooks/useInputter'

//With CustomHook...
//Implementing the State bound input method with custom hooks
function InputterBindTwo() {
    
    const[fNameInput, fNameInputBind, resetFName] = useInputter('');
    const[lNameInput, lNameInputBind, resetLName] = useInputter('');
    
    //Function to handle on Submit, Show Popup for first and lastName and then clear the fields...
    const handleOnSubmit = evt => {
        evt.preventDefault();
        alert(`HI! ${fNameInput} ${lNameInput}`);
        resetFName();
        resetLName();
    }

    return (
        <div>
            {/* <input type="text" name="firstName" id="Fname" value={firstName} onChange={handleOnFNameChange} />
            <input type="text" name="lastName" id="LName" value={lastName} onChange={handleOnLNameChange} /> */}

            {/* fNameInputBind and lNameInputBind will provide the value and onChange attribute respectively */}
            
            <input type="text" name="firstName" id="Fname" {...fNameInputBind} />
            <input type="text" name="lastName" id="LName" {...lNameInputBind} />    

            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

export default InputterBindTwo