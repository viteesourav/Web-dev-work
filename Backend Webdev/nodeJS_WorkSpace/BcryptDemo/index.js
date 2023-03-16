const bcrypt = require('bcrypt'); //this the auth package we are using...

//our pwdHashing function...
//method 1: generate saltVal first and then hash.
// const pwdHashing = async(pwd) =>{
//     const saltVal = await bcrypt.genSalt(12);  //generated the salt value.
//     const hashedPass = await bcrypt.hash(pwd, saltVal);
//     console.log(`Salt Value is: ${saltVal}`);
//     console.log(`The hashed Value for my password: ${hashedPass}`);
//     return hashedPass;
// }

//method2: directly use hash with salt Round (mostly used)
const pwdHashing = async(pwd) =>{
    const hashedPass = await bcrypt.hash(pwd, 12); //passing saltRound instead of saltValue.
    console.log(`The hashed Value for my password: ${hashedPass}`);
    return hashedPass;
}

//function to check the normal text with hashed text..
const login = async(pass, hashedPass) =>{
    //i will try to compare it will plan text to see if it matches ?
    if(await bcrypt.compare(pass, hashedPass)) {
        console.log('Matched successfully');
    }else {
        console.log('Wrong password');
    }
}

//check the login
const checkLogin = async() =>{
    const hashedVal = await pwdHashing('Sou@1234');  //this is the hashed pass that it stores in DB
    login('Sou@234', hashedVal); //this is the pass user is trying to login with.
}

checkLogin();