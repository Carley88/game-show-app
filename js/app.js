/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const newGame = new Game();

const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => {
  newGame.startGame();
  console.log(newGame.activePhrase.phrase);
});

const letters = document.getElementById("qwerty");
letters.addEventListener("click", (event) => {
  if (event.target.className === "key") {
    newGame.handleInteraction(event.target);
  }
});

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
