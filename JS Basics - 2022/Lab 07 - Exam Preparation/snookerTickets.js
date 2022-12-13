function snookerTickets(input) {

    let matchStage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let picture = input[3];

    let sum = 0;
    let discount = 0;
    let pictureSum = 0;
    let finalSum = 0;

    if (matchStage === "Quarter final") {

        switch (ticketType) {
            case "Standard": sum = ticketCount * 55.50; break;
            case "Premium": sum = ticketCount * 105.20; break;
            case "VIP": sum = ticketCount * 118.90; break;
        }

    } else if (matchStage === "Semi final") {

        switch (ticketType) {
            case "Standard": sum = ticketCount * 75.88; break;
            case "Premium": sum = ticketCount * 125.22; break;
            case "VIP": sum = ticketCount * 300.40; break;
        }

    } else if (matchStage === "Final") {

        switch (ticketType) {
            case "Standard": sum = ticketCount * 110.10; break;
            case "Premium": sum = ticketCount * 160.66; break;
            case "VIP": sum = ticketCount * 400; break;
        }

    }


    if (picture === "Y"){
        pictureSum = ticketCount * 40
    } 

    if (sum > 4000) {
        discount = sum * 0.25;
        pictureSum = 0;
    }  else if (sum > 2500){
        discount = sum * 0.10
    }


    finalSum = sum - discount + pictureSum

    console.log(finalSum.toFixed(2))


}

snookerTickets(["Semi final", "VIP", "9", "Y"])