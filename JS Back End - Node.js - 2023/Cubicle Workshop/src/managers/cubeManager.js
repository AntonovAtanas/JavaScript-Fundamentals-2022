const Cube = require('../models/Cube');

exports.add = (newCube) => {

    Cube.create(newCube)
};

exports.getAll = async (search, from, to) => {
    let cubes = await Cube.find().lean();

    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return cubes;
}

exports.getCube = (id) => {
    const cube = db.find(cube => cube.id === id);

    return cube;
}