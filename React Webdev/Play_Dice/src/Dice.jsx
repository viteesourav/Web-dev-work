function Dice({val, diceColor='slateblue', handleBoxClick}) {
    return (
        <div onClick={handleBoxClick}
        style={{
            backgroundColor: diceColor,
            borderRadius: "10px",
            color: "white",
            width: "3em",
            height: "2.5em",
            paddingTop: "0.6em",
            textAlign: "center",
            fontSize: "1.4em",
            fontWeight: "500",
            margin: "0.9em",
            display: "inline-block",
            cursor:"pointer"
        }}>
            {val}
        </div>
    )
}

export default Dice;