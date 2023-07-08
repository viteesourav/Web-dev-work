import { useState } from "react"

export default function Counter() {

    const[count, setCount] = useState(0);
    const handleClick = () => {
        // setCount(count+1);
        setCount((count)=>(count+1));
        // console.log(`count is ${count}`);
    }
    return(
        <div>
            <p>Count is: {count}</p>
            <button onClick={handleClick}>Click to Add 1</button>
        </div>
    )
}