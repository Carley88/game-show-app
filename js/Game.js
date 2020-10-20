/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [new Phrase("A Piece of Cake"),
                    new Phrase("Roll With the Punches"),
                    new Phrase("Break The Ice"),
                    new Phrase("Close But No Cigar"),
                    new Phrase("You Can't Judge a Book By Its Cover")
                  ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
  const randomNumber = Math.floor(Math.random() * 5);
  return this.phrases[randomNumber];
  }
  startGame() {
    const startScreen = document.getElementById("overlay");
    startScreen.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  removeLife() {
    const hearts = document.getElementsByClassName("tries");
    hearts[this.missed].children[0].src = `images/lostHeart.png`;
    this.missed++
  }
  checkForWin() {
    const remainingLetters = document.getElementsByClassName("hide");
    if(remainingLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  gameOver(gameWon) {
    const endScreen = document.getElementById("overlay");
    const endMessage = document.getElementById("game-over-message");
    const playButton = document.getElementById("btn__reset");
    if(gameWon === true) {
      endScreen.className = "win"
      endMessage.textContent = "Congratulations you've won the game!"
      playButton.textContent = "Play again"
    } else {
      endScreen.className = "lose"
      endMessage.textContent = "Oh no you've run out of guesses!"
      playButton.textContent = 'Try again'
    }
  }
}
