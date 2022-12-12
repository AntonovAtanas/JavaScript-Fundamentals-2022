function area (input){

    let type = (input[0]);
    let a = Number(input[1])
    let lice = 0;

    if (type === "square"){
         lice = a * a
    }

    else if (type === "rectangle"){
        let b = Number(input[2]);
        lice = a * b ;
        
    }

    else if ( type === "circle"){
        lice = Math.PI * (a * a)
    }

    else if ( type === "triangle"){
        let h = Number(input[2])
        lice = a * h / 2
        
        
    }
    console.log(lice.toFixed(3))
}

area (["square", "5"])