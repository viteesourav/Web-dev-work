import React, { useEffect, useState } from 'react'

function Counter() {
    const[stateVar, setStateVar] = useState({
        count: 0,
        firstName: '',
        lastName: ''
    });

    //handle side-Effects using useEffect... [The title of the document updats as counter Value]
    useEffect(() => {
        document.title = `Counter Clicked ${stateVar.count} times`;
    }, [stateVar]);

    // functions to hanlde state Updates.....
    const handleOnClick = () => {
        setStateVar(prevState => (
            {
                ...prevState,
                count: prevState.count+1
            }
        ))
    }
    
    const handleReset = () => {
        setStateVar({
            count: 0,
            firstName: '',
            lastName: ''
        });
    }

    
    const handleDecrement = () => {
        setStateVar(prevState => ({
            ...prevState,
            count: prevState.count-1 
        }))
    }

    const handleOnInputChange = (evt) => {
        setStateVar(prevState => (
            {
                ...prevState,
                [evt.target.name]: evt.target.value
            }
        ))
    }

    return (
        <>
            <div>
                <p>{`The Counter says: ${stateVar.count}`}</p>
                <button onClick={handleOnClick}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Rest</button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '1.4rem'}}>
                <p>{`Your Name: ${stateVar.firstName} ${stateVar.lastName}`}</p>
                <input type="text" name="firstName" value={stateVar.firstName} onChange={handleOnInputChange} />
                <input type="text" name="lastName" value={stateVar.lastName} onChange={handleOnInputChange} />
            </div>
        </>
    )
}

export default Counter