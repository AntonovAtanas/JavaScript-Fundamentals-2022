function modernTimes(input) {

    let sentenceArr = input.split(' ');

    sentenceArr.forEach(element => {
        if (element.includes('#') && element.length > 1) {
            let tempWord = '';
            for (let i = 1; i < element.length; i++) {
                let char = element[i];
                if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90 || char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                    tempWord += char
                } else {
                    break;
                }

                if (i + 1 == element.length) {
                    console.log(tempWord)
                }
            }
        }
    });
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')