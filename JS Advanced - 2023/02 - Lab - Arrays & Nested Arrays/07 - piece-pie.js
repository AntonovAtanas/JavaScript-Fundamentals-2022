function piecePie (arr, startPie, endPie){

    let startIndex = arr.indexOf(startPie);
    let endIndex = arr.indexOf(endPie);

    let result = [];

    result = arr.slice(startIndex, endIndex+1);

    return result;
}

console.log(piecePie (['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'))