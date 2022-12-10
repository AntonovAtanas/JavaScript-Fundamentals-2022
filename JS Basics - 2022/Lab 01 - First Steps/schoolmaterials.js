function schoolMaterials (input){

    let Pens = Number(input[0])
    let Markers = Number(input[1])
    let Preparat = Number(input[2])
    let discount = Number(input[3])
        
    let totalPens = Pens * 5.80
    let totalMarkers = Markers * 7.20
    let totalPreparat = Preparat * 1.20
    let totalSum = totalPens + totalMarkers + totalPreparat
    let totalDiscount = totalSum * (discount / 100)
    let finalPrice = totalSum - totalDiscount

    console.log(finalPrice)
}   

schoolMaterials (["4 ", "2 ", "5 ", "13 "])