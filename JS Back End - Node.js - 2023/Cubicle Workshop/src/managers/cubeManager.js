const uniqid = require('uniqid');

let db = [];

exports.add = (newCube) => {

    let cube = {
        id: uniqid(),
        ...newCube
    }
    db.push(cube);
};

exports.getAll = () => {
    let cubes = db.slice();

    return cubes;
}

exports.getCube = (id) => {
    const cube = db.find(cube => cube.id === id);

    return cube;
}