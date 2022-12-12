function numbersEnding7() {

    let start = 1;
    let end = 1000;

    for (let i = start; i <= end; i++){
        if (i % 10 === 7){
            console.log(i)
        }
    }
}

numbersEnding7 ()