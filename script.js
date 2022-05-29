'use strict';
//generate a random secretNumber between 1 and 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;}

//selecting the check button and listening to an event
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // check for button pressed without a value input;
  if (!guess) {
    displayMessage('😰 No Number!');
  }
  //if there is a guess and guess equal, higher or equal secretnumber
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct guess!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    // If score is greater than highScore.
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // if guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //condition for when guess is too high or too low
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Onclick of the again button;
const again = document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.reset').addEventListener('click', () => {
  highscore = 0;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;
});
