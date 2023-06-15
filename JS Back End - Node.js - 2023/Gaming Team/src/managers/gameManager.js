const Game = require('../models/Game')

exports.allGames = () => Game.find();

exports.addGame = (gameData) => Game.create(gameData);

exports.getGame = (gameId) => Game.findById(gameId);

exports.buyGame = async (gameId, userId) => {
    const foundGame = await Game.findById(gameId);

    foundGame.boughtBy.push(userId);

    await foundGame.save();
}

exports.deleteGame = (gameId) => Game.findByIdAndDelete(gameId);