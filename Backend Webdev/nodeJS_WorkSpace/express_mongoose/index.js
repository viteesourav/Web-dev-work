//Full CRUD Implementation with Express, mongo and Mongoose.
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//requiring the model file here...
const Product = require('./models/product');

const bodyParser = require('body-parser');  //it's a middleware.
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/myFarmShopApp')
    .then(()=>{
        console.log("The connection to DB SuccessFul");
    })
    .catch(err=>{
        console.log("Connection Failure", err);
    });


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//setting the port for listening...
app.listen(8080, ()=>{
    console.log("The Server is up and Listening to 8080 !");
});

const category = ['fruits', 'vegies', 'dairy'];

//basic test route...
app.get('/test', (req,res)=>{
    console.log("Server is up and Running !");
    res.send("Hey this is Server is Working :) ");
});

//we will start writing the routes needed for the backend operations...
//index route..
app.get('/products', async (req,res)=>{
    const prodList = await Product.find({});  //this is a db operation so it takes time, so we will add await and make the function async.
    console.log(prodList);
    //res.send("All product Lists: ");
    res.render('products/index.ejs', {prodList}); //we are sending everthing we get in resp to EJS File as prodList object.
});

//detail/Show route...
app.get('/product/id/:id', async (req,res)=>{
    const {id} = req.params; //get the id passes in the url
    const foundprod = await Product.findById(id);
    console.log("Found the Searched Product: ",foundprod);
    //res.send("Found The Product");
    res.render('products/show.ejs', {product: foundprod});
});


//Create a new Entry
//Step1: navigate to the page to fill the data using the route
app.get('/product/new', (req,res)=>{
    console.log("This takes me to the form page.");
    res.render('products/newProduct.ejs', {category});
});
//step2: make the newProduct.ejs and make a post route to handle the post call..
app.post('/product', async (req,res)=>{
    const {name, price, category} = req.body;
    const newProd = new Product({
        name,price,category
    });
    console.log("New Item being added: ", newProd);
    await newProd.save(); //this will save the record in the db.
    res.redirect('/products'); //this will redirect the page after Submission back to Products page.
});

//updating the existing entry for a particular form
//step1: you need a route to take to edit page..
app.get('/product/id/:id/edit', async (req, res)=>{
    console.log("Taking to edit page to edit the data !");
    const {id} = req.params;
    const productData = await Product.findById(id);  //this will fetch the concern details of the Products
    productData.categoryDropDown = category;
    res.render('products/edit.ejs', {productData}); //this will render the edit page for editing the data
})
//step2: use method_override and call the put route call.
app.put('/product/id/:id', async (req,res)=>{
    const {id} = req.params;
    const {name, price, category} = req.body;
    const data = await Product.findByIdAndUpdate(id, {name, price, category}, {new:true, runValidators: true});
    console.log('updated Data: ', data);
    res.redirect(`/product/id/${id}`);
});

//deleting a item using delete route...
app.delete('/product/id/:id', async (req,res)=>{
    console.log("Deleteing a particualar request !");
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


