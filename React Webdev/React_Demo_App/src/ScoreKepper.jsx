import { useState } from "react"

export default function ScoreKepper() {

    const [Bgscore, setBgScore] = useState({p1Score: 0, p2Score: 0});
    const handleP1BtnClick = () =>(
        setBgScore((oldState)=>{
            console.log(oldState);
            return {...oldState, p1Score: oldState.p1Score+1}
        })
    );
    const handleP2BtnClick = () =>(
        setBgScore((oldState)=>{
            return {...oldState, p2Score: oldState.p2Score+1}
        })
    );
    return(
        <div>
           <p>player1 Score: {Bgscore.p1Score}</p> 
           <p>player2 Score: {Bgscore.p2Score}</p>
           <button style={{
            margin: "2rem"
           }} onClick={handleP1BtnClick}>Pl Score ++ </button> 
           <button onClick={handleP2BtnClick}>P2 Score ++ </button> 
        </div>
    )
}