//We will see two type by which we can select an Html element using DOM

//method1: primitive way using getElementBy...

const elementIdBanner = document.getElementById('banner');
console.log(elementIdBanner);
//it will search for any element with id banner else return null.


console.log('print src of all the imgs');
const allimgs = document.getElementsByTagName('img');
for(let img of allimgs) {
    console.log(img.src);
}

console.log('print src of all img with classNAme square');
const allSqimgs = document.getElementsByClassName('square');
for(let img of allSqimgs) {
    console.log(img.src);
}

//method2: use tje query selector. pass the css style slector as param. i.e #id, .className etc

console.log('print all the links inside a pragraph');
const allLinks = document.querySelectorAll('p a');
for(let links of allLinks) {
    console.log(links.href);
}


//DOM Manipulation...
//shows the details what that p contains same as what we see in the screen. i.e hidden ele will remain hidden.
document.querySelector('p').innerText;
//show the details what p contains. hidden ele will also show here.
document.querySelector('p').textContent;
//show the entire html markup that p contains.
document.querySelector('p').innerHTML;

//you can do whatever you want with this 3 things with these thing for the manipulating the text content.
document.querySelector('h1').innerHTML = '<h2>Small heading Samll Chicken</h2>'; //updates the entire heading to this new one.
document.querySelector('h1').innerHTML += '<a href= "#NOWHERE">HOME</a>'; //add link to the existing heading.


//handling attribute selction and manipulation..
const attribute = document.querySelector('#banner').src;
console.log(attribute);
//I can also do the same using getAttribute();
const attribute1 = document.querySelector('#banner').getAttribute('src');
console.log(attribute);

//let change the inputType from checkbox to text using this...
const inp = document.querySelector('input');
inp.type = 'text'

//Changing styles using DOM selectors...
document.querySelector('h1').style;

//This style will change the stuff in the page but it is not what we have in the style sheet.
//This looks for the inline style attribute that we add.(Which is a bad practise.)
document.querySelector('h1').style.border = '2px solid olive'; // This will add a new inline style attribute with border in the html.

//one more example... (take all links and changing its color)
const allLink = document.querySelectorAll('a');
for(let link of allLink) {
    link.style.color = 'rgb(0,180,134)';
    link.style.textDecorationColor = 'blue';
}

//To get the actual computed values use this...
//just to get cannot modify anyof them...
const h1 = document.querySelector('h1')
console.log(window.getComputedStyle(h1).fontSize);

//using the classList functions
const h2 = document.querySelector('.toctitle h2')
// retruns all the class linked to that object;
h2.classList
//add a class
h2.classList.add('purple')
h2.classList.add('border')

//check if that class is there
h2.classList.contains('purple')
//true
//remove a class
h2.classList.remove('purple')

//toggel a class like on or off...
h2.classList.toggle('border')
//false
h2.classList.toggle('border')
//true
h2.classList.toggle('border')
//false

//Navigating from your current position in dom using parent and children
 const history = document.querySelector('#History');
// undefined
 history
// <span class=​"mw-headline" id=​"History">​History​</span>​
 history.parentElement
// <h2>​…​</h2>​
 history.parentElement.parentElement
// <body data-new-gr-c-s-check-loaded=​"14.1079.0" data-gr-ext-installed>​…​</body>​
 history.parentElement.childElementCount
// 1
 history.parentElement.children
// HTMLCollection [span#History.mw-headline, History: span#History.mw-headline]
 history.parentElement.nextElementSibling
// <p>​…​</p>​
 history.parentElement.previousElementSibling
// <div id=​"toc" role=​"navigation" aria-labelledby=​"mw-toc-heading">​…​</div>​
 history.parentElement.previousSibling
// #text
 history.parentElement.nextSibling
// #text


//Adding a new element using dom
// const newh3 = document.createElement('h3')
// undefined
// newh3.innerText = "I AMMMMMM NEWW"
// 'I AMMMMMM NEWW'
// newh3
// <h3>​I AMMMMMM NEWW​</h3>​
// document.body.appendChild(newh3)
// undefined


//adding a particular postion
// const newh3 = document.createElement('h3')
// undefined
// newh3.append('NEWWWWWW ELEMENT I AM APPENDING');
// undefined
// newh3
// <h3>​NEWWWWWW ELEMENT I AM APPENDING​</h3>​
// firsth1 = document.querySelector('h1')
// <h1>​Silkie Chickens​</h1>​
// firsth1.insertAdjacentElement('afterend', newh3)
// <h3>​NEWWWWWW ELEMENT I AM APPENDING​</h3>​


//Removing an element using .removeChild and .remove
//const b = document.querySelector('p b')
//b.parentElement.removeChild(b);

//const img = document.querySelector('img')  --> directly removes it (dont work in Explorer)
//img.remove();


