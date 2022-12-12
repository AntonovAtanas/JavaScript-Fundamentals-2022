function commissions (input){

    let city = input[0];
    let sales = Number(input[1]);

    if (sales >= 0 && sales <= 500){
        switch (city){
            case "Sofia" : console.log((sales * (5/100)).toFixed(2)); break;
            case "Varna" : console.log((sales * (4.5/100)).toFixed(2)); break;
            case "Plovdiv" : console.log((sales * (5.5/100)).toFixed(2)); break; 
            default : console.log ("error"); break;
        }
    } else if (sales > 500 && sales <= 1000){
        switch (city){
            case "Sofia" : console.log((sales * (7/100)).toFixed(2)); break;
            case "Varna" : console.log((sales * (7.5/100)).toFixed(2)); break;
            case "Plovdiv" : console.log((sales * (8/100)).toFixed(2)); break;
            default : console.log ("error"); break;
        }
    }   else if (sales > 1000 && sales <= 10000){
        switch (city){
            case "Sofia" : console.log((sales * (8/100)).toFixed(2)); break;
            case "Varna" : console.log((sales * (10/100)).toFixed(2)); break;
            case "Plovdiv" : console.log((sales * (12/100)).toFixed(2)); break;
            default : console.log ("error"); break;
        }
    } else if (sales >10000){
        switch (city){
            case "Sofia" : console.log((sales * (12/100)).toFixed(2)); break;
            case "Varna" : console.log((sales * (13/100)).toFixed(2)); break;
            case "Plovdiv" : console.log((sales * (14.5/100)).toFixed(2)); break;
            default : console.log ("error"); break;
        }
    } else {
        console.log("error")
    }


}

commissions (["Bourgas", "1500"])