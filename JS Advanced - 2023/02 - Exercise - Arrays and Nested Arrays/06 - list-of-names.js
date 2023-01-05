function listNames (input){

    input.sort((a, b) => a.localeCompare(b));

    input.forEach((element, index) => {
        console.log(`${index+1}.${element}`)
    });
}

listNames (["John",

"Bob",

"Christina",

"Ema"])