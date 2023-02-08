function addItem() {
    let dropdownMenu = document.getElementById('menu');
    let inputText = document.getElementById('newItemText')
    let inputValue = document.getElementById('newItemValue')

    let newElement = document.createElement('option');
    newElement.textContent = inputText.value;;
    newElement.value = inputValue.value;;

    dropdownMenu.appendChild(newElement);

    inputText.value = '';
    inputValue.value = '';
}