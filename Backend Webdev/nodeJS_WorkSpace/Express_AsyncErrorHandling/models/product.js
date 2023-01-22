const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be Empty']
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be Empty'],
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruits', 'vegies', 'dairy']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; //this will make it accessable when we are requiring it.