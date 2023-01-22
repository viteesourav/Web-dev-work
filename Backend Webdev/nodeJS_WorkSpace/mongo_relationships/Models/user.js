//mongoose code to see mongoose Relationships : one to few
const mongoose = require('mongoose');
mongoose.set('strictQuery', true); //this suppress the error

//connection with the db
mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationship')
    .then(()=>{
        console.log("Successfully connected to the MongoDB");
    })
    .catch(()=>{
        console.log('error while connecting to the DB');
    })

const userSchema = mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: {id: false},
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const addOneUser = async() =>{
    const userData = new User({
        first: 'Tester',
        last: 'Lakshman',
    });
    userData.addresses.push({
        city: 'Mumbai',
        state: 'Maharastra',
        country: 'India'
    })
    const resp = await userData.save();
    console.log(resp);
}

// addOneUser();

const addAddressToUser  = async(id) =>{
    const userData = await User.findById(id);
    userData.addresses.push({
        city: 'newTestAddress',
        state: 'SomeSate',
        country: 'India'
    });
    const resp = await userData.save();
    console.log(resp);
}

addAddressToUser('63cbccba284796c52e436035');