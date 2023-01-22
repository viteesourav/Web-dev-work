// This will demonstrate how we can handles error in an express applications...
const express = require('express');
const app = express();
const morgan = require('morgan'); //middleware library
//this calls the custom Error Class...
const AppError = require('./AppError.js');

app.use(morgan('tiny')); //logs whatever the server listening to...

//middleware function to log the method of the rote calls.
app.use((req,res,next)=>{
    console.log(req.method.toUpperCase(), req.path);
    return next();
})

//verify middleware function
const verify = (req,res,next)=>{
    const {pass} = req.query;
    if(pass === "root") 
    next(); //send to the next callback/function.
    else 
    // //res.status(404).send("OOPs Wrong Password !"); //stop the middleware fucntion here and return 404.
    // throw new Error('Something went wrong !'); //throws the error object with a custom message...
    throw new AppError('Password Required !', 401);
}

//baisc route...
app.get('/', (req,res)=>{
    res.send('The server is live and up');
})

app.get('/test', (req,res)=>{
    res.send('Testing Testing');
})

//route call with next(), it will search for the next non-error middleware function below..
app.get('/dogs', (req,res,next)=>{
    console.log('This route is working fine !');
    next();
})

//route to use the verify function
//here only this will successfully run this below route: http://localhost:3000/secret?pass=root
app.get('/secret', verify, (req,res)=>{
    res.send('Secret is what a Scretkepper will know');
})

//this is dummy route that always throws a AppError with 403.
app.get('/admin', (req,res)=>{
    throw new AppError('you are not allowed', 403);
})

app.get('/error', (req,res)=>{
    unknonKeyword.exec();  //some random keyword to force express to get error...
})

//handling 404 Not found Route..
app.use((req,res)=>{
    // res.status(404).send('404 NOT FOUND!');
    res.send('This is the final route !');
})

//Custom error-handling middleware...
// app.use((err, req, res, next)=>{
//     console.log('**********ERROR**********');
//     console.log(err); //logs the errror encountered into the console.
//     res.send('Error encountered ! check the logs..');
//     // next(err); // this next will search for the next err-handling middleware function i.e default express error handling.
// })

//Custom error-handler middleware using the cutom Error class..
app.use((err, req, res, next)=>{
    console.log('****Error Encountered****');
    const {status = 500, message = 'something went wrong'} = err; //destructuring the error Obj for status code and message.
    res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log('server live at 3000');
})