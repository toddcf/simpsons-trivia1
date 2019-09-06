let totalCorrect;
const displayCorrect = document.getElementById('displayCorrect');
const totalQuestions = document.querySelectorAll('.question').length;
const nextOptions = document.getElementById('nextOptions');

function clearBgColors() {
  const labels = document.getElementById('quizForm').querySelectorAll('label');

  labels.forEach( function( label ) {
    label.classList.remove('red');
    label.classList.remove('green');
  });
}

function calculatePercentage() {
  let percentCorrect = (totalCorrect / totalQuestions) * 100;
  document.getElementById('displayPercentCorrect').innerHTML = percentCorrect.toFixed(0);
}

const answersLabels = document.querySelectorAll('.answers__label');

function checkAnswers() {
  totalCorrect = 0;
  
  clearBgColors();

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
  nextOptions.style.display = 'block';
}

function newGame() {
  totalCorrect = 0;
  displayCorrect.innerHTML = totalCorrect;
  clearBgColors();
  document.getElementById('displayTotalQuestions').innerHTML = totalQuestions;
  calculatePercentage();
  nextOptions.style.display = 'none';
  const checked = document.getElementById('quizForm').querySelectorAll('input[type=radio]:checked');
  checked.forEach( function( check ) {
    check.checked = false;
  });
}

newGame();

document.getElementById('submitBtn').onclick = checkAnswers;
resetBtn.onclick = newGame;