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
                    new Phrase("Every Cloud Has a Silver Lining")
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
    if(this.missed < 4) {
      const hearts = document.getElementsByClassName("tries");
      hearts[this.missed].children[0].src = `images/lostHeart.png`;
      this.missed++;
    } else {
      this.gameOver();
    }
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
    endScreen.style.display = "";
    if(gameWon === true) {
      endScreen.className = "win";
      endMessage.textContent = "Congratulations you've won the game!";
      playButton.textContent = "Play again";
      this.resetGame();
    } else {
      endScreen.className = "lose";
      endMessage.textContent = "Oh no you've run out of guesses!";
      playButton.textContent = 'Try again';
      this.resetGame();
    }
  }
  resetGame() {
    const ul = document.querySelector('[id=phrase] ul');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    this.activePhrase = null;
    const buttons = document.querySelectorAll(".keyrow button");
    buttons.forEach(button => {
        button.disabled = false;
        button.className = "key";
    });
    const hearts = document.querySelectorAll(".tries");
    this.missed = 0;
    hearts.forEach(heart => heart.children[0].src = "images/liveHeart.png");
  }
  handleInteraction(button) {
    button.disabled = true;
    if(this.activePhrase.checkLetter(button.textContent) === false) {
      button.className = "wrong";
      this.removeLife();
    } else {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
    }
  }
}
