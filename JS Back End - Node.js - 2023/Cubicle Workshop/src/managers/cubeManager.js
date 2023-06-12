const Cube = require('../models/Cube');

exports.add = (newCube) => Cube.create(newCube)

exports.getAll = (search, from, to) => {
    let cubes = Cube.find();


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
    const cube = Cube.findById(id).populate('accessories');

    return cube;
}

exports.attachAccessory = (cubeId, accessoryId) => {

     Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } })

    // const cube = await Cube.findById(cubeId);
    // cube.accessories.push(accessoryId);
    // await cube.save()
}

exports.updateCube = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.deleteCube = (cubeId) => Cube.findByIdAndDelete(cubeId);