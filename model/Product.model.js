const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
   ProductCode: {
    type: String,
    required: true
   },
   ProductName: {
    type: String,
    unique: true,
    required: true
   },
   ProductDate: {
    type: Date
   },
   ProductOriginPrice: {
    type: Number,
    required: true
   },
   Quantity: {
    type: Number,
    required: true
   },
   ProductStoreCode: {
    type: String,
    required: true
   },

});
module.exports = mongoose.model("ProductCollection",product_schema);