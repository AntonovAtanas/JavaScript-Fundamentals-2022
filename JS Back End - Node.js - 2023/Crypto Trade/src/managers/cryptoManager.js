const Crypto = require('../models/Crypto');

exports.allProducts = () => Crypto.find();

exports.addProduct = (cryptoDetails) => Crypto.create(cryptoDetails);

exports.getCrypto = (cryptoId) => Crypto.findById(cryptoId);

exports.deleteProduct = (productId) => Crypto.findByIdAndDelete(productId);

exports.editProduct = (productId, productData) => {
    Crypto.findByIdAndUpdate(productId, productData, { runValidators: true });
}