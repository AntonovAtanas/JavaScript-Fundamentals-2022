function solve() {
  let textFieldArr = document.getElementById('input').value.split('.').filter(x => x.length > 0);

  for (let i = 0; i < textFieldArr.length; i += 3) {
    let result = [];
    for (let k = 0; k < 3; k++) {
      if (textFieldArr[i + k]) {
        result.push(textFieldArr[i + k])
      }
    }
    let resText = result.join('. ') + '.';
    document.getElementById('output').innerHTML += `<p>${resText}</p>`
  }
}