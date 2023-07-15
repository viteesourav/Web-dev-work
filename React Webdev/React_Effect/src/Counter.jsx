import { useEffect, useState } from "react"

export default function Counter() {
    const[counter, setCounter] = useState(0);
    const[name, setName] = useState("");

    useEffect(function fun() {
        console.log('My Effect called !!');
    }, [counter]);
    
    const increment = () => {
        setCounter(c=>c+1);
    }
    
    const handleOnChange = (e) => {
        setName(e.target.value);
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Add +1</button>
            <h1>{name}</h1>
            <form>
                <input type="text" name="name" value={name} onChange={handleOnChange}/>
            </form>
        </div>
    )
}