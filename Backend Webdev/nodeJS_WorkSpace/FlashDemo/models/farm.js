const mongoose = require('mongoose');
const {Schema} = mongoose;

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
    }
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm; //this will make it accessable when we are requiring it.