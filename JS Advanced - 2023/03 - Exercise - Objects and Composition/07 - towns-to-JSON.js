function townsToJSON(data) {

    let towns = [];
    let [town, latitude, longitude] = data.shift().split(' | ');
    town = town.slice(2);
    longitude = longitude.slice(0, -2)

    for (const townInfo of data) {
        let obj = {};
        let [currentTown, currentLatitude, currentLongitude] = townInfo.split(' | ');
        currentTown = currentTown.slice(2);
        currentLongitude = currentLongitude.slice(0, -2);
        currentLatitude = Number(currentLatitude).toFixed(2);
        currentLongitude = Number(currentLongitude).toFixed(2);

        obj[town] = currentTown;
        obj[latitude] = Number(currentLatitude);
        obj[longitude] = Number(currentLongitude);

        towns.push(obj);
    }
    console.log(JSON.stringify(towns))
}

townsToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);

console.log('--------');

townsToJSON(['| Town | Latitude | Longitude |',

    '| Veliko Turnovo | 43.0757 | 25.6172 |',

    '| Monatevideo | 34.50 | 56.11 |'])