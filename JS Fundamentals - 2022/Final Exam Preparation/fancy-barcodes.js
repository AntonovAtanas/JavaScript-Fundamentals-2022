function fancyBarcodes(input) {

    let barcodePattern = /@[\#]+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z]{1})@[\#]+/g;
    let barcodesCount = Number(input.shift());

    for (let i = 0; i < barcodesCount; i++) {
        let currentBarcode = input.shift();
        let result = currentBarcode.match(barcodePattern);

        if (result) {
            let numberPattern = /\d/g;
            let numbersResult = result[0].match(numberPattern);
            if (numbersResult) {
                console.log(`Product group: ${numbersResult.join('')}`)
            } else {
                console.log(`Product group: 00`)
            }
        } else {
            console.log(`Invalid barcode`)
        }
    }
}

fancyBarcodes(
    // ["3",
    //     "@#FreshFisH@#",
    //     "@###Brea0D@###",
    //     "@##Che4s6E@##"]

    ["6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"]

)