function sumOdd (n){

    let counter = 0;
    let odds = 0;

    for (let i = 0; i <= 100; i++){

        if (i % 2 !== 0){
            odds += i;
            counter++
            console.log(i)
        }

        if (counter === n){
            break;
        }

    }   
    console.log(`Sum: ${odds}`)
    // while(counter <= n){
    //     counter++

    // }

}

sumOdd (3);