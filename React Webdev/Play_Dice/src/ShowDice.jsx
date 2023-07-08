import Dice from "./Dice";

function ShowDice({rollList, diceColor, isWinBoxBorder, handleDiceClick}) {
    const winBoxBorderColor = isWinBoxBorder ? "3px solid green" : "2px solid slategrey";
    return(
        <div style={{
            border: winBoxBorderColor,
            padding: "1em 0 1em 0",
            textAlign: "center",
            margin: "1em auto 1em auto",
            borderRadius: "10px"
        }}>
            {
                rollList.map((diceRoll, index)=>(
                    <Dice val={diceRoll} key={index} diceColor={diceColor} handleBoxClick={()=>handleDiceClick(index)}/>
                ))
            }
        </div>
    )
}

export default ShowDice;