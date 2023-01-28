function generateReport() {
    let columnCheckboxes = document.querySelectorAll('thead tr th');
    let allDataRows = document.querySelectorAll('tbody tr');
    let textResult = document.getElementById('output');
    let checkedBoxesIndexes = [];

    for (let i = 0; i < columnCheckboxes.length; i++){
        let currentColumn = columnCheckboxes[i];

        if(currentColumn.querySelector('input').checked){
            checkedBoxesIndexes.push(i);
        }
    }

    let peopleDataArr = [];

    for (let person of allDataRows){
        let personArr = person.querySelectorAll('td');
        let currentPersonObj = {};

        for (let k = 0; k < checkedBoxesIndexes.length; k++){
            let columnNumber = checkedBoxesIndexes[k]
            let personData = personArr[columnNumber].innerText;
            let personColumn = document.getElementsByTagName('input')[columnNumber].name;
            currentPersonObj[personColumn] = personData;
        }
        peopleDataArr.push(currentPersonObj);
    }
    textResult.textContent = JSON.stringify(peopleDataArr);
}
