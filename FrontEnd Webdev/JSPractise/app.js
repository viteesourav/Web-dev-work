
/* observation:
1) when keys are inserted into the object they are stored in a sorted manner.
2) when we print the object.keys() it returns in the order they are inserted.
3) arr.includes(xyz) check if xyz present in the array or not.
4) var doesnot follow block scoping i.e available everywhere but let obeys block scoping i.e available only in {}
5) function params dont need type declaration.
6) arrowFunction this points to windows obj, but function using function keyword's this point to the same Obj.
7) forEach and Map same function. diff--> map returns a new array, forEach dont return anything.
8) filter --> the callback function returns a condition. based on the condition it returns a new array of elements.
Note: param for forEach,map,filter is the element of the array.
9) Chain of filter-map possible. Filter will filter the data based on condition and map can then iterate over the filtered list and return a new array.
10) reduce --> takes 2 params accumulate --> stores the value of the retrun. currentVal --> take the val of the ele of the array.
NOTE: 3rd param is optional it defines the starting value of accumulate.
11) this behavior depends upon how you declare function.
NOTE: If arrow function is used then this points to the obj where it's created.
      If function keyword is used this points to the obj which is executing that function.
13) NOTE:
    -- using spread we can copy existing obj and array into new ones without creating any refernece. ***Imp**
    -- ...nums --> It will collect all the values passed to it as array elements.
12) spread(...) --> lot of uses.
    --use to find min or max in an arr.
    --use to copy or append or merge two objects into a new one i.e fetches all the keys and values from others and create a new one.
    --use for destructure of arrays.
Note: Destructre means createing new variables from the given array OR Object efficently.
*/


//Basic variable and arrays operation done...
let num = [1,2,3,4,5,6,7,8,9];
//JS Objects
let myObj = {
    first : "FirstElement",
    second : "secondElement",
    third : "thirdElement",
    fourth : "fourthElement",
    fifth : "fifthElement",
    
}

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
    ]

myObj.getRandNumber = function() {
    return Math.floor(Math.random()*6) + 1;
}

myObj.thisWithArrowFun = () => {
    console.log(this);   //points to the windows obj.
}

myObj.thisWithFunctionKeyword = function() {
    console.log(this); //points to the same myObj.
}

//functions:
function add_method1(x, y) {return x+y};  //using function keyword

const add_method2 = function(x,y) {return x+y};  //storing the result in a var

const add_method3 = (x, y) => {return x+y}; //storing the result and using arrow instead of function keyword.

//whatever inside the callback will execute after the delay.
// setTimeout(()=>{
//     console.log('I will print after 2s !');
// }, 2000);

// //whatever in the callback will execute at an interval specified.
// const clsId = setInterval(()=>{
//     console.log('I will print every 3s !');
// }, 3000);

// //to sTop this, we will wait for 15s then clear it
// setTimeout(()=>{
//     console.log('The interval printing stopped');
//     clearInterval(clsId);
// }, 15000);

//Foreach --> print square of each ele
num.forEach((ele)=>{
    ele = ele*ele;
    //console.log(ele);
})

//map --> returns an array but same as forEach Loop.
const numSq = num.map((ele)=>{
    ele = ele*ele;
    return ele;
})

//filter --> here the callback function is like an if condition.
const evenNum = num.filter((ele)=>{
    return ele%2==0;
})

//lets try filter+map implementation:
//fetch good movies name if the ratings are >=7.
const goodMoviesNames = movieList.filter((obj) =>{
    return obj.ratings >= 7;  //condition in callback function.
}).map((ratedMovies)=>{
    return ratedMovies.name; //picking up names from the filtered List
});

for(let movNames of goodMoviesNames){
    //console.log(movNames);
}

//some and every
const bool1 = num.every((ele) => {return ele >=1}); //true since all ele are >= 1.
const bool2 = num.some((ele) => {return ele >=5}); //true since some of the ele are >= 5.

//reduce --> 2 params accumulate and current.
//sum of all elements
const sumNum = num.reduce((acc,curVal)=>{
    return curVal+acc;
},0)

//find max value in the num using reduce.
const maxNum = num.reduce((max,ele)=>{
    if(ele > max) return ele;
    else return max;
}, 0)

//this keyword in nested function.
//Very Important//
const newObj = {
    name : 'sourav',
    mark : 67,
    summary() {
        console.log(`This person ${this.name} got ${this.mark}`);  //here this points to the myObj.
    },
    readTheDetails: function() {
        setTimeout(function() {  //setTimeOut is executed by windows so this points to windows Obj.
            console.log(this);  //here this points to the windows obj.
            console.log(`This is reading the Details after 3 sec: ${this.name} got ${this.mark} marks`);
        }, 3000);
    },
    readTheDetailsAgain: function() {
        setTimeout(()=>{        //setTimeOut is created in the myObj so this points to myObj.
            console.log(this); //here this points to the myObj
            console.log(`This is reading the Details after 3 sec: ${this.name} got ${this.mark} marks`);
        }, 3000);
    }
}

