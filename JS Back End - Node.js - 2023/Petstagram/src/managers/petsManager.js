const Pet = require('../models/Pets');

exports.addPet = (petData) => Pet.create(petData);

exports.getAllPets = () => Pet.find().populate('owner');

exports.getPet = (petId) => Pet.findOne(petId);