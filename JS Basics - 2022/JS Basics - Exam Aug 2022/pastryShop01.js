function pastryShop (input){

    let type = input[0];
    let sweetsCount = Number(input[1]);
    let day = Number(input[2]);

    let sum = 0;
    let discount = 0;
    let earlyDiscount = 0;
    let sum1 = 0;
    
    if (day <= 15){

        if (type === "Cake"){
            sum = sweetsCount * 24;
        }   else if (type === "Souffle"){
            sum = sweetsCount * 6.66;
        } else if (type === "Baklava"){
            sum = sweetsCount * 12.60;
        }

    } else if (day > 15) {

        if (type === "Cake"){
            sum = sweetsCount * 28.70 ;
        } else if (type === "Souffle"){
            sum = sweetsCount * 9.80 ; 
        } else if (type === "Baklava"){
            sum = sweetsCount * 16.98;
        }

    }

    if (day <= 22){
        
        if (sum >= 100 && sum <= 200){
            discount = sum * 0.15;
        } else if (sum > 200) {
            discount = sum * 0.25;
        }


        if (day <= 15) {
            earlyDiscount = (sum - discount) * 0.10;
        }
    
    }
    
    console.log((sum - discount - earlyDiscount).toFixed(2))

}

pastryShop (["Souffle",
"20",
"24"])