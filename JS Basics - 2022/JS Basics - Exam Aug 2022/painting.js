function painting (input){

let paint = Number(input[0]);
let rolls = Number(input[1]);
let glovesPrice = Number(input[2]);
let brushesPrice = Number(input[3]);


    let paintCost = paint * 21.50 ;
    let rollsCost = rolls * 5.20 ;

    let glovesCount = Math.ceil(rolls * 0.35) ;
    let brushesCount = Math.floor(paint * 0.48) ;

    
    let totalSum = paintCost + rollsCost + (glovesPrice * glovesCount) + (brushesPrice * brushesCount)

    let deliveryCost = (totalSum / 15).toFixed(2)

    console.log(`This delivery will cost ${deliveryCost} lv. `)

}

painting (["10", 
    "8", 
    "2.2", 
   "5"
    ])