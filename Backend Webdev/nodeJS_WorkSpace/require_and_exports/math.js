//sum two numbers
// const sum = (x, y) => x+y;

// //a constant
// const PI = 3.14;

// //product function
// const product = (x,y) => x*y;

//to make the function above accessable we use module.exports
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.product = product;

//better way of defining...
module.exports.sum = (x,y) => x+y;    //this syntax is mostly used.

//we can also use just exports as a ref to module
exports.PI = 3.14;

exports.product = (x, y) => x*y;