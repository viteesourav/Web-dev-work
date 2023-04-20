//this is my first app for EJS templating engine.
//const { Template } = require('ejs');
const express = require('express'); //require the express package.
const app = express();  //get all the methods from express.
const path = require('path'); //required to change the path of the views folder.
//including the data json file.
const requestData = require('./data.json');

//let do a noraml listening call to the server...
app.listen(8080, ()=>{
    console.log("Server is live ! and Listening to port 8080");
})

//how to include static elements of your project in index.html
app.use(express.static(path.join(__dirname, 'public')))

//now to set the template engine, we use this command..
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//NOTE: By Default it will look in views folder for template ejs files..

//let do a normal call to listen to get request from the app home page
app.get('/', (req,res)=>{
    //Just a test to see if the server is listening to get requests...
    //res.send("Hi this server is listening to home page request !");

    //for rendering a template we use render command on res.
    res.render('templatePage.ejs');
})


//how can we pass data from here to template files...
app.get('/rand', (req,res)=>{
    const randomNum = Math.floor(Math.random()*10)+1;
    res.render('random.ejs', {randomNum});  //here {randomNum} is same as {randomNum : randomNum}
})

//Taking the params and renderning the page.
app.get('/r/:newPage', (req,res)=>{
    const {newPage} = req.params
    res.render('templatePage2.ejs', {newPage});
})

//loops in ejs template
app.get('/Showloops', (req,res)=>{
    const array = ['Rocky', 'Montey', 'Cobey', 'Bella', 'Coco']
    res.render('templateLoops.ejs', {arrList : array});
})


//how to show data in the template from data response.
app.get('/redit/:subreddit', (req,res)=>{
    const {subreddit} = req.params;
    const data = requestData[subreddit];
    if(data) {
        res.render('templateDataPage.ejs', {...data});  //spreading the data Object.
    }else {
        res.render('notFound.ejs', {page : subreddit});
    }
})

