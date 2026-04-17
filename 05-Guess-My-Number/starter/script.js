'use strict';

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

//console.log(document.querySelector('.message'));

displayMessage('🎉Correct number!');
console.log(document.querySelector('.message').textContent);

//console.log(document.querySelector('.number').textContent = 10);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;


document.querySelector('.score').textContent = 10;
//document.querySelector('.guess').value = 23;
//console.log(document.querySelector('.guess').value);
//event is something that happens on the page, for example mouse click, keypress 
//and a eventlistner waits for it to happen and listens
//where should the event happen? so in our case the check button needs to be implemented

document.querySelector('.check').addEventListener('click', function () {
    //console.log(document.querySelector('.guess').value);
    //here we use Number to convert to a number, because by default all html elements are a string by default
    //soo '.guess' is a string and we convert to a number
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

//when there is no input
    if (!guess) {
        displayMessage( '⛔ No number!');
        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //when player guesses to high


      } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
    



  /*   } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score --;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = '💥you lost the game!';
        }
//when player guesses to low
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!';
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too low!';
            score --;
            document.querySelector('.score').textContent = score;
//you lost the game
        } else {
            document.querySelector('.message').textContent = '💥you lost the game!';
        }
    }
*/
}); 
    

// the again button on reset: resets the box number back to ?
// resets background back to grey
//resets box width
//resets input box back to empty
//resets text back to default
//and score resets
//start with background?

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.number').textContent = '?';
    displayMessage("Start guessing..");
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});