const Crypto = require('../models/Crypto');

exports.allCrypto = () => Crypto.find();

exports.addCrypto = (cryptoDetails) => Crypto.create(cryptoDetails);

exports.getCrypto = (cryptoId) => Crypto.findById(cryptoId);

exports.deleteCrypto = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.editCrypto = (productId, productData) => {
    return Crypto.findByIdAndUpdate(productId, productData, { runValidators: true });
};

exports.buyCrypto = async (cryptoId, userId) => {
    const foundCrypto = await Crypto.findById({ _id: cryptoId });
    foundCrypto.boughtBy.push(userId);
    await foundCrypto.save();
};

exports.searchCrypto = async (name, payment) => {
    let allCrypto = await Crypto.find().lean();

    if (name) {
        allCrypto = allCrypto.filter(crypto => crypto.name.toLowerCase().includes(name.toLowerCase()));
    };

    if (payment) {
        allCrypto = allCrypto.filter(crypto => crypto.payment.toLowerCase() == payment.toLowerCase());
    };

    return allCrypto
}