'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let bets = 10;
let highScore = 0;

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

function handleCorrectNumber() {
  message('Correct number!!');
  highScore += 10;
  document.querySelector('.number').style.width = '22rem';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.check').disabled = true;
}

function handleGuessTooHigh() {
  message('Too high!');
  document.querySelector('.bets').textContent = --bets;
}

function handleGuessTooLow() {
  message('Too low!');
  document.querySelector('.bets').textContent = --bets;
}

function loss() {
  message('💥 You lost the game..');
  document.querySelector('.retry').textContent = 'Retry!';
  document.querySelector('.check').disabled = true;
}

function reset() {
  if (bets < 2) {
    highScore = 0;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message('No Number!');
  } else if (guess === secretNumber) {
    handleCorrectNumber();
  } else if (guess !== secretNumber) {
    if (bets > 1) {
      guess > secretNumber ? handleGuessTooHigh() : handleGuessTooLow();
    } else {
      loss();
    }
  }
});

document.querySelector('.retry').addEventListener('click', function () {
  reset();
  bets = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.querySelector('.bets').textContent = bets;
  document.querySelector('.number').textContent = '?';
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.retry').textContent = 'Again!';
  document.querySelector('.check').disabled = false;
  document.querySelector('.highscore').textContent = highScore;
});

// --------------------------------------------------------------------------
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

// if () {
// return !guess
//   ? handleNoNumber()
//   : guess === secretNumber
//   ? handleCorrectNumber()
//   : guess > secretNumber
//   ? handleGuessTooHigh()
//   : guess < secretNumber
//   ? handleGuessTooLow()
//   }
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number!';
//   } else if (guess === secretNumber) {
//   } else if (guess > secretNumber) {
//     if (bets > 1) {
//     } else {
//     }
//   } else if (guess < secretNumber) {
//     if (bets > 1) {
//     } else {
//     }
//   }
// });

// document.querySelector('.check').addEventListener('click', function () {});
