function triangle (num){

    
    for(let i = 1 ; i <= num ; i++){

        let buff = "";

        for (let k = 1; k <= i ; k++){
            buff += `${i} `
        }
        console.log(buff)
    }
    

}

triangle (6)