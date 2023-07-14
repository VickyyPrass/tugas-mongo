const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "field nama harus di isi"],
        minlength: 3,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 999999999,
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
