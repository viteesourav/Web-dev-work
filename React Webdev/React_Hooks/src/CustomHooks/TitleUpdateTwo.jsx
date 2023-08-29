import React from 'react'
import useDocumetTitle from '../Hooks/useDocumetTitle'

//with Custom Hook...
//This Component shows a simple useCase of updating document Title with counter...
function TitleUpdateTwo() {
    
    //using the custom hook i created for updating document count...
    const[counter, incrementCount] = useDocumetTitle(5);

    return (
        <div>
            <button onClick={incrementCount}>Count: {counter}</button>
        </div>
    )
}

export default TitleUpdateTwo