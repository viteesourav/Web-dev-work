import { useState } from "react";

const randColorCode = () => (Math.floor(Math.random()* 254)+1);

export default function RandColorBox() {
    const[bgColor, setBgColor] = useState(`rgb(${randColorCode()},${randColorCode()}, ${randColorCode()})`)
    const handleColorpicker = () => {
        //console.log(`rgb(${randColorCode()},${randColorCode()}, ${randColorCode()})`);
        setBgColor(`rgb(${randColorCode()},${randColorCode()}, ${randColorCode()})`);
    };
    return(
        <div style={{
            border: '2px solid white',
            height: '5rem',
            width: '5rem',
            cursor:'pointer',
            backgroundColor: bgColor
        }} onClick={handleColorpicker}>
        </div>
    )
}