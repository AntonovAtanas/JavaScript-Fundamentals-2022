function townsObject(input) {

    let townObj = {

    }

    for (let i = 0; i < input.length; i++) {
        let currentTown = input[i].split(" | ");
        let town = currentTown[0];
        let latitude = (Number(currentTown[1])).toFixed(2);
        let longitude = (Number(currentTown[2])).toFixed(2);
        // best practice - let [town, latitude, longitude] = input[i].split(" | ");
        townObj.town = town;
        townObj.latitude = latitude;
        townObj.longitude = longitude;

        console.log(townObj)
    }

}

townsObject(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])