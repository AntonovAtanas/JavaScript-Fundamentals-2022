function legendaryFarming(input) {

    input = input.split(' ')

    let keyMaterials = {
        "motes": 0,
        "shards": 0,
        "fragments": 0,
    };
    let isWinner = false;
    let junkMaterials = {};

    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1].toLowerCase();

        if (material == "motes" || material == "shards" || material == "fragments") {
           
            keyMaterials[material] += quantity;
            if (keyMaterials[material] >= 250) {
                    if (material == "motes") {
                        console.log(`Dragonwrath obtained!`);
                        keyMaterials["motes"] -= 250
                        isWinner = true;
                        break;
                    } else if (material == "shards") {
                        console.log(`Shadowmourne obtained!`);
                        keyMaterials["shards"] -= 250
                        isWinner = true;
                        break;
                    } else if (material == "fragments") {
                        console.log(`Valanyr obtained!`);
                        keyMaterials["fragments"] -= 250
                        isWinner = true;
                        break;
                    }
            }
        } else {
            if (!junkMaterials[material]) {
                junkMaterials[material] = 0
            }
            junkMaterials[material] += quantity
        }
        if (isWinner) {
            break;
        }
    }

    let keyMaterialsArr = Object.entries(keyMaterials).sort((materialA, materialB) => materialB[1]-materialA[1] || materialA[0].localeCompare(materialB[0]))
    let junkMaterialsArr = Object.entries(junkMaterials).sort((materialA, materialB) => materialA[0].localeCompare(materialB[0]))

    keyMaterialsArr.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
    });

    junkMaterialsArr.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
    });
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')