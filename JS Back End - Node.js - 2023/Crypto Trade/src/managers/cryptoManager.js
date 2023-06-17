const Crypto = require('../models/Crypto');

exports.allProducts = () => Crypto.find();

exports.addProduct = (productData) => Crypto.create(productData);

exports.getProduct = (productId) => Crypto.findById(productId);

exports.deleteProduct = (productId) => Crypto.findByIdAndDelete(productId);

exports.editProduct = (productId, productData) => {
    Crypto.findByIdAndUpdate(productId, productData, { runValidators: true });
}