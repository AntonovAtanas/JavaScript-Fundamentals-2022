// Import model

exports.allProducts = () => Game.find();

exports.addProduct = (productData) => Game.create(productData);

exports.getProduct = (productId) => Game.findById(productId);

exports.deleteProduct = (productId) => Game.findByIdAndDelete(productId);

exports.editProduct = (productId, productData) => {
    return Game.findByIdAndUpdate(productId, productData, { runValidators: true });
}