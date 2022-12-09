function movies(input) {

    let moviesArray = [];

    input.forEach((line) => {

        if (line.includes("addMovie")) {
            let name = line.split("addMovie ")[1]
            moviesArray.push({ name: name })

        } else if (line.includes("directedBy")) {
            let splittedCommand = line.split(" directedBy ")
            let foundMovie = splittedCommand[0];
            let director = splittedCommand[1];

            for (let i = 0; i < moviesArray.length; i++) {
                let findMovie = moviesArray[i]
                let exist = Object.values(findMovie).includes(foundMovie);
                if (exist) {
                    moviesArray[i].director = director
                }
            }
        } else if (line.includes("onDate")) {
            let splittedCommand = line.split(" onDate ");
            let foundMovie = splittedCommand[0];
            let date = splittedCommand[1];

            for (let i = 0; i < moviesArray.length; i++) {
                let findMovie = moviesArray[i]
                let exist = Object.values(findMovie).includes(foundMovie);
                if (exist) {
                    moviesArray[i].date = date
                }
            }
        }
    });

    moviesArray.forEach(element => {
        if (element.hasOwnProperty("name") && element.hasOwnProperty("director") && element.hasOwnProperty("date")) {
            console.log(JSON.stringify(element))
        }
    });
}

movies([

    'addMovie The Avengers',

    'addMovie Superman',

    'The Avengers directedBy Anthony Russo',

    'The Avengers onDate 30.07.2010',

    'Captain America onDate 30.07.2010',

    'Captain America directedBy Joe Russo'

])