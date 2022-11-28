let maximum = parseInt(prompt("Enter the maximum number"));

while(!maximum) {
    maximum = parseInt(prompt("Enter a Valid Number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let numberOfAttempts = 1;

let guess= prompt("Enter you Guess !");
while(parseInt(guess) !== targetNum) {
    if(guess === 'q')
    break;
    if(guess > targetNum)
       guess= prompt("Tooo High ! Try Again :)");
    else 
       guess= prompt("Tooo Low ! Try Again :)");
    numberOfAttempts++;
} 
if(guess === 'q')
    console.log("Okay Quitting !!!");
else
    console.log(`You got the number, it took you ${numberOfAttempts} guesses !`);