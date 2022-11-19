function travelTime(input) {

    let travelObject = {};
    let finalObject = {};

    for (const line of input) {
        let [country, city, price] = line.split(" > ");
        if (!travelObject.hasOwnProperty(country)) {
            travelObject[country] = [];
        }

        if (travelObject[country].includes(city)) {
            let indexOfSameCity = travelObject[country].indexOf(city);
            if (travelObject[country][indexOfSameCity + 1] >= price) {
                travelObject[country][indexOfSameCity + 1] = price
            }
        } else {
            travelObject[country].push(city);
            travelObject[country].push(price);
        }
    }

    let travelArray = Object.entries(travelObject);

    for (let i = 0; i < travelArray.length; i++) {
        let currentArray = travelArray[i];
        let citiesArray = currentArray[1];

        for (let k = 0; k < citiesArray.length; k++) {
            citiesArray[k] += ` ${citiesArray[k + 1]}`;
            citiesArray.splice(k + 1, 1)
        }
    }

    travelArray.sort((a, b) => a[0].localeCompare(b[0]))

    for (let i = 0; i < travelArray.length; i++) {
        let currentCountry = travelArray[i];
        let countryTowns = currentCountry[1]
        countryTowns.sort((cityA, cityB) => {
            let [townA, priceA] = cityA.split(" ")
            let [townB, priceB] = cityB.split(" ")
            return priceA - priceB
        })
    }

    for (let i = 0; i < travelArray.length; i++) {
        let currentCountry = travelArray[i];
        for (let k = 1; k < currentCountry.length; k++) {
            let country = currentCountry[0]
            let currentCities = currentCountry[k];
            for (const line of currentCities) {
                let [city, price] = line.split(' ')
                let arrow = " -> ";
                let cityInfo = city + arrow + price

                if (!finalObject.hasOwnProperty(country)) {
                    finalObject[country] = []
                }
                finalObject[country].push(cityInfo)
            }
        }
    }

    for (const key in finalObject) {
        console.log(`${key} -> ${finalObject[key].join(' ')}`)
    }
}

travelTime([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

])