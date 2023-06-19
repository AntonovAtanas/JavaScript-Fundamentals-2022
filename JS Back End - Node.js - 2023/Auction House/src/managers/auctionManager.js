const Auction = require('../models/Auction')

exports.getAll = () => Auction.find();

exports.addAuction = (auctionData) => Auction.create(auctionData);

exports.getAuction = (auctionId) => Auction.findById(auctionId).populate('owner').populate('bidder');

exports.delete = (auctionId) => Auction.findByIdAndDelete(auctionId);

exports.edit = (auctionId, auctionDetails) => {
    return Auction.findByIdAndUpdate(auctionId, auctionDetails, { runValidators: true });
}

exports.bid = async (auctionId, userId, bid) => {
    const foundAuction = await Auction.findById(auctionId);

    foundAuction.price = bid;
    foundAuction.bidder = userId;

    await foundAuction.save()
}