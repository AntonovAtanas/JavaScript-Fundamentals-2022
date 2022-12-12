function workingHours (input){

    let hour = Number(input[0]) ;
    let day = input[1] ;
    

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday"){
        if (hour >= 10 && hour <= 18){
            console.log ("open") ;
        } else {
            console.log ("closed");
        }
        
    } else {
        console.log("closed")
    }
}

workingHours (["11", "Sunday"])



    // if (day === "Monday"){
    //     if (hour >= 10 && hour <=18){
    //         console.log ("open") ;
    //     } else {
    //         console.log ("closed") ;
    //     }
    // } 
    
    // if (day === "Tuesday"){
    //     if (hour >= 10 && hour <=18){
    //         console.log ("open") ;
    //     } else {
    //         console.log ("closed") ;
    //     }
    // }

    // if (day === "Wednesday"){
    //     if (hour >= 10 && hour <=18){
    //         console.log ("open") ;
    //     } else {
    //         console.log ("closed") ;
    //     }
    // }

    // if (day === "Thursday"){
    //     if (hour >= 10 && hour <=18){
    //         console.log ("open") ;
    //     } else {
    //         console.log ("closed") ;
    //     }
    // }

    // if (day === "Friday"){
    //     if (hour >= 10 && hour <=18){
    //         console.log ("open") ;
    //     } else {
    //         console.log ("closed") ;
    //     }
    // }

    // if (day === "Saturday"){
    //     if (hour >= 10 && hour <=18){
    //         console.log ("open") ;
    //     } else {
    //         console.log ("closed") ;
    //     }
    // }

    // if (day === "Sunday"){
    //     console.log("closed")
    //     }

    


