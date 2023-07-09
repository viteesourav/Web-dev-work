import { useState } from "react"

export default function FirstForm() {
    const[textVal, setTextVal] = useState("");
    const handleTextBoxUpdate = (e) => {
        setTextVal(e.target.value);
    }
    return (
        <div>
            <label htmlFor="username">Enter Username: </label>
            <input id="username" type="text" placeholder="Enter Text" value={textVal} onChange={handleTextBoxUpdate}/>
            <button style={{
                margin: "1rem"
            }}>Click Me</button>
        </div>
    )
}