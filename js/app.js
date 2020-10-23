/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let newGame;
/**
When a user clicks the start button the start game method is called.
This will move the user to the main screen to begin guessing the phrase.
**/
const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => {
  newGame = new Game();
  newGame.startGame();
});

/**
When the user clicks a letter on the keyboard that particular button element
will be passed through the handle interaction to determine if they have guessed
correctly and follow subsequent steps
**/
const letters = document.getElementById("qwerty");
letters.addEventListener("click", (event) => {
  if (event.target.className === "key") {
    newGame.handleInteraction(event.target);
  }
});

/**
There is also a keydown listener which allows the user to guess letters
using their keyboard.
**/
document.addEventListener("keydown", (event) => {
  if(newGame.activePhrase) {
    const buttons = document.querySelectorAll(`.key`)
    buttons.forEach(button => {
      if(event.key == button.textContent) {
        newGame.handleInteraction(button);
      }
    });
  }
});
