// Import model

exports.allBooks = () => Game.find();

exports.addProduct = (productData) => Game.create(productData);

exports.getProduct = (productId) => Game.findById(productId);

exports.deleteProduct = (productId) => Game.findByIdAndDelete(productId);

exports.editProduct = (productId, productData) => {
    Game.findByIdAndUpdate(productId, productData, { runValidators: true });
}