let obj34 = {
    name: "Sourav",
    age: 45,
    sayHi: function() {
        console.log(this);
        console.log("Hiiii !");
    },
    sayHiFromArrow: ()=>{
      console.log(this);
      console.log('Hi from the arrow function');
    },
    shoutName: function() {
        setTimeout(()=>{
            console.log(this);
            console.log('Hi from the timeOut function');
        }, 3000);
    },
    shoutNameAgin: function() {
        setTimeout(function(){
            console.log(this);
            console.log('Hi from the timeOut function');
        }, 3000);
    }
}

//analysis...
obj34.sayHi(); //this points normally to the current obj.
obj34.sayHiFromArrow(); // this trys to find a function keyword up, but nothing is there so points to windows obj.
obj34.shoutName(); //this trys to find a function inside which it is created, and found shoutname, thus points to the current obj.
obj34.shoutNameAgin(); //this sees who is executing the current funcs ? setTimeout is a windows obj, thus points to windows obj.

//===========================================================DOM And Async JS=========================================================//
/*
Observations for DOM Events: 

1) using document.querySelector to specifically select any element by id or by tagName or by className.
2) EventListner can be used efficently than using seperate onclick functions.
3) if you have looping on eventListner, use this in the callback function to access individual elements.
4) in frm action attribute if you use #id it will stay in the same page. if you use / then it will try to redirect.
5) redirect is a default behaviour that can be prevented using evt.preventDefault() in callback.
6) change keeps tracks of input change, input keeps track when the input changes
7) benfit of input --> it ignores arrow and special keys. only tracks when it detects an input change.
8) Event bubble can sometime helpful but sometime pain in ass :( , use evt.stopPropagation();
9)basically you can use evt.target.nodeName eg: LI or BUTTON to identify what is clicked inside containers like div or ul.
10) very imp --> ways you can write the callback function
 -- using arrow function. eg: () => {....your code whatever it is....}
 -- calling a specific fucntion without any param. eg: .addEventListner('click', reset);
 -- calling a specific fucntion with param. eg: .addEventListner('click', function() {  reset(param1, param2); });
*/

//noraml Event Listener on a btn
const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', ()=>{
    console.log('btn clicked duh again :)');
});

//on a group of buttons
const btnGrp = document.querySelectorAll('#btnGrp button');  //selects all the btns under btnGrp section.
for(let btn of btnGrp) {
    btn.addEventListener('click', changeColor);
}

function changeColor () {
    console.log('btn Clicked !');
    console.dir(this);
    this.style.color = 'red';
    this.style.backgroundColor = 'black';
}

//tracking keyup and keydown events
document.querySelector('#inputBox input').addEventListener('keyup', (evt)=>{
    console.log('keyup event triggered');
    console.log(evt);
})

//preventing deafult behaviour of frm submit...
document.querySelector('#frmSubmit').addEventListener('submit', (evt)=>{
    console.log('the frm is submitted !!!');
    console.log(evt);
    evt.preventDefault();
})

//change and input event
document.querySelector('#inputText').addEventListener('change', (evt)=>{
    console.log('something change to the input');
    console.log(evt);
})

document.querySelector('#inputText').addEventListener('input', (evt)=>{
    console.log('input detected');
    console.log(evt);
})

//example of event bubble and its solution.
//adding events to both par and btn.
document.querySelector('#eventBubble').addEventListener('click', (evt)=>{
    alert('bubble_par clicked !');
    //console.log(evt);
})

document.querySelector('#evntBubbleBtn').addEventListener('click', (evt)=>{
    alert('bubble_btn clicked');
    //console.log(evt);
    evt.stopPropagation();
})

//Example of event delegation.
document.querySelector('#demoUl').addEventListener('click', (evt)=>{
    console.log('Inside UL something is clicked');
    console.log(evt);
})

//how we write callback function with and without params...
const inputText = document.querySelector('#expName');
const inputPass = document.querySelector('#expPass');
const para = document.querySelector('#expRes');

document.querySelector('#expCallback button').addEventListener('click', function() {   //this is the way you call a callback function with params.
    console.log('Button clicked !!');
    updatePar(inputText.value, inputPass.value);
})

document.querySelector('#expReset').addEventListener('click', reset); //just calling the function by ref.

//funtion to reset the para text..
function reset() {
    console.log('Reset button clicked !!');
    inputText.value = '';
    inputPass.value = '';
    para.innerText = 'This will automatically change when you click on the button';
}

