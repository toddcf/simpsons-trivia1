let totalCorrect = 0;
const displayCorrect = document.getElementById('displayCorrect');
displayCorrect.innerHTML = totalCorrect;

// Count and display total number of questions:
const totalQuestions = document.querySelectorAll('.question').length;
document.getElementById('displayTotalQuestions').innerHTML = totalQuestions;

// Calculate and display percent correct:
function calculatePercentage() {
  let percentCorrect = (totalCorrect / totalQuestions) * 100;
  document.getElementById('displayPercentCorrect').innerHTML = percentCorrect.toFixed(0);
}
calculatePercentage();

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
  calculatePercentage();
}

document.getElementById('submitBtn').onclick = checkAnswers;