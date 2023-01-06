'use strict';

//variable na correct number, assign na ug number. then if correct print correct! if wrong print incorrect number

let scoreGame = 20;
document.querySelector('.score').textContent = scoreGame;

let highScoreGame = 0;

let secretNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//document.querySelector('.number').textContent = '?';

displayNumber('?');

//document.querySelector('.message').textContent = 'Start guessing...';

displayMessage('Start guessing...');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //No numbers
  if (!guess) {
    //✅document.querySelector('.message').textContent = `⛔ No Number ⛔`;
    displayMessage(`⛔ No Number ⛔`);

    //guess is a win
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = `✅Correct number!✅`;

    displayMessage(`✅Correct number!✅`);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //document.querySelector('.number').textContent = secretNumber;

    displayNumber(secretNumber);

    if (scoreGame > highScoreGame) {
      highScoreGame = scoreGame;

      document.querySelector('.highscore').textContent = highScoreGame;
    }

    //if guess is too high
  } else if (guess !== secretNumber) {
    if (scoreGame > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? `Too high ` : `📉 Too low`;

      displayMessage(guess > secretNumber ? `Too high ` : `📉 Too low`);

      scoreGame = scoreGame - 1;
      //document.querySelector('.score').textContent = scoreGame;

      displayScore(scoreGame);
    } else {
      //document.querySelector('.message').textContent = `you lost`;

      displayMessage(`😥you lost😥`);

      //document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  //if guess is too low
  /*else if (guess < secretNumber) {
    if (scoreGame > 1) {
      document.querySelector('.message').textContent = `📉 Too low`;
      scoreGame = scoreGame - 1;
      document.querySelector('.score').textContent = scoreGame;
    } else {
      document.querySelector('.message').textContent = `You lost`;
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});
//////////////////////////////////////////////////////////
console.log(secretNumber);

const guessBlank = '';

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(secretNumber);

  scoreGame = 20;
  //document.querySelector('.score').textContent = scoreGame;
  displayScore(scoreGame);

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  //displayNumber()

  //document.querySelector('.number').textContent = '?';

  displayNumber('?');

  //sdocument.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = guessBlank;
});
