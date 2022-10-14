function passwordValidator(password) {

    let isValidLength = false;
    let doesConsistLettersOrDigits = true;
    let digitCounter = 0;
    let isDigitValid = false;

    let passwordLength = password.length;

    if (passwordLength >= 6 && passwordLength <= 10) {
        isValidLength = true;
    }

    for (let i = 0; i < passwordLength; i++) {
        let currentChar = password[i];
        let currentCharAsCode = currentChar.charCodeAt();

        if (currentCharAsCode >= 48 && currentCharAsCode <= 57 || currentCharAsCode >= 65 && currentCharAsCode <= 90 || currentCharAsCode >= 97 && currentCharAsCode <= 122) {
            doesConsistLettersOrDigits = true;
        } else {
            doesConsistLettersOrDigits = false;
            break;
        }
    }

    for (let i = 0; i < passwordLength; i++) {
        let currentChar = password[i];
        let currentCharAsCode = currentChar.charCodeAt();

        if (currentCharAsCode >= 48 && currentCharAsCode <= 57) {
            digitCounter++
            if (digitCounter >= 2) {
                isDigitValid = true;
            }
        }
    }

    if (isDigitValid && doesConsistLettersOrDigits && isValidLength) {
        console.log('Password is valid')
    }

    if (!isValidLength) {
        console.log('Password must be between 6 and 10 characters')
    }

    if (!doesConsistLettersOrDigits) {
        console.log('Password must consist only of letters and digits')
    }

    if (!isDigitValid) {
        console.log('Password must have at least 2 digits')
    }
}
passwordValidator('Pa$s$s')