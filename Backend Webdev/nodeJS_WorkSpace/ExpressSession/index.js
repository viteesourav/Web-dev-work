const express = require('express');
const app = express();
const session = require('express-Session');

//session middleware
app.use(session({secret: 'someSecretKey', resave: false, saveUninitialized: false}));

app.get('/', (req, res)=>{
    res.send('Yo This website is Live !!');
})

app.get('/viewCount', (req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }else {
        req.session.count = 1;
    }
    res.send(`Yo ! You again !! You already Visted this page ${req.session.count} times`);
})

//example how session can stores a lot of stuff for that particular session.
app.get('/registerUser', (req,res)=>{
    const {userId = 'Anynomous'} = req.query;
    req.session.userId = userId;
    res.redirect('/greetUser');
})

app.get('/greetUser', (req,res)=>{
    const user = req.session.userId;
    res.send(`Hey ! Welcome Back, ${user} !`);
})

app.listen(3000, ()=>{
    console.log("Server is live !");
})