const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blanked !']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blanked !']
    }
});

//mongoose middleware pre-hook to handle hashing of password before saving...
userSchema.pre('save', async function(next) {
    console.log('Hey, This is the save middleware running !');
    //this will see if the password is already hashed and no change then it will skip hashing of the already hashed password.
    if(!this.isModified('password')) return next();
    const hashedPass = await bcrypt.hash(this.password, 12); //this will generate a hashed password.
    this.password = hashedPass; //update the hashed password in the schema.
    return next();
})


//This is a static method declared on top of the schema, That checks and validate the user's Cred...
userSchema.statics.findUserAndValidate = async function(username, password) {
    const foundUser = await this.findOne({username: username});
    if(!foundUser) return false;
    const isValidUser = await bcrypt.compare(password, foundUser.password);
    return isValidUser ? foundUser : false;
}


module.exports = mongoose.model('User', userSchema);