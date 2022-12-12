function histogram(input) {

    let n = Number(input[0]);

    let group1 = 0 ;
    let group2 = 0 ;
    let group3 = 0 ;
    let group4 = 0 ;
    let group5 = 0 ;


    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i])

        if (currentNum < 200) {
            group1 += 1
        } else if (currentNum >= 200 && currentNum <= 399) {
            group2 += 1
        } else if (currentNum >= 400 && currentNum <= 599) {
            group3 += 1
        } else if (currentNum >= 600 && currentNum <= 799) {
            group4 += 1
        } else if (currentNum >= 800) {
            group5 += 1
        }
        
    }

    let percentGroup1 = (group1 / n)*100
    let percentGroup2 = (group2 / n)*100
    let percentGroup3 = (group3 / n)*100
    let percentGroup4 = (group4 / n)*100
    let percentGroup5 = (group5 / n)*100


    console.log(`${(percentGroup1).toFixed(2)}%`)
    console.log(`${(percentGroup2).toFixed(2)}%`)
    console.log(`${(percentGroup3).toFixed(2)}%`)
    console.log(`${(percentGroup4).toFixed(2)}%`)
    console.log(`${(percentGroup5).toFixed(2)}%`)




}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"])