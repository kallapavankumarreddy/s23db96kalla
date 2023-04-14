const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
brand: String,
price: Number,
color: String
})
module.exports = mongoose.model("pen",penSchema)