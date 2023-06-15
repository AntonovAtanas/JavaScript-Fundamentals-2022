const Game = require('../models/Game')

exports.allGames = () => Game.find();

exports.addGame = (gameData) => Game.create(gameData)