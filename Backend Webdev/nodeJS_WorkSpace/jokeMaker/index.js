const joke = require('give-me-a-joke');
const color = require('colors')
//see what are the methods exports available for the package..
console.log(joke);

//printing a random joke
console.log("printing a dad Joke:");
joke.getRandomDadJoke((joke) => {
    console.log(joke.rainbow);  //.rainbow is coming from the the color package.
})