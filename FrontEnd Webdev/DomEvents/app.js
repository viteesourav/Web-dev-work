const btn = document.querySelector('#newBtn');

//we can add a function to the onclick attribute of the btn object.
btn.onclick = function() {
    console.log('This Shit is crzyyy !!!');
}

document.querySelector('h1').onclick = () => {
    console.log('This is selected');
}

const newBtn3 = document.querySelector('#newBtnnew');
newBtn3.addEventListener('click', ()=> {
    console.log('Button is clicked !!');
})


//Random color Exercise...

const button = document.querySelector('#randback button');
const h2Text = document.querySelector('#randback h2');
const div = document.querySelector('#randback');
div.style.textAlign = 'center';
const body = document.body;
button.addEventListener('click', ()=>{
    console.log('Color Changed button Clicked !!!');
    const newColor = randomColor();
    h2Text.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//The use of this keyword in dom

const newBtns = document.querySelectorAll('#newBtn button');
for(let btn of newBtns) {
    btn.addEventListener('click', colorize);
}

const anotherBtns = document.querySelectorAll('#anotherBtn button');
for(let btn of anotherBtns) {
    btn.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}


//keyboard Events and Events objects

//for click Event
const mouseClick = document.querySelector('#keyboardEvent button');
mouseClick.addEventListener('click', function(evt){   //here evt is the EventObject that is by default get passed.
    console.log(evt);
});
//for keyboard Event
const keyInput = document.querySelector('#keyboardEvent input');
keyInput.addEventListener('keydown', function(evt){   //here evt is the EventObject that is by default get passed.
    console.log(evt);
});

//Listen to any click on the page...
window.addEventListener('keydown', function(evt) {
    //console.log(evt);
    switch(evt.code) {
        case 'ArrowUp':
            console.log('GO UPPPPPP');
            break;
        case 'ArrowDown':
            console.log('GO Downn');
            break;
        case 'ArrowLeft':
            console.log('BANK LEFT');
            break;
        case 'ArrowRight':
            console.log('BANK RIGHT');
            break;
        default:
            console.log('INVALID INPUT');    
    }
});


// Form Events --> using Event.preventdefault().
const form = document.querySelector('#newfrm');
const input = document.querySelector('#inputBar');
const list = document.querySelector('#noteList');
form.addEventListener('submit', function(evt) {
    evt.preventDefault();   //this will prevent the form from loading a new page !!
    console.log('frm submitted !!!!');
    console.log(input.value);
    let newNote = input.value;
    let newItem = document.createElement('li');
    newItem.append(newNote);
    list.appendChild(newItem);
    input.value = ''; //this will reset the textField to empty after submit.

});


//we can use change event to track if change happened to event field..
input.addEventListener('change', ()=>{
    console.log("chnage Event !!!"); //Note: It will only logs when you click outside the input field.
});

//we can use change event to track if user doing anything with the input
input.addEventListener('input', ()=>{
    console.log("input Event !!!"); //Note: It will only logs whenever you do something with the input.
});


//Showing how to handle bubble Event.
const bubbleDiv = document.querySelector('#bubbleDiv');
const bubbleBtn = document.querySelector('#bubbleBtn');

bubbleDiv.addEventListener('click',()=>{
    alert("The BubbleDiv is triggered !");
});

bubbleBtn.addEventListener('click',(evt)=>{
    evt.stopPropagation();  //This will restrict the click event to just this element.
    //without this you will see the alert for both the events even if you clicked just the btn.
    alert("The BubbleBtn is triggered !");
});


//showing Event Delegation using a commentBox.
const commentAdd = document.querySelector('#commentAdd');
const commentText = document.querySelector('#commentText');
const commentList = document.querySelector('#commentList');
commentAdd.addEventListener('click', ()=>{
    const txt = commentText.value;
    const newItem = document.createElement('Li');
    const newbtn = document.createElement('button');
    newbtn.innerText = "Delete";
    newItem.append(txt);
    newItem.append(newbtn);
    commentList.appendChild(newItem);
    commentText.value = '';
});

//this code will successfully add comment to the section.
commentList.addEventListener('click',(evt)=>{
    console.log(evt);
    //now for deleting we will listen on the ul for clicks on li.
    // if(evt.target.nodeName === 'LI')
    // evt.target.remove();
    //This is little bit more, added a button with the text.
    //ul will listen for button click inside it, if found-->go to its parent and remove that.
    if(evt.target.nodeName === 'BUTTON')
    evt.target.parentElement.remove();
});
