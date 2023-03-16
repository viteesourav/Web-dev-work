const express = require('express');
const router = express.Router();

//this Router basically groups all the Shelter routes.
/*
GET  /shelters
POST /shelters
GET  /shelters/:id
GET  /shelters/:id/edit
*/

router.get('/', (req, res)=> {
    res.send("Display all the Shelters !");
})
router.post('/', (req, res)=> {
    res.send("Add a new Shelter");
})
router.get('/:id', (req, res)=> {
    res.send("Display one Shelter Details !");
})
router.get('/:id/edit', (req, res)=> {
    res.send("Edit one Shelters !");
})

module.exports = router;
