const express = require('express');
const router = express.Router();

//adding a personal middleware to validate if that is an admin based on query param.
router.use((req, res, next)=>{
    if(req.query.isAdmin && req.query.isAdmin.toLocaleLowerCase() == "true"){
        next();
    } else {
        res.send("Ooops ! You are not an Admin XXXX");
    }
})

//some basic routes...
router.get('/sayHiAdmin', (req,res)=>{
    res.send("Hi YO ! This is Admin Bruh !!!");
})

router.get('/showWork', (req,res)=>{
    res.send("Yo ! No Work assigned yet");
})

//make this route accessable by index.js
module.exports = router;