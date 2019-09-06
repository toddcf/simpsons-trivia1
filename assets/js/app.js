let totalCorrect = 0;
const displayCorrect = document.getElementById('displayCorrect');
displayCorrect.innerHTML = totalCorrect;

// Count and display total number of questions:
document.getElementById('totalQuestionsDisplay').innerHTML = document.querySelectorAll('.question').length;


function checkAnswers() {
  totalCorrect = 0;
  const answers = document.getElementById('quizForm').querySelectorAll('input[type=radio]:checked');
  for ( let i = 0; i < answers.length; i++ ) {
    let dataCorrectAttribute = answers[i].getAttribute('data-correct');
    if ( dataCorrectAttribute === "true" ) {
      totalCorrect++;
    }
  }
  displayCorrect.innerHTML = totalCorrect;
}

document.getElementById('submitBtn').onclick = checkAnswers;