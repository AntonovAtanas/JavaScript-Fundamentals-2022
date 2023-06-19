// Import model
const Auction = require('../models/Auction')

exports.getAll = () => Auction.find();

exports.addAuction = (auctionData) => Auction.create(auctionData);

exports.getAuction = (auctionId) => Auction.findById(auctionId).populate('owner').populate('bidder');

exports.deleteProduct = (productId) => Auction.findByIdAndDelete(productId);

exports.editProduct = (productId, productData) => {
    return Auction.findByIdAndUpdate(productId, productData, { runValidators: true });
}

exports.bid = async (auctionId, userId, bid) => {
    const foundAuction = await Auction.findById(auctionId);

    foundAuction.price = bid;
    foundAuction.bidder = userId;

    await foundAuction.save()
}