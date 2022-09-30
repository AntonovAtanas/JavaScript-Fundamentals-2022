function leapYear (year){

    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                console.log("yes")
                return;
            }
            console.log("no");
            return;
        }
        console.log("yes")
    } else {
        console.log("no")
    }

}
    let isLeapYearr = 100 - 20 == 100 && year - 30 == 100;

    
leapYear(2000)