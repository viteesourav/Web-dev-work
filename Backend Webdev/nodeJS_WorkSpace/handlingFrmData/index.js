const express = require('express');
const app = express();

//Very important to include for handling json and form data for post request
const bodyParser = require('body-parser');  //it's a middleware.
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

app.listen(8080, ()=>{
    console.log("Server is up at 8080 !!");
})

//Defineing GET and POST Route for the /search..
app.get('/', (req,res)=>{
    console.log("server is up !");
    res.send("Server is live !");
})

app.get('/search', (req,res)=>{
    console.log(req.query);
    const{tacos, number} = req.query;
    res.send(`your Request for ${number} ${tacos} accepted !`);
})

app.post('/search', (req,res)=>{
    console.log("Post working !");
    console.log(req.body); //it will be undefined by deafult if you dont parse it.
    res.send("Post Request Received Successfully")
})