import { useState } from "react";

export default function ScoreTracker({NoOfPlayers, winPoint}) {
    
    const[scoreList, setScoreList] = useState(new Array(NoOfPlayers).fill(0));
    const[isWinnerFound, setIsWinnerFound] = useState({winState: false, playerIndex: -1});
    
    //function to handle when player button is Clicked...
    const handleOnBtnClick= (index) => {
        setScoreList((oldScoreList)=>(
            oldScoreList.map((score, i)=>{
                if(index === i) { 
                    if(score+1 === winPoint) {
                        setIsWinnerFound((oldWinner)=>({...oldWinner, winState: true, playerIndex: index}));
                    }
                    return score+1; 
                } else {
                    return score;
                }
            })
        ))
    }

    const resetFun = () => {
        setIsWinnerFound({winState: false, playerIndex: -1});
        setScoreList(new Array(NoOfPlayers).fill(0));
    }

    return (
        <div>
            <h2>Showing all Players Scores [Score {winPoint} Points to win the Game]</h2>
            <ul>
                {scoreList.map((score, index) => {
                 return (
                    <div key={index}>  
                        <li style={{marginBottom: "0.5rem"}}>
                            <span> player {index+1} Score: {score} </span> 
                            <button onClick={()=>{
                                if(!isWinnerFound.winState) handleOnBtnClick(index);
                            }}>Score++ </button>
                            {(isWinnerFound.playerIndex === index && isWinnerFound.winState && <span style={{color: "green"}}> Winner is here ! </span>)}
                        </li>
                    </div>
                 )
                })}
            </ul>
            <button onClick={resetFun}>Rest Game</button>
        </div>
    )
}