import React, { useEffect, useState } from 'react'

//without Custom Hook...
//This Component shows a simple useCase of updating document Title with counter...
function TitleUpdateOne() {
    const[count, setcount] = useState(0);

    //Want to update the Document title wheneve the count chnages...
    useEffect(()=> {
        document.title = `CurrCount: ${count}`;
    }, [count]);

    return (
        <div>
            <button onClick={()=> setcount(prevCount => prevCount+1)}>count: {count}</button>
        </div>
    )
}

export default TitleUpdateOne