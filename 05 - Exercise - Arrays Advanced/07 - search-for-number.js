function searchNumber (numbers, input){

    let elementsToTake = input[0];
    let elementsToDelete = input[1];
    let searchedNumber = input[2];
    let array = numbers.slice(0);
    let slicedArray = array.slice(0, elementsToTake);

    for (let i = 0; i < elementsToDelete; i++){
        slicedArray.shift()
    }
    let counter = 0;

    for (let i = 0; i < slicedArray.length; i++){
        let currentNumber = slicedArray[i];
        if (currentNumber === searchedNumber){
            counter++
        }
    }

    console.log(`Number ${searchedNumber} occurs ${counter} times.`)
}

searchNumber ([7, 1, 5, 8, 2, 7], [3, 1, 5])