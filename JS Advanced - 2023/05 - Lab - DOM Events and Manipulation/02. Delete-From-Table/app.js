function deleteByEmail() {
    let inputField = document.querySelector('input'); // select with name attribute: document.querySelector('input[name="email"]')
    let data = document.querySelectorAll('table tbody tr');
    let resultField = document.getElementById('result');
    let isFound = false;

    for (let i = 0; i < data.length; i++) {
        let personData = data[i]
        let email = personData.children[1].textContent

        if (inputField.value == email) {
            personData.parentElement.removeChild(personData);
            resultField.textContent = 'Deleted.';
            isFound = true;
        }
    }

    if (!isFound) {
        resultField.textContent = 'Not found.'
    }

    inputField.value = ''
}