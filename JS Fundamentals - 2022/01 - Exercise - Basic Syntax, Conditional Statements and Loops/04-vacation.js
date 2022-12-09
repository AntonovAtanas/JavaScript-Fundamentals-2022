function vacation (studentCount, typeOfGroup, weekDay){

    let sum = 0;
    let price = 0;

    if (typeOfGroup === "Students"){
        if (weekDay === "Friday"){
            sum = studentCount * 8.45 ;
        } else if (weekDay === "Saturday"){
            sum = studentCount * 9.80 ;
        } else if (weekDay === "Sunday"){
            sum = studentCount * 10.46 ;
        }

        if (studentCount >= 30){
            sum = sum - (sum*0.15)
        }
    }

    if (typeOfGroup === "Business"){
        if (weekDay === "Friday"){
            price = 10.90;
            sum = studentCount * 10.90 ;
        } else if (weekDay === "Saturday"){
            price = 15.60 ;
            sum = studentCount * 15.60 ;
        } else if (weekDay === "Sunday"){
            price = 16 ;
            sum = studentCount * 16 ;
        }

        if (studentCount >= 100){
            sum = sum - (10 * price)
        }
    }

    if (typeOfGroup === "Regular"){
        if (weekDay === "Friday"){
            sum = studentCount * 15 ;
        } else if (weekDay === "Saturday"){
            sum = studentCount * 20 ;
        } else if (weekDay === "Sunday"){
            sum = studentCount * 22.50 ;
        }

        if (studentCount >= 10 && studentCount <= 20){
            sum = sum - (sum*0.05)
        }
    }
    
    console.log(`Total price: ${sum.toFixed(2)}`)

}

vacation(40,

    "Regular",
    
    "Saturday")