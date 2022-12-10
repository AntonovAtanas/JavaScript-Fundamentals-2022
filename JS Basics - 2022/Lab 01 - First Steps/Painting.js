function painting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2])
    let hoursWork = Number(input[3])

    let totalNylon = (nylon+2) * 1.50
    let extraPaint = paint * (10/100)
    let finalPaint = (paint + extraPaint) * 14.50
    let totalRazreditel = razreditel * 5
    let totalMaterials = totalNylon + finalPaint + totalRazreditel + 0.40

    let workPerHour = totalMaterials * (30/100)
    let finalWork = workPerHour * hoursWork

    let totalExpense = totalMaterials + finalWork

    console.log(totalExpense)

}

painting(["5 ", "10 ", "10 ", "1 "])