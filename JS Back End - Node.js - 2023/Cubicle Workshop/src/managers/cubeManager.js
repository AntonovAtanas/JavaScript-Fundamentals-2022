const uniqid = require('uniqid');

let db = [];

exports.add = (newCube) => {

    let cube = {
        id: uniqid(),
        ...newCube
    }
    db.push(cube);
};

exports.getAll = (search, from, to) => {
    let cubes = db.slice();

    if (search){
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from){
        cubes = cubes.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to){
        cubes = cubes.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return cubes;
}

exports.getCube = (id) => {
    const cube = db.find(cube => cube.id === id);

    return cube;
}