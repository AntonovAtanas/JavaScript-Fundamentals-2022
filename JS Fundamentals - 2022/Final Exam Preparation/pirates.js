function pirates(input) {

    let object = {};
    let cityInfo = input.shift();

    while (cityInfo !== "Sail") {

        let [cityName, population, gold] = cityInfo.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!object[cityName]) {
            object[cityName] = { gold: gold, population: population }
        } else {
            object[cityName]['gold'] += gold;
            object[cityName]['population'] += population;
        }
        cityInfo = input.shift();
    }

    let event = input.shift();

    while (event !== 'End') {
        if (event.includes('Plunder')) {
            let [plunder, cityName, population, gold] = event.split('=>');
            population = Number(population);
            gold = Number(gold);
            if (object.hasOwnProperty(cityName)) {
                object[cityName]['gold'] -= gold;
                object[cityName]['population'] -= population;
                console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            }
            if (object[cityName]['gold'] == 0 || object[cityName]['population'] == 0) {
                delete object[cityName];
                console.log(`${cityName} has been wiped off the map!`)
            }
        } else if (event.includes('Prosper')) {
            let [prosper, cityName, gold] = event.split('=>');
            gold = Number(gold);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!')
            } else {
                object[cityName]['gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${cityName} now has ${object[cityName]['gold']} gold.`)
            }
        }
        event = input.shift();
    }

    let counter = Object.keys(object).length;

    if (counter > 0) {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`)
        for (const key in object) {
            console.log(`${key} -> Population: ${object[key].population} citizens, Gold: ${object[key].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

pirates
    (["Tortuga||345000||1250",

        "Santo Domingo||240000||630",

        "Havana||410000||1100",

        "Sail",

        "Plunder=>Tortuga=>75000=>380",

        "Prosper=>Santo Domingo=>180",

        "End"])

    // (["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])