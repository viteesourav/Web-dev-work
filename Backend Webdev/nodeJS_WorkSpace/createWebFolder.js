//this script shows how to use file handling using node.

//this script will generate a folder
//and inside that will add one html, one css and one js file.

//fs--> filesystem we need to require before we can use it
const fs = require('fs');

//async way --> it will return callback once it is over, Will not stop the execution of process
// fs.mkdir('newFolder', (err)=>{
//     console.log("new Folder created");
//     if(err) throw err;
// });
// console.log('Function execution done');

//Result:
/*
node createWebFolder.js
Function execution done  --> programs runs asusual.
new Folder created --> when the create done then its printing the callback.
*/

let folderName = process.argv[2] || 'newFolder'; //at index 2 from the list that argv returns.

//sync way --> It will stop the execution untill this operation is completed.
fs.mkdirSync(folderName);
console.log('Create new Folder done'); //execute only after the above one is done.

//now inside the folder we will create 3 new files.
//put everything in async inside the try-catch block. since we are not using callbacks.
try{
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    console.log("File creation successful");
}
catch(err) {
    console.log(err);
}
