const Accessory = require('../models/Accessory');

exports.addAccessory = async (newAccessory) => {
    await Accessory.create(newAccessory);
}

exports.getAll = () => {
    return Accessory.find();
}

