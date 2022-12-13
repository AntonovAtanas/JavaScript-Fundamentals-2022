function building(input) {

    let floors = Number(input[0]);
    let room = Number(input[1])

    for (let i = floors; i > 0; i--) {

        

        let buff = "";

        for (let r = 0; r < room; r++) {
            if (i === floors) {
                buff += `L${i}${r} `
            }  else if (i % 2 === 1) {
                buff += `A${i}${r} `
            }  else if (i % 2 === 0 && i < floors) {
                buff += `O${i}${r} `
            }
            
            
        }
        
        console.log(buff)    
    }
    
}

building(["6",

    "4"])