//function to change the para...
function updatePar(name, pass) {
    if(name != '' && pass != '') {
        para.innerHTML = `welcome <b>${name}</b> ! your pass is <b>${pass}</b>`;
    }else {
        para.innerText = 'This will automatically change when you click on the button';
    }
}


/*
Observations for DOM Elements: 

1) diff between .innerText and .textContent --> if something is hidden textContent will show it but innerText won't.
 -- Always Good to use textContent instead of innerText.
2) Note: .getAttribute fetchs from HTML content but .attribute_name fetchs from JS Object.
3) window.getComputedStyle(document.querySelector('')) --> just to view the current styles implemented on a particular element.
NOTE: document.querySelector('') this is a domObj.
4) properties to navigate in HTML using DOM
 -- .parentElement --> Goes to the parent element.
 -- .children --> HTML Collections for all the children of that element.
 -- .nextElementSibling/.previousElementSibling --> move around the children.
 -- .createElement('LI') --> create a new Element.
 -- .appendChild(domObj) -->  append as a new child at the end.
 -- .append(text)/.preappend(text) --> add some to the existing element.
 -- .insertAdjacentElement(position, element) --> see MDN for what to type in postion eg: afterend i.e after the specified element add 
    and element is the new element you want to add.
 -- .removeChild(elementDOMObject) or .remove(elementtag).
*/

/*
**VERY IMPORTANT**
Observations for DOM Sync functions and promises: 

1) Js is a single threaded language. At max only one line runs during execution.
2) delayed execution of callback functions are handled by browser(written in c++). It helps Js to manage delayed execution.
3) Nested deep callbacks called callbackhell.
4) solution to callbacks hell --> we use promises Obj(return either fullfilled or rejected) based on the status of the server call.
5) using chain of .then()-->if server call successfull and .catch() --> if server call failed make the nested call more flat structure.
6) further optimised implementation is using async func(always returns a promise obj) and await fuc call() (wait for the async funct to return a promise obj)
7) await works only inside a async function. put all the await calls in try block and add a catch block at the end. --> Error handling in async function,
8) previously used AJAX --> Async Js and XML, now we use AJAJ --> Async JS and JSON. The format of output now a days mostly is in json.
9) JSON --> JS Object Notation.
10) JSON.parse(jsresp) --> string resp from server to JSON Object; JSON.stringfy(JSONObject) --> converts JSON Object to String.
11) For a Web based HTTP API contains --> HTTP verb(GET,POST,UPDATE), HTTP Headers --> info on the resp eg: accept --> application/json , HTTP query --> '?' look for a match if the API supports that. eg: ?houseNo='45'&streetNo='5'
12) FOR Making server calls:
 -- XHR --> XMLHttpRequest, no support for promises and callbackshell is a headache. (*Not Recommended Atall*)
 -- fetch() --> uses promises. no callbackhell but the resp has to be extracted using resp.json() --> returns a promise again. thus bit hassel.
 -- axios  --> 3rd party library. have to include script as script. uses promises behind the scenes. resp can be extracted easy i.e resp.data (*Recommended*)
 NOTE: you can pass a 2nd optional param to fetch and axios if you need to define specific headers value. eg: { headers : {Accept : 'application/json'}}
*/


//request nestings --> books.com--> books.com/page1 --->books.com/page2.
//we will try to make a dummy fake request and use different ways to define and call it and make it simpler evey time.

// 1. using simple callbacks functions  

//its a fake server call that returns either succescallback or failurecallback.
const makeRequest = function(url, success, fail) {
    //this will generate a random time that server takes to respond
    const serverTime = Math.floor(Math.random() * 4000)+500;

    setTimeout(()=>{
        if(serverTime < 3500){
            success(`The Server successfully responed for url: ${url}`);
        } else {
            fail(`The server call failed for url: ${url}`);
        }
    }, serverTime);
}

//lets make a 'callback hell' for the above request. 
// makeRequest('books.com',(resp) => {
//     console.log(resp);
//     //making 2nd call if 1st call is successful
//     makeRequest('books.com/page1', (resp1)=>{
//         console.log(resp1);
//         //making the 3rd call if 1st and 2nd call are successful
//         makeRequest('books.com/page2', (resp2)=>{
//             console.log(resp2);
//         }, (err2)=>{
//             console.log(err2);
//         })
//     }, (err1)=>{
//         console.log(err1);
//     })
// }, (err)=>{
//     console.log(err);
// });




//2) using Promise obj and nesting server calls using .then and .catch

