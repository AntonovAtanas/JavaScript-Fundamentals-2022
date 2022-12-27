function cookingNumbers(number, ...params) {

    let num = Number(number);
    
    for (const command of params) {
        switch (command) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num *= 3; break;
            case 'fillet': num -= (num * 0.2); break;
        }
        console.log(num);
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')