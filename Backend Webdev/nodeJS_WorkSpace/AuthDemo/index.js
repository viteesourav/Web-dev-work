const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

//app configurations
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); //makes the view path accessable

//setting up the middleware
app.use(express.urlencoded({extended: true})); //to parse the req body submitted from form.
app.use(session({secret: 'MycodeMySecretKey', resave: true, saveUninitialized:false}));
//Custom Login Middleware to check if the session is active ?
const requiredLogin = (req, res, next)=>{
    if(!req.session.user_id) {
        return res.redirect('/login');    //if session is new or not there, redirect to Login page...
    }
    next();  //If session is there call the next fun in line..
}

// mongoose Database connection...
mongoose.connect('mongodb://127.0.0.1:27017/AuthDemo')
    .then(()=>{
        console.log('DB Connection is Successful');
    })
    .catch(()=>{
        console.log('Db Connection failed !');
    })

//including the models
const User = require('./models/user');

//baisc Route..
app.get('/', (req,res)=>{
    res.send('All Good Servers are up !');
})

//register Route...
app.get('/register', (req,res)=>{
    res.render('register');
})

app.post('/register', async (req, res)=>{
    //res.send(req.body);
    const{id, pass} = req.body;
    // const hashedPass = await bcrypt.hash(pass, 12); 
    //The hashing of password will be taken care by the pre hook middleware.
    const newUserData = new User({username: id, password: pass});
    //res.send(newUserData);
    await newUserData.save();  //runs a pre-middleware that hash the function before saving it.
    req.session.user_id = newUserData._id;
    res.redirect('/secretPage');
    
})

//login auth Screen...
app.get('/login', (req, res)=>{
    res.render('login');
})

//Here we can move the password check and user validation to its own seperate static method..
// app.post('/login', async (req,res)=>{
//     // res.send(req.body);
//     const {id, pass} = req.body;
//     const user = await User.findOne({username: id});
//     if(!user) {
//         console.log('Invalid userName or password');
//         res.redirect('/register'); //If the user is inavlid, we can redirect him to register page.
//     } else {
//         //validate the password of the matched user data with given pass...
//         if(await bcrypt.compare(pass, user.password)) {
//             console.log('Successfully loggedIn');
//             req.session.user_id = user._id;
//             res.redirect('/secretPage');
//         }else {
//             console.log('Invalid Username or password !');
//             res.redirect('/login');
//         }
//     }
// })

app.post('/login', async (req,res)=>{
    const {id, pass} = req.body;
    //calling the static function from the model to validate the cred.
    const FoundUser = await User.findUserAndValidate(id, pass);
    if(FoundUser) {
        console.log('Successfully loggedIn');
        req.session.user_id = FoundUser._id;
        res.redirect('/secretPage');
    }else {
        console.log('Invalid Username or password !');
        res.redirect('/login');
    }
})

//dummy home page...
app.get('/home', (req,res)=>{
    res.send('Hey Man ! I know you !! You made it to the home page !');
})

//this route will open only if you are login and have that user_id in session else it will redirect you back to login page.
app.get('/secretPage', requiredLogin, (req,res)=>{
    // if(!req.session.user_id) {
    //     return res.redirect('/login');   //Moved to its own middleware function...
    // }
    res.render('secret');
})

app.get('/aboutSecret', requiredLogin, (req,res)=>{
    res.send('Hi There ! You are authenticated person');
})

//post route to handle logout..
app.post('/logout', (req,res)=>{
    //req.session.user_id = null;  //Removing the stored user_id from the session.
    req.session.destroy(); //this will remove the session entirely
    res.redirect('/login');
})


//staring the server port
app.listen(3000, ()=>{
    console.log('Server running live on 3000');
})