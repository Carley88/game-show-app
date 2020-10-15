/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();
newGame.activePhrase = newGame.getRandomPhrase();

const newPhrase = new Phrase(newGame.activePhrase);
newPhrase.addPhraseToDisplay();

const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => {
  newGame.startGame();
});
