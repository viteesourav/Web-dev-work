//This is an Example of a crud with express + mongoose.
//We will try to add a customise Express Error Handling and handle error in async functions...

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); //just to remove the console error
const methodOverride = require('method-override');

//requiring the custom error handler class
const AppError = require('./AppError.js');

//requiring the model file here...
const Product = require('./models/product');

const bodyParser = require('body-parser');  //it's a middleware.
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/myFarmShopApp2')
    .then(()=>{
        console.log("The connection to DB SuccessFul");
    })
    .catch(err=>{
        console.log("Connection Failure", err);
    });


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//setting the port for listening...
app.listen(3000, ()=>{
    console.log("The Server is up and Listening to 3000 !");
});

const category = ['fruits', 'vegies', 'dairy'];

/* 
   NOTE: Basically everywhere where we are calling async call and db calls, we should put that under try..catch and handle for any error.
*/

//basic test route...
app.get('/test', (req,res)=>{
    //console.log("Server is up and Running !");
    res.send("Hey this is Server is Working :) ");
});

//Defining the wrapAsync utility function
function wrapAsync(fun) {
    return function(req,res,next) {                   //it returns a function
        fun(req,res,next).catch(err => next(err));   //this line, basically executes the passes fun and chains a .catch to catch any error, next will trigger the custom error handler.
    }
}

//index route..
app.get('/products', wrapAsync(async (req,res,next)=>{
    const prodList = await Product.find({});  //this is a db operation so it takes time, so we will add await and make the function async.
    //console.log(prodList);
    //res.send("All product Lists: ");
    res.render('products/index.ejs', {prodList}); //we are sending everthing we get in resp to EJS File as prodList object.
}));

//Basic example of using a try..catch block to catch and handle the error, Rest place we are going to use wrapAsync utility function.
//show Route with error handler...
app.get('/product/id/:id', async (req,res, next)=>{
try {
    const {id} = req.params; //get the id passes in the url
    const foundprod = await Product.findById(id);
    if(!foundprod) {
        //below line can work if you are not putting it in try..catch block
        //return next(new AppError('Product is not found', 404)); //next call with the error class will look for the next error handling middleware to execute below...
        throw new AppError('Product is not found', 404);
    }
    //console.log("Found the Searched Product: ",foundprod);
    //res.send("Found The Product");
    res.render('products/show.ejs', {product: foundprod});
} catch(err) {
    return next(err); //this catch will also catch the newAppError and next trigger the below error handler
}
});


//Create a new Entry
//Step1: navigate to the page to fill the data using the route
app.get('/product/new', (req,res)=>{
    //console.log("This takes me to the form page.");
    res.render('products/newProduct.ejs', {category});
});
//step2: make the newProduct.ejs and make a post route to handle the post call..
app.post('/product', wrapAsync(async (req,res,next)=>{
    const {name, price, category} = req.body;
    const newProd = new Product({
        name,price,category
    });
    //console.log("New Item being added: ", newProd);
    await newProd.save(); //this will save the record in the db.
    res.redirect('/products'); //this will redirect the page after Submission back to Products page.
}));

//updating the existing entry for a particular form
//step1: you need a route to take to edit page..
app.get('/product/id/:id/edit', wrapAsync( async (req, res,next)=>{
    console.log("Taking to edit page to edit the data !");
    const {id} = req.params;
    const productData = await Product.findById(id);  //this will fetch the concern details of the Products
    if(!productData) {
        throw new AppError('Product is not found', 404); // if the product is not found, then this will throw the error.
    }
    productData.categoryDropDown = category;
    res.render('products/edit.ejs', {productData}); //this will render the edit page for editing the data\
}))
//step2: use method_override and call the put route call.
app.put('/product/id/:id', wrapAsync( async (req,res,next)=>{
    const {id} = req.params;
    const {name, price, category} = req.body;
    const data = await Product.findByIdAndUpdate(id, {name, price, category}, {new:true, runValidators: true});
    //console.log('updated Data: ', data);
    res.redirect(`/product/id/${id}`);
}));

//deleting a item using delete route...
app.delete('/product/id/:id', wrapAsync( async (req,res,next)=>{
    console.log("Deleteing a particualar request !");
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
}))



//From here we will be writing the custom error handling middleware...

const handleValidationError = err => {
    console.dir(err); //shows the error thrown because of validation.
    return new AppError(`Validation Failed ${err.message}`, 400); //this will throw a customised error message for validation
}

//calling an error middleware to catch only validation error.
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === 'ValidationError') err = handleValidationError(err);
    next(err);                //this will trigger the below error-middleware since am passing next with err param.
})

//custom error handler to hadnle the error...
app.use((err, req, res, next)=>{
    const{status = 500, message = 'Something went wrong'} = err;  //destructing the error object and also assigning default values.
    res.status(status).send(message);
})