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

exports.editGame = (gameId, { name, image, price, platform, genre, description }) => {
    Game.findByIdAndUpdate(gameId, { name, image, price, platform, genre, description }, { runValidators: true });
}

exports.findGame = async (search, platform) => {
    let allGames = await Game.find().lean();

    if (search){
        allGames = allGames.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));
    };

    if (platform) {
        allGames = allGames.filter(game => game.platform.toLowerCase().includes(platform.toLowerCase()));
    };

    return allGames
}