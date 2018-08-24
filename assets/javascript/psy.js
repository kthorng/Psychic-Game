// Creates an array that lists out all the options of the alphabet.
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

// Creating variable to hold the number of wins, losses, guesses left, guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

// Creating variables that hold reference to the place in the HTML where to display things.
var directionsText = document.getElementById('directions-text');
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');
var guessesText = document.getElementById('guessesLeft');
var lettersText = document.getElementById('lettersGuessed');


// Function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Only allow letter choices.
  if (letterChoices.indexOf(userGuess) === -1) return;

  // Push user guesses to the empty array.
  lettersGuessed.push(userGuess);

  // Comuter randomly chooses a choice from the options array.
  var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

  // Subtracts a guess on each event.key
  guessesLeft--;

  // Change the text
  directionsText.textContent = 'Go ahead, keep guessing';

  // Display on HTML.
  winsText.textContent = 'Wins: ' + wins;
  lossesText.textContent = 'Losses: ' + losses;
  guessesText.textContent = 'Guesses Left: ' + guessesLeft;
  lettersText.textContent = 'Your Guesses so far: ' + lettersGuessed + (', ');

  // wins
  if (computerGuess === userGuess) {
    wins++;
    guessesLeft = 9;
    lettersGuessed = [];
  }

  // losses
  if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    lettersGuessed = [];
  }
      
};