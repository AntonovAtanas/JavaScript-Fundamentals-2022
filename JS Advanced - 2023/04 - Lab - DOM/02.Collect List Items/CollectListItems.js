function extractText() {
    let ulList = document.getElementById('items');
    let content = ulList.getElementsByTagName('li');

    let res = '';

    for (const iterator of content) {
        res += `${iterator.textContent}\n`;
    }

    document.getElementById('result').textContent = res;
}