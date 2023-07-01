export default function DoubleDice() {

    const dice1 = Math.floor(Math.random()*6) + 1;
    const dice2 = Math.floor(Math.random()*6) + 1;
    const result = (dice1 === dice2) ? true:false;
    const borderSkin = result ? {border: "4px solid green"} : {border: "4px solid red"};
    return (
        <div>
            <div style={{...borderSkin, borderRadius: "50px", margin: "20px 0"}}>
                {result ? <h3>You Win &#128522;</h3> : <h3>You Loose &#128528; </h3>}
                <h3>Your Dice Rolled {dice1} And {dice2}</h3>
                {!result && <h4>Better Luck Next time !</h4>}
            </div>
        </div>
    )

}