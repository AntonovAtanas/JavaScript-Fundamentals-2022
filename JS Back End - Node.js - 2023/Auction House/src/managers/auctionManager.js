// Import model
const Auction = require('../models/Auction')

exports.getAll = () => Auction.find();

exports.addAuction = (auctionData) => Auction.create(auctionData);

exports.getAuction = (auctionId) => Auction.findById(auctionId).populate('owner');

exports.deleteProduct = (productId) => Auction.findByIdAndDelete(productId);

exports.editProduct = (productId, productData) => {
    return Auction.findByIdAndUpdate(productId, productData, { runValidators: true });
}