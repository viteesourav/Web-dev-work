import React, { useState } from 'react'

//Without Custom Hook...
//Shows two State Bound Input fields...
function InputterBindOne() {

    //State to keep track of the input Field...
    const[firstName, setFirstName] = useState('No');
    const[lastName, setLastName] = useState('Custom Hook');

    //functions to update the state as we type...
    const handleOnFNameChange = (evt) => {
        setFirstName(evt.target.value);
    }

    const handleOnLNameChange = (evt) => {
        setLastName(evt.target.value);
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        alert(`HI! ${firstName} ${lastName}`)
    }

    return (
        <div>
            <input type="text" name="firstName" id="Fname" value={firstName} onChange={handleOnFNameChange} />
            <input type="text" name="lastName" id="LName" value={lastName} onChange={handleOnLNameChange} />
            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

export default InputterBindOne