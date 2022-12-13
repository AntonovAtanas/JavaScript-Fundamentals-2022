function library(input) {


    let index = 0;
    let searchedBook = input[index];
    index++;

    let command = input[index];
    index++

    let counter = 0;

    while (command !== "No More Books") {


        if (command === searchedBook) {
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
        counter++
        command = input[index];
        index++
    }
    
    if (command === "No More Books") {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${counter} books.`)
        
    }

}

library(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])