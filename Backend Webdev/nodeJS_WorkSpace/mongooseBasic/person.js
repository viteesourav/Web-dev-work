//This will show mongoose schema can be used to define virtual property and middleware hooks.
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product')
    .then(()=>{
        console.log("The connection to DB SuccessFul");
    })
    .catch(err=>{
        console.log("Connection Failure", err);
    });

//setting up the schema
const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

//defining a virtual entity on the schema
//getter method:
personSchema.virtual('fullName')
    .get(function() {
    return `${this.first} ${this.last}`;
    })
    .set(function(newName){      //The is the setter method
        const part = newName.split(' ');
        this.first = part[0];
        this.last = part[1];
        return `new FullName: ${this.first} ${this.last}`;
    })

//defining a new pre and post middleware functions for the Person Schema on save action
personSchema.pre('save', async function() {
    console.log('This is the Pre hook talking :| ');
});

personSchema.post('save', async function() {
    console.log('This is the post hook talking man :)');
})

//The above two things will runs pre and post for save operation.

const Person = mongoose.model('Person', personSchema);

//calling the getter Method...
// const man = new Person({first: 'Tiklu', last: 'Sharama'})
// man.save()
//     .then(res=>{
//         console.log("Entry added in the db", res);
//         //calling the virtual property
//         console.log("First name is: ", man.fullName);
//     });

// //calling the setter method:
// man.firstName = "Hollly Shit";