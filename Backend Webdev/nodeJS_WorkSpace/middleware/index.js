const express = require('express');
const app = express();
const morgan = require('morgan'); //middleware library

app.use(morgan('tiny')); //logs whatever the server listening to...

// //middleware stacking...
// app.use((req,res,next)=>{
//     console.log('This is my First middleware...');
//     return next(); //looks for the next function to execute..
// })

// app.use((req,res,next)=>{
//     console.log('This is my Second middleware...');
//     return next();
// })

//middleware function to log the method of the rote calls.
app.use((req,res,next)=>{
    console.log(req.method.toUpperCase(), req.path);
    return next();
})

//defining one function that can be used to verify password for a route...
const verify = (req,res,next)=>{
    const {pass} = req.query;
    if(pass === "root") 
    next(); //send to the next callback/function.
    else 
    res.status(404).send("OOPs Wrong Password !"); //stop the middleware fucntion here and return 404.
}

//baisc route...
app.get('/', (req,res)=>{
    res.send('The server is live and up');
})
app.get('/test', (req,res)=>{
    res.send('Testing Testing');
})

//route to use the verify function
//here only this will successfully run this below route: http://localhost:3000/secret?pass=root
app.get('/secret', verify, (req,res)=>{
    res.send('Secret is what a Scretkepper will know');
})

//handling 404 Not found Route..
app.use((req,res)=>{
    res.status(404).send('404 NOT FOUND!');
})

app.listen(3000, ()=>{
    console.log('server live at 3000');
})