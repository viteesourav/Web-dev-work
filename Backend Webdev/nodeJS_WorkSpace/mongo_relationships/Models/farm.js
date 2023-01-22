//mongoose code to see mongoose Relationships : one to many
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true); //this suppress the error

//connection with the db
mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationship')
    .then(()=>{
        console.log("Successfully connected to the MongoDB");
    })
    .catch(()=>{
        console.log('error while connecting to the DB');
    })


const productsSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Winter', 'Summer', 'Spring', 'Fall']
    }
})

const Product = mongoose.model('Product', productsSchema);

const farmSchema = new Schema({
    name: String,
    location: String,
    produce: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Farm = mongoose.model('Farm', farmSchema);

const seedProductData = async() =>{
    const result = await Product.insertMany([
        {name: 'potato', price: 20, season: 'Summer'},
        {name: 'watermelon', price: 50, season: 'Fall'},
        {name: 'corn', price: 100, season: 'Winter'}
    ]);
    console.log("Product data seeded");
}

// seedProductData();

const addFarmData = async() =>{
    const farm = new Farm({
        name: 'MyFarmDairy',
        location: 'India'
    });
    const potatoData = await Product.findOne({name: 'potato'});
    farm.produce.push(potatoData);
    const resp = await farm.save();
    console.log(resp); 
}

// addFarmData();

const addnewProductToFarm = async()=>{
    const farmData = await Farm.findOne({name: 'MyFarmDairy'});
    const cornProduct = await Product.findOne({name: 'corn'});
    farmData.produce.push(cornProduct);
    const resp = await farmData.save();
    console.log(resp);
}

// addnewProductToFarm();

//This is to view the Parent schema with the nested one..
Farm.findOne({name: 'MyFarmDairy'})
.populate('produce') //This entity we need to populate with the ids
.then((resp)=>{
    console.log("Farm Data with populated Produce Datas: ", resp);
})

//If you dont need produce data, just call it without populate
Farm.findOne({name: 'MyFarmDairy'})
.then((resp)=>{
    console.log("Farm Data without populating the produce: ",resp);
})