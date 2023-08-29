import React, { useEffect, useRef } from 'react'

function FocusInput() {

    //definied useRef hook to create a ref, that can be attached to the input...
    const inputRef = useRef(null);  //intial value of ref is null

    //Happens whenever the component loads...
    useEffect(()=> {
        console.log('###Fetching the DOM Node for input field');
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" name="textField" id="userId" />
        </div>
    )
}

export default FocusInput