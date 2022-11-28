/*
Here we are going to develop a RESTFul crud layer to handle comments.

Our DB is just an array to Store the data.

API Structure:
index  - GET /comments - Get all the comments.
new.ejs GET /comments/new- File to accept the input from the form.
create comment - POST /comments - Post a new comment.
edit.ejs GET /comments/:id/edit - Form where the data will be prefilled so that we can simply edit the Data.
PATCH /comments/:id - To update a particular comment by their id.
DELETE /comments/:id - TO Delete a particular comment based on their id.

*/
const express = require('express');
const app = express();

//to generatre unique ids
const { v4: uuidv4 } = require('uuid');
//uuidv4();  --whereEver you will call this, you will get a uniqueId.

//to make the from use the patch or delete route we need to use method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));   //any query with this tells the express to look for that verb.

//including the body-parser to parse form data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//including the ejs and views
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(8080, ()=>{
    console.log("Server is live at 8080");
})

app.get('/', (req,res)=>{
    res.send("Server Responding !");
})

let commentsList = [
    { 
        id: uuidv4(),
        username: "admin1", 
        text: "TestComment"
    },
    {
        id: uuidv4(),
        username: "admin2", 
        text: "TestComment2"
    }
];

//get route
app.get('/comments', (req,res)=>{
    console.log('fetching all the comments !');
    //console.log(commentsList);
    res.render('comments/index.ejs', {commentsList});
})

//For Post route, we will first redirect to a page where we can add the comment.
app.get('/comments/new', (req,res)=>{
    res.render('comments/new.ejs');
})

//using post route and redirect to show all comments page.
app.post('/comments', (req,res)=>{
    console.log('Post Call is working');
    //console.log(req.body);
    const {username, text} = req.body;
    const id = uuidv4();
    commentsList.push({id, username, text});
    res.redirect('/comments');   //it generated the status code 302 then the brower redirect the response to the another page given in location tag.
})

//show route using id --> details on one thing.
app.get('/comments/:id', (req,res)=>{
    console.log('Searching a comment By Id');
    const {id} = req.params;
    const commentRes = commentsList.find(obj => obj.id === id);
    res.render('comments/show', {commentRes});
})

//lets open the edit page with a get route...
app.get('/comments/:id/edit', (req,res)=>{
    const{id} = req.params;
    let respComment = commentsList.find(obj => obj.id== id);
    res.render('comments/edit.ejs', {respComment}); //seding the data to the page
})


//For update a comment we will use patch Route.
app.patch('/comments/:id', (req,res)=>{
    console.log("Updating a comment !");
    const {id} = req.params;
    const {comment} = req.body;
    let response = commentsList.find(obj => obj.id===id);
    response.text = comment;
    res.redirect('/comments');   //we are redirecting to the index page after successful update.
})


//making a delete route
app.delete('/comments/:id', (req,res)=>{
    console.log('Deleting a comment');
    const{id} = req.params;
    commentsList = commentsList.filter(obj => obj.id !== id);
    res.redirect('/comments');
})