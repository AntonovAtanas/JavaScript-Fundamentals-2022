const Animal = require('../models/Animal');

exports.getAll = () => Animal.find();

exports.add = (animalDetails) => Animal.create(animalDetails);

exports.getAnimal = (animalId) => Animal.findById(animalId);

exports.delete = (animalId) => Animal.findByIdAndDelete(animalId);

exports.edit = (animalId, animalData) => {
    return Animal.findByIdAndUpdate(animalId, animalData, { runValidators: true });
}

exports.donate = async (animalId, userId) => {
    const foundAnimal = await Animal.findById(animalId);

    foundAnimal.donations.push(userId);

    await foundAnimal.save();
}

exports.search = async (search) => {
    let allAnimals = await Animal.find().lean();

    if (search) {
        allAnimals = allAnimals.filter(animal => animal.location.toLowerCase().includes(search.toLowerCase()));
    };

    return allAnimals
}

exports.findLastThree = async () => {
    return Animal.find().sort({ _id: -1 }).lean()
}