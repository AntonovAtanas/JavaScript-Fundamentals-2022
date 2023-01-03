function rotateArr (input, num) {

    for (let i = 1; i <= num; i++){
        let currentElement = input.pop();
        input.unshift(currentElement);
    }

    console.log(input.join(' '));
}

rotateArr (['Banana', 'Orange', 'Coconut', 'Apple'], 15);
rotateArr (['1', '2', '3', '4'], 2);