// const p1Btn = document.querySelector('#p1Btn');
// const p2Btn = document.querySelector('#p2Btn');
// const resetBtn = document.querySelector('#reset');
// const p1score = document.querySelector('#plyOneScore');
// const p2score = document.querySelector('#plyTwoScore');
// const maxWinScore = document.querySelector('#winScore');

// let winningScore = 5;  //deafult value for winning score..
// let gameOver = false;

// //update the winning the score and rest the game.
// //will listen to change event
// maxWinScore.addEventListener('change', function () {
//     //note: for this to refer to maxWinScore you have to define it as function () {}. If if you do this () => {} then this refers to windows object.
//     console.log(this);
//     winningScore = parseInt(this.value); //this refers to the current object.
//     console.log(`Max Game Score: ${winningScore}`);
//     reset();  //passing as a executable function
// });


// //player1 score update...
// p1Btn.addEventListener('click', ()=>{
//     let score = parseInt(p1score.innerText);
//     if(!gameOver) {
//         score++;
//         p1score.innerText = score;
//         if(score==winningScore) {
//             gameOver= true;
//             console.log("Player 1 Wins.");
//             p1score.classList.toggle('has-text-success');
//             p2score.classList.toggle('has-text-danger');
//             p1Btn.disabled = true;
//             p2Btn.disabled = true;
//         }
//     }  
// });

// //player2 score update...
// p2Btn.addEventListener('click', ()=>{
//     let score = parseInt(p2score.innerText);
//     if(!gameOver) {
//         score++;
//         p2score.innerText = score;
//         if(score==winningScore) {
//             gameOver= true;
//             console.log("Player 2 Wins.");
//             p2score.classList.toggle('has-text-success');
//             p1score.classList.toggle('has-text-danger');
//             p1Btn.disabled = true;
//             p2Btn.disabled = true;
//         }
//     }
// });

// //reset the score..
// resetBtn.addEventListener('click', reset);  //passing as a callback fucntion.

// //reset function
// function reset() {
//     p1score.innerText = '0';
//     p2score.innerText = '0';
//     gameOver = false;
//     console.log("Score Reset !");
//     p1score.classList.remove('has-text-success', 'has-text-danger');  //loose both theclasses
//     p2score.classList.remove('has-text-success','has-text-danger');
//     p1Btn.disabled = false;
//     p2Btn.disabled = false;
// }




// The above code will work but its not optimise, lets optimise it.

player1 ={
    "button": document.querySelector('#p1Btn'),
    "score": document.querySelector('#plyOneScore')
};
player2 ={
    "button": document.querySelector('#p2Btn'),
    "score": document.querySelector('#plyTwoScore')
};

const resetBtn = document.querySelector('#reset');
const maxWinScore = document.querySelector('#winScore');

let winningScore = 5;  //deafult value for winning score..
let gameOver = false;

//update the winning the score and rest the game.
//will listen to change event
maxWinScore.addEventListener('change', function () {
    //note: for this to refer to maxWinScore you have to define it as function () {}. If if you do this () => {} then this refers to windows object.
    console.log(this);
    winningScore = parseInt(this.value); //this refers to the current object.
    console.log(`Max Game Score: ${winningScore}`);
    reset();  //passing as a executable function
});

//common function to update the score...
function updateScore(currentPlayer, opponent) {
    let score = parseInt(currentPlayer.score.innerText);
    if(!gameOver) {
        score++;
        currentPlayer.score.innerText = score;
        if(score==winningScore) {
            gameOver= true;
            console.log("Player 1 Wins.");
            currentPlayer.score.classList.toggle('has-text-success');
            opponent.score.classList.toggle('has-text-danger');
            currentPlayer.button.disabled = true;
            opponent.button.disabled = true;
        }
    } 
}

//Note: Never write the function callbacks like this... It will execute the funct without waiting for the click...
// //player1 score update...
// player1.button.addEventListener('click', updateScore(player1,player2));

// //player2 score update...
// player2.button.addEventListener('click', updateScore(player2, player1));

// //reset the score..
// resetBtn.addEventListener('click', reset());  

//correct way of doing it...
//player1 score update...
player1.button.addEventListener('click', function() 
{
    updateScore(player1,player2)   //calling the function inside the callback funct
});

//player2 score update...
player2.button.addEventListener('click', function() 
{
    updateScore(player2, player1)
});

//reset the score..
resetBtn.addEventListener('click', reset);  //calling the reference to the reset function as callback.

//reset function
function reset() {
    player1.score.innerText = '0';
    player2.score.innerText = '0';
    gameOver = false;
    console.log("Score Reset !");
    player1.score.classList.remove('has-text-success', 'has-text-danger');  //loose both theclasses
    player2.score.classList.remove('has-text-success','has-text-danger');
    player1.button.disabled = false;
    player2.button.disabled = false;
}