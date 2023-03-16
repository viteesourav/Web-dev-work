const mongoose = require('mongoose');
const {Schema} = mongoose;
const Product = require('./product.js');

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name']
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'email cannot be empty']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

//this is a mongoose-middleware function/hook that are triggered for a very sepecific mongoose query which is findByIdAndDelete.
farmSchema.pre('findOneAndDelete', async(data)=>{
    console.log("Hello From the pre-middleware !!!");
    console.log("pre-middleware: ",data);
})

//NOTE: In the Pre-Middleware hook, the data is just an array of function with anonymos param and doesnot mean anything...

//NOTE: In the post-middleware hook, the deletedFarmData is the response of the mongoose query that triggered it.
farmSchema.post('findOneAndDelete', async(deletedFarmData)=>{
    console.log("Hello From the post-middleware !!!");
    console.log("post-middleware: ",deletedFarmData);
    const resp = await Product.deleteMany({_id: {$in: deletedFarmData.products}});   //this will delete all the entires from the Farm.product array by their ids.
    console.log("Successful deletion of linked schema entries:", resp);
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm; //this will make it accessable when we are requiring it.