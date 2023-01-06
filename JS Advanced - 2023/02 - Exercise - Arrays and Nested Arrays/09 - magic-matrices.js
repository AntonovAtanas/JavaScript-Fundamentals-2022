function magicMatrices(input) {

    let isMagic = true;
    let columnLength = input.length;
    let targetSum = input[0].reduce((acc, x) => acc + x);

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i];
        let rowSum = currentRow.reduce((acc, x) => acc + x);

        let colSum = 0;
        for (let l = 0; l < columnLength; l++) {
            let currentCell = input[l][i];
            colSum += currentCell;
        }

        if (rowSum !== targetSum || colSum !== targetSum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])