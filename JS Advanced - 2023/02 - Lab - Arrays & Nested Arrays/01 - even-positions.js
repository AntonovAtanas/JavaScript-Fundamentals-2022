function evenPositions (input){

    let arr = [];

    input.forEach((element, i) => {
        if (i % 2 == 0){
            arr.push(element);
        }
    });
    console.log(arr.join(' '));
}

evenPositions (['20', '30', '40', '50', '60'])