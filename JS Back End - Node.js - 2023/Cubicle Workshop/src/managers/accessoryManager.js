const mongoose = require('mongoose');
const Accessory = require('../models/Accessory');

exports.addAccessory = async (newAccessory) => {
    await Accessory.create(newAccessory);
}