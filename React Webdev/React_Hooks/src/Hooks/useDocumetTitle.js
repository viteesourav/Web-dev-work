import { useEffect, useState } from 'react'

//A Custom Hook method, takes initial count value and maintain a state and update the doc Title counter..
function useDocumetTitle(initalValue=0) {
  
    //setting up a state to keep track of the pageCount...
    const[counter, setCount] = useState(initalValue);

    //Update the Count to the document Title...
    useEffect(()=>{
        document.title = `Count: ${counter}`;
    }, [counter]);

    //A custom method to increment the counter...
    const incrementCount = () => {
        setCount(prevCount => prevCount+1);
    }

    
    //exporting state and stateUpdate fucntion to be used by other components...
    return [counter, incrementCount];

}

export default useDocumetTitle