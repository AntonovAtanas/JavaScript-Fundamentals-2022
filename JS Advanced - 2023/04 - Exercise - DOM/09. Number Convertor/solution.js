function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', onClick);
    let inputField = document.getElementsByTagName('input')[0];
    let resultField = document.getElementById('result');
    let dropMenuHTML = document.getElementById('selectMenuTo');

    let optionBinary = dropMenuHTML.children[0];
    optionBinary.textContent = 'Binary';
    optionBinary.value = 'binary';

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';
    dropMenuHTML.appendChild(optionHexadecimal);

    function onClick() {
        let inputNumber = Number(inputField.value);

        if (dropMenuHTML.value === 'binary') {
            resultField.value = inputNumber.toString(2);
        } else if (dropMenuHTML.value === 'hexadecimal') {
            resultField.value = inputNumber.toString(16).toUpperCase();
        }
    }
} 