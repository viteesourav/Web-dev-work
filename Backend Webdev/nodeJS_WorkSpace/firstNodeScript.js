//Simple code that we can execute in node REPL
//using node command

for(let i=0;i<5;i++) {
    console.log(`${i}: This is the node REPL`);
}
//NOTE: this will print all the argv you pass when you execute the node command with file name and other argvs.
//eg: node firstNodeScript.js firstargv secondargv thirdargv
console.log("****USE OF argv with process***");
//process--> returns all info on that js file and argv returns list of all the arg list.
let argvList = process.argv;
for(let ele of argvList) {
    console.log(ele);
}