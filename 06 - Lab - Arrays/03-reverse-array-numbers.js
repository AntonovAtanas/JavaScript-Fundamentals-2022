function reverseArray(number, array) {


    let newArray = [];

    // for (let i = number-1; i >= 0; i--){
    //     let newNumber = Number(array[i]);
    //     newArray += newNumber + ' ';
    // }
    // console.log(newArray)

    for (let i = 0; i < number; i++) {
        newArray.push(array[i])
    }
    console.log(newArray)
}

reverseArray(4, [-1, 20, 99, 5])