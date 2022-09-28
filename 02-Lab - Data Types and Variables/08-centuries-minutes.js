function centuriesToMinutes (number){

    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;

    console.log(`${number} centuries = ${years = number * 100} years = ${days = Math.trunc(years * 365.2422)} days = ${(hours = days * 24).toFixed(0)} hours = ${minutes = hours * 60} minutes`)

}

centuriesToMinutes(1);