'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let bets = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!!';
    highScore += 10;
    document.querySelector('.number').style.width = '22rem';
    document.querySelector('.bets').textContent = bets;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.check').disabled = true;
  } else if (guess > secretNumber) {
    if (bets > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      bets--;
      document.querySelector('.bets').textContent = bets;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game..';
      document.querySelector('.bets').textContent = 0;
      document.querySelector('.retry').textContent = 'Retry!';
    }
  } else if (guess < secretNumber) {
    if (bets > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      bets--;
      document.querySelector('.bets').textContent = bets;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game..';
      document.querySelector('.bets').textContent = 0;
      document.querySelector('.retry').textContent = 'Retry!';
    }
  }
});

document.querySelector('.retry').addEventListener('click', function () {
  bets = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.bets').textContent = bets;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.retry').textContent = 'Again!';
  document.querySelector('.check').disabled = false;
});

document.querySelector('.check').addEventListener('click', function () {});
