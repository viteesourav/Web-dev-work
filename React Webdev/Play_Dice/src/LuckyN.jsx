import { useState } from "react";
import ShowDice from "./ShowDice";
import { generateRandomNum ,rollDice  } from "./utils";
import LuckyNBtn from "./LuckyNBtn";

function LuckyN({title, numDice = 2, winChecker, targetGoal}) {
    const[diceList, setDiceList] = useState(()=>rollDice(numDice));
    const isWinner = targetGoal ? winChecker(diceList, targetGoal): winChecker(diceList);
    const refreshGame = () => {
        setDiceList(rollDice(numDice));
    }
    const onDiceClick = (index) => {
        setDiceList((diceList) => {
            return diceList.map((val, i)=>(i===index ? generateRandomNum() : val));
        })
    }
    return(
        <main>
            <h2 style={{
                textAlign:"start"
            }}>{title} {targetGoal && <span> [ Target is {targetGoal} ] </span>}</h2>
            {isWinner && <span style={{
                color: "green",
                fontSize: "1.2em",
                fontWeight: "600"
            }}> You Win </span>}
            <ShowDice rollList={diceList} isWinBoxBorder={isWinner} handleDiceClick={onDiceClick}/>
            {/* <button onClick={refreshGame}>Re-Roll Dice</button> */}
            <LuckyNBtn title="Re-Roll Dice" execOnClick={refreshGame} bgColor="blue" />
        </main>
    )

}

export default LuckyN;