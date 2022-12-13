function cinemaTickets(input) {

    let index = 0;
    let movieName = input[index]
    index++

    let sumOfTickets = 0;
    let sumStudentTickets = 0;
    let sumStandardTickets = 0;
    let sumKidsTickets = 0;


    while (movieName !== "Finish") {
        let freeSpace = Number(input[index])
        index++

        let ticketType = input[index]
        index++

        let spacesTaken = 0;


        let studentTickets = 0;
        let standardTickets = 0;
        let kidTickets = 0;

        while (ticketType !== "End") {

            spacesTaken++;
            sumOfTickets += 1

            if (ticketType === "student") {
                studentTickets++
                sumStudentTickets += 1
            } else if (ticketType === "standard") {
                standardTickets++
                sumStandardTickets += 1
            } else {
                kidTickets++
                sumKidsTickets += 1
            }

            if (spacesTaken === freeSpace) {
                break;
            }
            
            ticketType = input[index]
            index++

        }
        console.log(`${movieName} - ${((spacesTaken / freeSpace) * 100).toFixed(2)}% full.`)

        movieName = input[index]
        index++

    }
    console.log(`Total tickets: ${sumOfTickets}`)
    console.log(`${(sumStudentTickets / sumOfTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(sumStandardTickets / sumOfTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(sumKidsTickets / sumOfTickets * 100).toFixed(2)}% kids tickets.`)




}

cinemaTickets

    (["The Matrix",

        "20",

        "student",

        "standard",

        "kid",

        "kid",

        "student",

        "student",

        "standard",

        "student",

        "End",

        "The Green Mile",

        "17",

        "student",

        "standard",

        "standard",

        "student",

        "standard",

        "student",

        "End",

        "Amadeus",

        "3",

        "standard",

        "standard",

        "standard",

        "Finish"])