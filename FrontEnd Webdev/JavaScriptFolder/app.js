console.log("Hiiiiii");
//let total = 5 +6;

//Conditional Statement
// let age = prompt("Enter your age");
// let age = 18;
// let generate a random age between 15 to 30
/*
let age = Math.floor(Math.random()*15)+15;
console.log(`age: ${age}`);
if(age < 18)
console.log("Okay you are not eligible");
else if(age>=18 && age<=25)
console.log("You can drink beer");
else
console.log("Eat whatever you want MAN !!!!");
*/

//Switch statement:
/*
const num = 56;
switch(num) {
    case 5:
        console.log("num is 5");
        break;
    case 56:
        console.log("num is 56");
        break;
    default:
        console.log("Default Code");
}
*/

//JS Arrays:
//We have push and pop(at the end), Shift and unshift.(at the begining)
//let arr= ["one", "Two", "Three", "Four"];
// console.log(arr);
// Change this to perform the operations on array
// const choice = 1;
// switch(choice){
//     case 1:
//         arr.push("Five");
//         console.log(arr);
//         break;
//     case 2:
//         arr.pop();
//         console.log(arr);
//         break;
//     case 3:
//         arr.shift();
//         console.log(arr);
//         break;
//     case 4:
//         arr.unshift("Zero");
//         console.log(arr);
//         break;
//     default:
//         console.log("Invalid Input !!");
// }

//ForOfLoop....
// const loopContains = ["one", "Two", "three", "Four", "five", "Six","seven", "eight"];

// for(let data of loopContains) {
//     console.log(data);
// }


//Functions....
//Scope we know, this example of Higher order function.
//function as parameter...
// const rollDice = function() {
//     let val = Math.floor(Math.random() * 6) +1; //generate a random number between 1-6
//     console.log(val);
// }

// const rollTheDice = function(fun) {
//     fun();
//     fun();
// }

// rollTheDice(rollDice);

//Function as Return Value....
//Lets create a function to categorize the age of people.
// function makeInBetween(min, max) {
//     return function(num) {
//         return num>=min && num <=max;
//     }
// }

// //Here this 3 are functions which will accept one age.
// const isChild = makeInBetween(0, 18);
// const isAdult = makeInBetween(19, 65);
// const Senior = makeInBetween(65, 120);

//we will call this as eg: isChild(5) --> true, isChild(45) --> false.

//Methods in Js...
//here we have a myMath Object and we will define functions inside as a property.
// const myMath = {
//     PI : 3.14159,           //A normal key and value...
//     square : function(num) {   // A function inside the object
//         return num*num;
//     },

//     cubic : function(num) { ///Another function inside the object
//         return num*num*num;
//     }
// }

//this keyword example...
// const animal = {
//     "name" : "Human",
//     "color" : "skin",
//     "breed" : "homosapians",
//     details() {
//         console.log(`This is animal ${this.name} with ${this.color} and ${this.breed}`)
//     }
// }

//Array methods....

//1) forEach...
 const arr = [3,4,5,6,7,2,4,3,7,8,4,2,5,7];

// //Simple example of forEach...
// arr.forEach(function(element) {
//     if(element %2 == 0)
//     console.log(element);
// });

const movieList = [
{
    name : "Spideyy",
    ratings: "5",
    year: "2013"
},
{
    name : "Doctor Strange",
    ratings: "7",
    year: "2022"
},
{
    name : "EndGame",
    ratings: "8",
    year: "2021"
},
{
    name : "Parasite",
    ratings: "6",
    year: "2019"
},
{
    name : "Fight club",
    ratings: "9",
    year: "2015"
},
{
    name : "Ender's Game",
    ratings: "7",
    year: "2016"
}
];
// // here the parameter obj will each element of that movieList array.
// movieList.forEach(function(obj) {
//     console.log(`Movie Name : ${obj.name} and ratings : ${obj.ratings}`);
// })


//2) Map

// const titleMovies = movieList.map(function(obj) {
//     return obj.name.toLocaleUpperCase();
// })

// console.log(titleMovies);

//3) Arrow fucntion....

//NOTICE: I have not mentioned the fucntion key word here..
// const titleMovies = movieList.map((obj)=>{
//     return obj.name.toLocaleUpperCase();
// });
// console.log(titleMovies);

//4) Filter function

//const evenNumber = arr.filter(num => {return num%2 == 0});

//Example combining map and Filter.(**gettig good movies Names based on Ratings**)
// const goodMoviesList = movieList.filter(obj => (obj.ratings >= 7))
//                                 .map(obj => obj.name.toLocaleUpperCase());


const examScore = [60,50,80,70,65,90,93,45,78,45,55,88,70];

//Some and Every
// const result = examScore.every(score => score >= 15); //true since all are above 15
// const result1 = examScore.every(score => score >= 75); //false since all scores are not above 75
// const result2 = examScore.some(score => score >= 75); //true since any one of the scores is above 75

//5) Reduce Fucntion (example--> sum of all scores in the array)
// const totalScore = examScore.reduce((totalVal, currentVal) => {
//     return totalVal+currentVal;
// })

//Finding the min or max value in the array.
// const minScore = examScore.reduce((minValue, currentVal) => {
//     if(currentVal < minValue) return currentVal;
//     else return minValue;
// })

// const maxScore = examScore.reduce((maxValue, currentVal) => {
//     if(currentVal > maxValue) return currentVal;
//     else return maxValue;
// })

//lets use reduce to get the highest rated movies...
// const highestRatedMovie = movieList.reduce((movieHigh, currentMovie) => {
//     if(parseInt(currentMovie.ratings) > parseInt(movieHigh.ratings)) {
//         return currentMovie;
//     } else return movieHigh;
// })

//this and arrow function

//here the this points to the windows Object
// const person = {
//     firstName: "sourav",
//     lastName: "Mitra",
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

//here this refers to the person object.
// const person = {
//     firstName: "sourav",
//     lastName: "Mitra",
//     fullName: function() {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

//how to use this in nested function logic
// const person = {
//     firstName: "sourav",
//     lastName: "Mitra",
//     fullName: function() {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {        
//         setInterval(()=> {          //now this is points to person Obj becaue that is where the function is created but if you use 'function'  keyword then this will points to windows object since setInterval is in windows Object.
//             console.log(this);
//             console.log(this.fullName());   
//         }, 3000);
//     }
// }

//Newer JS syntaxs
//spread syntax(...)

// const feline = {
//     legs: 4,
//     family: 'felidae'
// };

// const canine = {
//     isfurry: true,
//     family: 'caninae'
// };

// //To make a copy
// const newcopy = {...feline, color: 'black'};

// //To combine both the objects
// const bothObj = {...feline,...canine};  //here the last family will be reflecting since both contains family key (**conflict seanrio**)

//Example of destructuring movieList using destructing...
// const bestMovies = movieList.map(({name, ratings, year}) => {    //see how here am destructing the movie object into each variable as soon as it enters the function.
//     return `${name}(${year}) is rated as ${ratings} out of 10.`;
// });