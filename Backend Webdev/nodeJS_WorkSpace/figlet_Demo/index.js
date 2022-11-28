//here we have included 2 packages.
//this two will be shown in package.json file.
const figlet = require('figlet');
const color = require('colors');
figlet('Hi Sourav !', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});