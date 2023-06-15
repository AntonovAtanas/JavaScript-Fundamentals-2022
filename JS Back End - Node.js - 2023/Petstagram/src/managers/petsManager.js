const Pet = require('../models/Pets');

exports.addPet = (petData) => Pet.create(petData);

exports.getAllPets = () => Pet.find().populate('owner');

exports.getPet = (petId) => Pet.findById(petId).populate('owner').populate('commentList.user')

exports.addComment = async (user, comment, petId) => {
    const foundPet = await Pet.findById(petId);

    foundPet.commentList.push({ user, message: comment });

    await foundPet.save();
}

exports.deletePet = (petId) => Pet.findByIdAndDelete(petId);

exports.edit = (petId, petData) => Pet.findByIdAndUpdate(petId, petData);

exports.getUserPets = (userId) => Pet.find({ owner: userId })