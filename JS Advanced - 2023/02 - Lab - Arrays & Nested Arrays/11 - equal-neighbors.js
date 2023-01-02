function equalNeighbors(input) {

    let equalCounter = 0;
    let arrLength = input[0].length

    for (let i = 0; i < input.length; i++) {

        for (let k = 0; k < arrLength; k++) {

            let firstHorizontalElement = input[i][k];
            let compareHorizontalElement = input[i][k + 1];

            if (firstHorizontalElement == compareHorizontalElement) {
                equalCounter++;
            };

            if (!input[i + 1]) {
                continue;
            };

            let firstVerticalElement = input[i][k];
            let compareVerticalElement = input[i + 1][k];

            if (firstVerticalElement == compareVerticalElement) {
                equalCounter++;
            }
        }
    }
    return equalCounter;
}

console.log(equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]))