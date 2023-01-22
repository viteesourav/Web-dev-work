/*NOTE:
This file needs to Run seperately.
It is just for development purpose to add new data in the MS.
*/
const mongoose = require('mongoose');

//requiring the model file here...
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/myFarmShopApp2')
    .then(()=>{
        console.log("The connection to DB SuccessFul");
    })
    .catch(err=>{
        console.log("Connection Failure", err);
    });

//lets add one product to see if it works..
// const newProduct = new Product({
//     name: 'Egg Plant',
//     price: 50,
//     category: 'vegies'
// });

// newProduct.save()
//     .then(res=> console.log(res))
//     .catch(err=> console.log(err));

//Lets use the insertMany to insert many such records in the db.
const seedArray = [
    {
        name: 'Potato',
        price: 24,
        category: 'vegies'
    },
    {
        name: 'panner',
        price: 60,
        category: 'dairy'
    },
    {
        name: 'apple',
        price: 24,
        category: 'fruits'
    },
    {
        name: 'carrot',
        price: 50,
        category: 'vegies'
    },
    {
        name: 'milk',
        price: 70,
        category: 'dairy'
    }
];

//usning the Model method to insert all the data...
Product.insertMany(seedArray)
    .then(res=> console.log(res))
    .catch(err=> console.log(err));