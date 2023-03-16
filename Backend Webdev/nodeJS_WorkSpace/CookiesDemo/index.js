const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

//executing the cookie-parser middleware
app.use(cookieParser('thisIsMyPasswordToSeal')); //the parameter is a secret key to seal the cookie..

app.get('/', (req,res)=>{
    res.send("All good Server is up and running");
})

app.get('/sayHi', (req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    const {username = 'anynomous'} = req.cookies;
    res.send(`Hi there ${username} !`);
})

app.get('/sendCookie', (req,res)=>{
    res.cookie('username', 'SouravvvFgg');
    res.cookie('favBackgorund', 'grey');
    res.send('Cookie is added to your browser !!');
})

app.get('/sendSealCookie', (req,res)=>{
    res.cookie('testSeal', 'testingtesting', {signed : true});
    res.send('Sealed Cookie send Successful !');
})

app.get('/verifySignedCookie', (req,res)=>{
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, ()=>{
    console.log('server is up');
})