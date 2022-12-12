function speedInfo (input){

    let currentspeed = Number(input[0])

    if (currentspeed <= 10){
        console.log("slow")
    }

    else if ( currentspeed > 10 && currentspeed <=50){
        console.log("average")
    }

    else if ( currentspeed > 50 && currentspeed <= 150){
        console.log( "fast")
    }

    else if ( currentspeed > 150 && currentspeed <= 1000){
        console.log( "ultra fast")
    }
    
    else if (currentspeed > 1000) {
        console.log( " extremely fast ")
    }
}

speedInfo (["3500"])