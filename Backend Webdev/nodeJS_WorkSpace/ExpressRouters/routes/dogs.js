const express = require('express');
const router = express.Router();

//this Router basically groups all the dogs routes.
/*
GET  /dogs
POST /dogs
GET  /dogs/:id
GET  /dogs/:id/edit
*/

router.get('/', (req, res)=>{
    res.send('Show all Dogs');
})
router.post('/', (req, res)=> {
    res.send("Add a new Dog");
})
router.get('/:id', (req, res)=> {
    res.send("Display one dog Details !");
})
router.get('/:id/edit', (req, res)=> {
    res.send("Edit one Dog Details !");
})

module.exports = router;