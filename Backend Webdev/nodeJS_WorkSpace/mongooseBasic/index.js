//This is how you connect to mongo using mongoose..
const mongoose = require('mongoose');
//note: If the db doesnot exit it wil make a new db for me.
//To handle the connections handshake, We can handle using promises.
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{
        console.log("The connection to DB SuccessFul");
    })
    .catch(err=>{
        console.log("Connection Failure", err);
    });

//lets make a model to work with the data from the mongo.
const movieSchema = new mongoose.Schema({
    title: String,
    year:Number,
    score: Number,
    rating: String
});

//now useing the schema i will make a model
const Movie = mongoose.model('Movie', movieSchema);  //here the first one is name of the Model and the next one is the schemaName.
//the collection name this will create is 'movies'.

//here Movie is a model Class thats represents the Data from the database schema Movie.

//let create a new instance of that class and save it to the db.
// const newMovie = new Movie({title: "Journey With ME", year: 1998, score: 3.8, rating:'R'});
// newMovie.save(); //this will actually save the entire content of the new movies to the db.

//*********saving multiple Data in the table.
// Movie.insertMany([
//     {title: "Doramon", year: 2010, score: 3.8, rating:'R'},
//     {title: "Pokemon", year: 2015, score: 4.1, rating:'R'},
//     {title: "Hotel De Luna", year: 2017, score: 3.9, rating:'R'},
//     {title: "Business Proposal", year: 2020, score: 5.0, rating:'R'},
//     {title: "Whats Wrong with me", year: 2025, score: 4.4, rating:'R'}
// ]).then(data=>{
//     console.log("Data successfully inserted");
//     console.log(data);
// }).catch(err=>{
//     console.log("something went Wrong !");
//     console.log(err);
// });

//************finding a Data in the db using mongoose.
//method1: using .then()
// Movie.find({year:{ $gt : 2017}})
//     .then((data)=> {
//         console.log("Record Found !");
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log("Error !!!");
//         console.log(err);
//     });

//method2: using await using async fucntion for searching
// const searchAllRes = async ()=>{
//     try{
//         const res = await Movie.find({}).exec();  //.exec() -> returns a proper promise object.
//         console.log('Record Found !');
//         console.log(res);
//     } catch(err) {
//         console.log('somthing went Wrong !');
//         console.log(err);
//     }
// };
// searchAllRes();


//******seaching by id...(Most Frequently used in Express App)
// Movie.findById('638e51a2d70a32c775fbb97f')
//     .then(resp => {
//         console.log('Record mathing with the id is:',resp);
//     })
//     .catch(err=>{
//         console.log('No data Found !');
//     })

//******updating the data in the DB********
//method_1: using standard updateOne and updateMany.
// Movie.updateOne({title : "Jorney With ME"}, {score: 4.8})
//     .then(res=>{
//         console.log("Result of updating only one Record: ", res);
//     });
// Movie.updateMany({title: {$in : ['Pokemon', 'Whats Wrong with me']}}, {rating: 'PG-13'})
//     .then(res=>{
//         console.log("Result of updating multiple Record: ",res);
//     });

//method_2: using the Model methods like findoneandUpdate.
// let searchQuery = {title: "Journey With the Kings"}
// Movie.findOneAndUpdate(searchQuery, {title: 'Journey With the Kings', year: 2013, score: 4.1}, {new: true})
//     .then(res=>{
//         console.log("The REsult after doing findOneAndUpdate: ",res);
//     });
//NOTE: This will print the matched ITem data not the updated Data without new key, By default it is false.
//To Return the modified Document we need to add a third param as {new: true}

//*****Mongoose Delete
let q = {score: 10}
Movie.findOneAndDelete(q)
    .then(res=>{
        console.log("The Deleted Item is: ",res);
    });
//This will return the deleted Item.