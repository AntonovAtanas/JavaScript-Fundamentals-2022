function arrayRotation (input, rotations){

    for (let i = 1; i <= rotations; i++){
        let index = input[0];
        input.push(index);
        input.shift();
    }
    console.log(input.join(' '))
}

arrayRotation ([51, 47, 32, 61, 21], 2)