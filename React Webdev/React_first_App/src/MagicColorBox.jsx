import { useState } from "react"
import RandColorBox from "./RandColorBox"

export default function MagicColorBox({rows}) {
    console.log('Component Finished Rendering !!');
    
    let colorStrips = [];
    for(let i=0;i<rows;i++) {
        let colorList = [];
        for(let j=0;j<rows;j++){
            colorList.push(<RandColorBox />);
        }
        colorStrips.push(colorList);
    }

    //console.log(colorStrips);
    
    return(
        <div>
            {colorStrips.map((ele, i)=>(
                    <div style={{display:"flex"}}>{ele}</div>
                ))
            }
            {//The Above code is same as rendering the below part 5 times...
            /* <div style={{
                display:"flex"
            }}>
            <RandColorBox />
            <RandColorBox />
            <RandColorBox />
            <RandColorBox />
            <RandColorBox />
            </div> */}
        </div>       
    )
}