//how can we require the file math.js here.
const math = require('./math');

console.log('Inside app.js file !');
console.log(math);
//now lets try to access any function from math.js
console.log(math.PI);
console.log(math.sum(5,6));
console.log(math.product(5,6));