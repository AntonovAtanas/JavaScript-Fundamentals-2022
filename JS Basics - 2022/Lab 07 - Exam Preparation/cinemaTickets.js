function cinemaTickets(input) {


    let index = 0;
    let movieName = input[index];
    index++


    let totalTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let studentTickets = 0;




    while (movieName !== "Finish") {

        let freeSpace = Number(input[index])
        index++

        let ticketType = input[index];
        index++

        let capacity = 0;
        

        while (ticketType !== "End") {


            capacity++
            totalTickets++

            switch (ticketType) {

                case "standard": standardTickets += 1; break;
                case "kid": kidsTickets += 1; break;
                case "student": studentTickets += 1; break;

            }

            if (capacity === freeSpace) {
                break;
            }

            ticketType = input[index];
            index++

        }

        console.log(`${movieName} - ${((capacity/freeSpace)*100).toFixed(2)}% full.`)
        movieName = input[index];
        index++


    }

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`)
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
