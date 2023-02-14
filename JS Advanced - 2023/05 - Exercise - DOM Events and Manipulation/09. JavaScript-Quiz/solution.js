function solve() {
  let questions = document.getElementsByTagName('section');
  Array.from(document.querySelectorAll('.quiz-answer')).forEach(element => element.addEventListener('click', onClick));
  let resultSection = document.querySelector('#results');
  let resultText = document.querySelector('#results h1');

  let totalQuestions = 0;
  let correctAnswers = 0;

  function onClick(event) {
    
    let answer = event.target.textContent;
    questions[totalQuestions].style.display = 'none'; // hide the answered question - judge?
    totalQuestions++
    if (answer == 'onclick' || answer == 'JSON.stringify()' || answer == 'A programming API for HTML and XML documents') {
      correctAnswers++
    }
    if (totalQuestions < 3) {
      questions[totalQuestions].style.display = 'block'; // show the next question
    } else {
      resultSection.style.display = 'block';
      if (correctAnswers == 3) {
        resultText.textContent = `You are recognized as top JavaScript fan!`
      } else {
        resultText.textContent = `You have ${correctAnswers} right answers`
      }
    }
  }
}