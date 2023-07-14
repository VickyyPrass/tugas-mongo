const Product = require("../models/productModels");

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductByID = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const saveProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const insertProducts = await product.save();
        res.status(201).json(insertProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updateProducts = await Product.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(updateProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const deleteProducts = await Product.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getProduct,
    getProductByID,
    saveProduct,
    updateProduct,
    deleteProduct,
};
