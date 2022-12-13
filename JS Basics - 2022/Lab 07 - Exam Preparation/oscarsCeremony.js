function oscars (input){

    let rent = Number(input[0]);


    let statueCost = rent - (rent * 0.30)
    
    let catering = statueCost - statueCost * 0.15

    let sound = catering / 2

    let totalCost = rent + statueCost + catering + sound

    console.log(totalCost.toFixed(2))

}

oscars (["3500"])