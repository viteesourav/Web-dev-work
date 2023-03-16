const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

//databaseConnection..
mongoose.connect('mongodb://127.0.0.1:27017/flashDemo')
    .then(()=>{
        console.log('Mongoose DB Connection Successful');
    })
    .catch(()=>{
        console.log('Mongoose DB connection failed');
    })

//models import
const Farm = require('./models/farm');

//app settings
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//app middleware and declarations
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'ThisMySecretText', resave:false, saveUninitialized:false}));
app.use(flash());

//flash middleware...
app.use((req,res,next)=>{
    res.locals.flashMsg = req.flash('success');
    next();
})

app.get('/', (req,res)=>{
    res.send('server is Reachable !');
})

//Farm Operations
app.get('/farms', async(req,res)=>{
    const farmList = await Farm.find({});
    //res.render('index.ejs', {farmList, flashMsg: req.flash('success')});  //This can be reduced by the above added flash middleware
    res.render('index.ejs', {farmList});
})

app.get('/farms/new', (req,res)=>{
    console.log('This will take me to the Form Page');
    res.render('add.ejs');
})

app.post('/farms', async(req,res)=>{
    const newFarm = new Farm(req.body);
    await newFarm.save();
    req.flash('success', 'New Farm Added Successfully !');
    res.redirect('/farms');
})

//app port config
app.listen(3000, ()=>{
    console.log('server is live at 3000 !');
})