const Crypto = require('../models/Crypto');

exports.allProducts = () => Crypto.find();

exports.addCrypto = (cryptoDetails) => Crypto.create(cryptoDetails);

exports.getCrypto = (cryptoId) => Crypto.findById(cryptoId);

exports.deleteCrypto = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.editProduct = (productId, productData) => {
    return Crypto.findByIdAndUpdate(productId, productData, { runValidators: true });
};

exports.buyCrypto = async (cryptoId, userId) => {
    const foundCrypto = await Crypto.findById({ _id: cryptoId });
    foundCrypto.boughtBy.push(userId);
    await foundCrypto.save();
}