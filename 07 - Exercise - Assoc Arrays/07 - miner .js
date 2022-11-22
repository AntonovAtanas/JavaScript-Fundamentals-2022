function miner (input){

    let resources = {};
    let inputLength = input.length

    for (let i = 0; i < inputLength; i+=2){
        let resource = input[i];
        let count = Number(input[i+1]);

        if (!resources.hasOwnProperty(resource)){
            resources[resource] = 0;
        }
        resources[resource] += count
    }

    for (const currentResource in resources) {
        console.log(`${currentResource} -> ${resources[currentResource]}`)
    }
}

miner ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])