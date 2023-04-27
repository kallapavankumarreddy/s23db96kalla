const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
    brand: {type:String, minlength:2,maxlength:30},
    price: {type:Number, min:2,max:800},
    color: {type:String, minlength:1,maxlength:50}
})
module.exports = mongoose.model("pen",penSchema)