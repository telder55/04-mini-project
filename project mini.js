var win
var loss
var time
var startGame
var correctLetter
var blanks





startGame.addEventListener("click", function() {
    // If mode is dark, apply light background
    if (mode === "dark") {
      mode = "light";
      container.setAttribute("class", "light");
    }
    // If mode is light, apply dark background 
    else {
      mode = "dark";
      container.setAttribute("class", "dark");
    }
  });
  



// Click a button to start a game

// Display number of blanks from random word that user is trying to guess
//counter for number of blanks 

// User wins the game when all letters have been correctly guessed
//win is equal to all correct answers

// User losed the game when time runs out before all letters are guessed
// Display total wins and losses 
// When user selects a key, log that as a key event
// When correct letter is guessed, _ should be replaced with that letter
if (correctLetter){
    
}
//replace if correct 
// Program an alert when the game is finished with a win or lose message
// when start button is clicked, timer should restartvar timeEl = document.querySelector(".time");


var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till game over.";

    if(secondsLeft === 0) {
        // user loses log to screen
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      
    }

  }, 1000);
}


setTime();


// Wins and losses should persist, so make sure they are in local storage

// * When a user presses a letter key, the user's guess should be captured as a key event.

// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

// * When a user wins or loses a game, a message should appear and the timer should stop. 

// * When a user clicks the start button, the timer should reset. 

// * When a user refreshes or returns to the brower page, the win and loss counts should persist.

// ## 💡 Notes -->

// Selects element by class

