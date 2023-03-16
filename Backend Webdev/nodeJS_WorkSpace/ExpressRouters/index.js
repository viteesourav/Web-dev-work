const express = require('express');
const app = express();
const sheltersRoute = require('./routes/shelters');
const dogRoute = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

// This is how you group similar Routes and make the code look much more clean...

//this will call all the Routes from Shelter.js and the Route will begin with /shelterRoutes
app.use('/shelterRoutes', sheltersRoute); 
//this will call all the Routes from dogs.js and the Route will begin with /myDogsRoutes
app.use('/myDogsRoutes', dogRoute);
//Routes from Admin with private middleware check function.
app.use('/admin', adminRoutes);

app.listen('3000', ()=>{
    console.log('App is Running on the Port 3000 !');
})