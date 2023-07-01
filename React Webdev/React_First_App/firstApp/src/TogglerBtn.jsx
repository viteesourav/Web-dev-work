import { useState } from "react"

export default function TogglerBtn(){
    const [btnFace, setBtnFace] = useState(true);
    const handleBtnFace = () => {
        setBtnFace(!btnFace);
    };
    return (
        <div>
            <button style={{
                fontSize:"2em",
                fontWeight:"700",
                border:"2px solid blue",
                cursor: "pointer"  
            }} onClick={handleBtnFace}> Click Me {btnFace ? <>&#128513;</> : <>&#128557;</> } </button>
        </div>
    )
}