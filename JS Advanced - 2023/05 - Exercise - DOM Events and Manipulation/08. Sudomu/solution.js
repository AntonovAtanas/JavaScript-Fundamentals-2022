function solve() {

    let table = document.getElementsByTagName('table')[0];
    let tableInfo = Array.from(document.getElementsByTagName('tbody')[0].children);
    let allCells = document.querySelectorAll('td input'); // get all cells
    let [checkButton, clearButton] = document.querySelectorAll('td button');
    let divResult = document.querySelector('#check p');

    checkButton.addEventListener('click', check);
    clearButton.addEventListener('click', clear);

    function clear() {
        allCells.forEach(element => element.value = '');
        divResult.textContent = '';
        table.style.border = '';
    }

    function check() {
        let isSolved = true;
        let targetSum = 6;

        for (let i = 0; i < 3; i++) {
            let currentRow = Array.from(tableInfo[i].children)
            let rowSum = 0;
            let arr1 = [];
            let arr2 = [];
            for (let m = 0; m < 3; m++) {
                
                let num = Number(currentRow[m].children[0].value);

                if (num == 1 || num == 2 || num == 3) { // each row cell
                    rowSum += num
                } else {
                    isSolved = false;
                    break;
                }

                if (arr1.includes(num)){
                    isSolved = false;
                    break;
                }
                arr1.push(num)
            }

            let colSum = 0;
            for (let l = 0; l < 3; l++) {
                
                let currentCell = Number(tableInfo[l].children[i].children[0].value); // each column cell
                
                if (currentCell == 1 || currentCell == 2 || currentCell == 3) {
                    colSum += currentCell;
                } else {
                    isSolved = false;
                    break;
                }

                if (arr2.includes(currentCell)){
                    isSolved = false;
                    break;
                }
                arr2.push(currentCell)
            }

            if (rowSum !== targetSum || colSum !== targetSum) {
                isSolved = false;
                divResult.textContent = 'NOP! You are not done yet...'
                divResult.style.color = 'red';
                table.style.border = '2px solid red';
                break;
            }
        }

        if (isSolved) {
            divResult.textContent = 'You solve it! Congratulations!'
            divResult.style.color = 'green';
            table.style.border = '2px solid green';
        }
    }
}