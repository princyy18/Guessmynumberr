'use strict';
let randnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessnumber = Number(document.querySelector('.guess').value);
  if (!guessnumber) {
    document.querySelector('.message').textContent = 'No number 📌📌';
  } else if (guessnumber === randnumber) {
    document.querySelector('.message').textContent = 'correct number 🎉🎉';
    document.querySelector('.number').textContent = randnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guessnumber > randnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To high ⏫⏫';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessnumber < randnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To low ⏬⏬';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
