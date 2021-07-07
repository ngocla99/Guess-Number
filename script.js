'use strict';
// document.querySelector('.message').textContent = 'Correct Number.🎉';
// document.querySelector('.number').textContent = 22;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.guess').value = 23;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// when click to check!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no number inside box
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    // when you win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess number is difference
  } else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '👆Too high!' : '👇Too low!';
      displayMessage(guess > secretNumber ? '👆Too high!' : '👇Too low!');
      //   document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //   document.querySelector('.message').textContent = '🤜You are loser';
      displayMessage('🤜You are loser');
      //   document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // when guess number is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.message').textContent = '👆Too high!';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🤜You are loser';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess number is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.message').textContent = '👇Too low!';
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🤜You are loser';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// when click to again!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
