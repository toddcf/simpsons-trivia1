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

const answersLabels = document.querySelectorAll('.answers__label');

function checkAnswers() {
  totalCorrect = 0;
  const labels = document.getElementById('quizForm').querySelectorAll('label');

  labels.forEach( function( label ) {
    label.classList.remove('red');
    label.classList.remove('green');
  });

  const answers = document.getElementById('quizForm').querySelectorAll('input[type=radio]:checked');

  answers.forEach( function( answer ) {
    let parentElement = answer.parentElement;
    let dataCorrectAttribute = answer.getAttribute('data-correct');
    if ( dataCorrectAttribute === 'true' ) {
      totalCorrect++;
      parentElement.classList.add('green');
    }
    else {
      parentElement.classList.add('red');
    }
  });
  
  displayCorrect.innerHTML = totalCorrect;
  calculatePercentage();
}

document.getElementById('submitBtn').onclick = checkAnswers;