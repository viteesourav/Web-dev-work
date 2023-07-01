import { useState } from "react"

export default function IncrementCount() {
   const [num, setNum] = useState(5);
    
   return(
        <div>
            <p>The Count is: {num}</p>
            <button onClick={()=>{
                setNum(num+1);
            }}>Increment</button>
        </div>
    )
}