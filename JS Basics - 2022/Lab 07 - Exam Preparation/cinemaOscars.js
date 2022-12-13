function oscars (input){


    let movieName = input[0];
    let ticketType = input[1];
    let visitors = Number(input[2]);

    let sum = 0;

    if (movieName === "A Star Is Born"){

        switch(ticketType){

            case "normal" : sum = visitors * 7.50 ; break;
            case "luxury" : sum = visitors * 10.50 ; break;
            case "ultra luxury" : sum = visitors * 13.50 ; break;

        }
    } else if (movieName === "Bohemian Rhapsody"){

        switch(ticketType){

            case "normal" : sum = visitors * 7.35 ; break;
            case "luxury" : sum = visitors * 9.45 ; break;
            case "ultra luxury" : sum = visitors * 12.75 ; break;

        }


    } else if (movieName === "Green Book"){

        switch(ticketType){

            case "normal" : sum = visitors * 8.15 ; break;
            case "luxury" : sum = visitors * 10.25 ; break;
            case "ultra luxury" : sum = visitors * 13.25 ; break;

        }
    } else {

        switch(ticketType){

            case "normal" : sum = visitors * 8.75 ; break;
            case "luxury" : sum = visitors * 11.55 ; break;
            case "ultra luxury" : sum = visitors * 13.95 ; break;

        }


    }

    console.log(`${movieName} -> ${sum.toFixed(2)} lv.`)

}

oscars (["Green Book",
"normal",
"63"])

