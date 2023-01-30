function addItem() {
    
    let inputField = document.getElementById('newItemText')
    let newField = document.createElement('li')
    newField.textContent = inputField.value;
    document.getElementById('items').appendChild(newField);
    
    inputField.value = '';
}