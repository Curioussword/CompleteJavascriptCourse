'use strict';

console.log(document.querySelector('.message'));

document.querySelector('.message').textContent = '🎉Correct number!';
console.log(document.querySelector('.message').textContent);

//console.log(document.querySelector('.number').textContent = 10);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(document.querySelector('.number').textContent = secretNumber);

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


    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!';
    }

});