//Its a fake server call that returns promise obj.
const requestPromise = function(url) {
    //this will generate a random time that server takes to respond
    const serverTime = Math.floor(Math.random() * 4000)+500;

    return new Promise((fullfilled, rejected)=> {
        setTimeout(()=>{
            if(serverTime < 2500)
            fullfilled(`The Server successfully responed for url: ${url}`);
            else 
            rejected(`The server call failed for url: ${url}`);
        },serverTime);
    });
}

//making a nested calls for promises..
// requestPromise('books.com')
//     .then((resp) =>{
//         console.log(resp);
//         //making the 2nd call if 1st call successful
//         return requestPromise('books.com/page1');
//     })
//     .then((resp1)=>{
//         console.log(resp1);
//         //making the 3rd call if 2nd call successful
//         return requestPromise('books.com/page2');
//     })
//     .then((resp2)=>{
//         console.log(resp2);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//3) using async functions and await for server calls that return promises. (mostly prefered)

//NOTE: here we will use requestPromise a fake server call that returns promise.

const makeAsyncServerCall = async function() {
try{
    let resp = await requestPromise('books.com');  //it will wait for the promise to come.
    console.log(resp);
    let resp2 = await requestPromise('books.com/page1');  //it will wait for the promise to come.
    console.log(resp2);
    let resp3 = await requestPromise('books.com/page2');  //it will wait for the promise to come.
    console.log(resp3);
} 
catch(err) {
    console.log(err);
}
}

//makeAsyncServerCall();


//now we will try with some real server calls using fetch and axios.
//url: https://swapi.dev/api/people/{id},

//1) using simple fetch command.

const getStarWarDetails =  async function(id) {  //async because this will make a server call which will return a promise.
try{
    const resp = await fetch(`https://swapi.dev/api/people/${id}`);
    //console.log(resp); //this response of fetch returns a ReadableStream. need to parse it.
    const resp1 = await resp.json(); // return a parsed JSONObj as promise.
    console.log('Below are the details of the Person');
    console.log(resp1);
}
catch(err) {
    console.log('Error Encountered !');
}
}

//2) using axios lib. add the script link in the HTML.
const getStarWarCasts = async function(id) {
try {
    const resp = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(resp.data);
}
catch(err) {
    console.log('Error Encountered !');
}
}


/*

***Protoype, OOPs and Classes in JS

-- Objects have access to Object templates under the keyword [[prototype]].
-- Basically All the Objects have access to a template class, thus have access to all its methods under prototpe Obj.
-- Eg: when we declare let arr = [], then arr is refering to an array Object. Thus, it pulls all the methods from the Array.prototype
-- using Factory function, Functions just create and return a obj. 
Drawback: But these Objects are craeted everytime we declare.
-- Using constructor, no need to create any obj, new will create an obj and this keyword inside constructor will point to new Obj.
-- Better way: 
   Create a class(starts with caps), use constructor to handle the declaration of its Obj. All methods are placed in prototype automatically.
Why Constructor ?
-- Basically it handles how to create a new Obj when it is created.
   Inheritance amoung class:
-- extends: a new cls can extends old cls methods.
-- super: the new cls has its own constructor, inside it can call parent class constructor using keyword super.
NOTe: we noticed, only one constructor is allowed per class. **Imp**
*/

//factory function...
const whoami1 = function (name) {
    
    const myOwnObj = {};
    myOwnObj.userId = name;
    
    myOwnObj.sayHi = function () {
        console.log(this);
        console.log(`HI, this is ${this.userId}`);
    }
    return myOwnObj;
}

// const obj1 = whoami('mampy');
// obj1.sayHi();
// const obj2 = whoami('sourav');
// obj2.sayHi();


//we can use constructor and protopyte...
const Whoami = function (name) {
    this.userId = name;
}

Whoami.prototype.sayHi = function() {
    console.log(this);
    console.log(`HI, this is ${this.userId}`);
}

// const obj1 = new Whoami('mampy');
// console.log(obj1);
// obj1.sayHi();

//Creating class



class WhoisThis {
    constructor(name) {
        this.userId = name;
    }
    //all methods inside class are prototype.
    sayHI() {
        console.log('Hi ya !');   
    }
    sayHiAgain() {
        console.log(`Hi, ${this.userId}`);
    }
}

// const obj1 = new WhoisThis('sourav');
// console.log(obj1);

//Inheritance in JS

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHi() {
        console.log(`Hi, This is ${this.name} and i am ${this.age} years old.`);
    }
}

const newPet1 = new Pet('toffee', 12);
console.log(newPet1);
newPet1.sayHi();

class Cat extends Pet {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    
    sayWhatColor() {
        console.log(`Hey, my color is ${this.color}`);
    }
}

const cat1 = new Cat('kity', 9, 'black');
console.log(cat1);
cat1.sayWhatColor();
cat1.sayHi();