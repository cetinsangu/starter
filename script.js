'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const finalNumber = document.querySelector('.number');
const guessField = document.querySelector('.guess');
const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
againButton.classList.add('display');

const reset = function () {
  randomNumber = Math.trunc(Math.random() * 30) + 1;
  score = 30;
  scoreField.textContent = score;
  document.querySelector('body').style.backgroundColor =
    'rgba(1, 225, 255, 0.432)';
  finalNumber.style.width = '15rem';
  finalNumber.textContent = '?';
  guessField.value = '';
  displayMessage('Start guessing...');
  playing = true;
  againButton.classList.add('display');
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let playing = true;
let score = 30;
let highscore = 0;
let randomNumber = Math.trunc(Math.random() * 30) + 1;

checkButton.addEventListener('click', function () {
  if (playing) {
    const guessFieldValue = Number(guessField.value);
    if (!guessFieldValue || guessFieldValue > 30) {
      displayMessage('Please enter a value between 1 and 30.');
    } else if (guessFieldValue === randomNumber) {
      displayMessage('YOU GUESSED!');
      againButton.classList.remove('display');
      document.querySelector('body').style.backgroundColor = 'rgb(31 255 0)';
      finalNumber.style.width = '30rem';
      finalNumber.textContent = randomNumber;
      playing = false;
      if (score > highscore) {
        console.log(highscore);
        highscore = score;
        highScoreField.textContent = highscore;
      }
    } else if (guessFieldValue !== randomNumber) {
      if (score > 1) {
        displayMessage(
          guessFieldValue > randomNumber ? 'Too high!' : 'Too low!'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('YOU LOST 😥');
        playing = false;
        scoreField.textContent = 0;
        againButton.classList.remove('display');
      }
    }
  }
});

againButton.addEventListener('click', reset);
