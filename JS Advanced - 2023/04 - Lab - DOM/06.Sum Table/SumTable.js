function sumTable() {
    let allRows = document.getElementsByTagName('tr');
    let result = 0;

    for (let i = 1; i < allRows.length-1; i++){
        let currentRow = allRows[i].getElementsByTagName('td');
        let numberCell = Number(currentRow[1].textContent);
        result += numberCell
    }
    document.getElementById('sum').textContent = result;
}