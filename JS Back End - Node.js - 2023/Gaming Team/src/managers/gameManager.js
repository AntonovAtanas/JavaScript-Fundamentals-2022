const Game = require('../models/Game')

exports.addGame = (gameData) => Game.create(gameData)