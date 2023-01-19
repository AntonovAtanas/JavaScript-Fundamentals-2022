function colorize() {
    let tr = document.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i+=2) {
        let currentRow = tr[i];
        currentRow.style.backgroundColor = 'Teal';
    }
}