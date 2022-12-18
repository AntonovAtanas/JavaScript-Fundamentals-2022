function stringArguments (firstWord, secondWord, thirdWord) {

    let totalLength = firstWord.length + secondWord.length + thirdWord.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

stringArguments ('chocolate', 'ice cream', 'cake')