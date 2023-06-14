const Pet = require('../models/Pets');

exports.addPet = (petData) => Pet.create(petData);

