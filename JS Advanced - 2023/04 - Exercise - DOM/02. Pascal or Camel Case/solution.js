function solve() {
  let inputText = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let regex = /[\w]+/g;
  let res = inputText.matchAll(regex);
  let editedText = '';

  if (namingConvention == 'Pascal Case') {
    for (const iterator of res) {
      let word = iterator[0];
      let restWord = word.slice(1)
      editedText += word[0].toUpperCase() + restWord.toLowerCase();
    }
  } else if (namingConvention == 'Camel Case') {
    for (const iterator of res) {
      let word = iterator[0];
      let restWord = word.slice(1)
      editedText += word[0].toUpperCase() + restWord.toLowerCase();
    }
    let firstChar = editedText[0];
    editedText = editedText.replace(firstChar, firstChar.toLowerCase())
  } else {
    editedText = 'Error!'
  }

  document.getElementById('result').textContent = editedText;
}