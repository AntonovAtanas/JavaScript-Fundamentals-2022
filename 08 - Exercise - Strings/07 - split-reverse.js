function splitReverse (input){

    let middleIndex = Math.floor(input.length / 2);

    let firstPart = input.substring(0, middleIndex).split('').reverse();
    let secondPart = input.substring(middleIndex).split('').reverse();

    console.log(firstPart.join(''));
    console.log(secondPart.join(''));
}

splitReverse ('dtluciffiDsIsihTgnizamAoSsIsihT')