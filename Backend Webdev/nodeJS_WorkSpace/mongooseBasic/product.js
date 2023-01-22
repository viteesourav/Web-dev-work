//This shows the Model Schema can do more then just defining types
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product')
    .then(()=>{
        console.log("The connection to DB SuccessFul");
    })
    .catch(err=>{
        console.log("Connection Failure", err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        default: 0,  //default to 0.
        min: [0, '***Yo Fuck ! price always positive you Ass**']  //the minimum value will be 0 and the error msage..
    },
    category: {   //This says this category has to be an array of Strings.
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S','M','L'] //This define size can be only S or M or L
    },
    onSale : {
        type: Boolean,
        default: true
    }
});

//Defining our own instance methods on the schema
productSchema.methods.callIt = function() {
    console.log("Hello ! this is a custom method !!");
    console.log("I am called by", this.name);
}

//custom method to increase the price by 100
productSchema.methods.upPrice = function() {
    this.price = Number(this.price) + 100;
    return this.save(); //this will take time so it will return a thenable object.
}

//custom method to insert data in the category
productSchema.methods.addElementToCategory = function(newItem) {
    this.category.push(newItem);
    return this.save();
}

//Defining a custom Static method.
productSchema.statics.updateSales = function() {
    return this.updateMany({}, {onSale: true, price: 100});  //here this refers to the Product
}

const Product = mongoose.model('Product', productSchema);

//lets try inserting data using the model.
// const scooty = new Product({name: "Scooty", price:45000});
// scooty.save()
//     .then(res=>{
//         console.log("Data Inseted in the db", res);
//     });

//Here it will throw a error saying name is missing..
// const bike = new Product({price:85000});
// bike.save()
//     .then(res=>{
//         console.log("Data Inseted in the db", res);
//     })
//     .catch(err=>{
//         console.log("Data Missing !!");
//         console.log(err);
//     });

//Lets try to insert data using the above schema...
// const prod = new Product({name: "Book", price: 23.00, category: ["Horror", "Rom-Com"], qty:{online:200}});
// prod.save()
//     .then(res=>{
//         console.log("Data Saved to DB");
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log("Error Occured", err);
//     });

//Updating using mongoose with the validator option true. **By Default it is false**
// Product.findOneAndUpdate({name: 'Book'}, {price: 40}, {new: true, runValidators: true})
//     .then(res=>{
//         console.log("Data Updated to DB");
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log("Error Occured", err);
//     });

//Trying out the custom method that we have defined on the schema
// const findProduct = async ()=>{
//      const foundProd =  await Product.findOne({name: 'Scooty'});
//      foundProd.callIt();
//      await foundProd.upPrice();
//      await foundProd.addElementToCategory('mirrors');
//      console.log(foundProd);
// }

// findProduct();

//Example of using a static methods
Product.updateSales()  //this updates every entry and returns a promise since updateMany will take time.
    .then(res=>{
        console.log("After Running the static Method: ");
        console.log(res);
    })