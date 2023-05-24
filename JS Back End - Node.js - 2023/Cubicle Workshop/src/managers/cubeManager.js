const uniqid = require('uniqid');

let db = [];

exports.add = (newCube) => {

    let cube = {
        id: uniqid(),
        ...newCube
    }
    db.push(cube);
    
    console.log(db);
}