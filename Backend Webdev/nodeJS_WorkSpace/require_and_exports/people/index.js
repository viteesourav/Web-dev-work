//lets include the exports from other file...
const people1 = require('./people1');
const people2 = require('./people2');
const people3 = require('./people3');

//lets create a new obj and exports it.
const pepsList = [people1, people2, people3];

//console.log(pepsList);

module.exports = pepsList;