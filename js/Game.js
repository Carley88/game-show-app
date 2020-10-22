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
/**
Random phrase picks an item from the phrases array at random by selecting
a random number between 0 and 4.
**/
  getRandomPhrase() {
  const randomNumber = Math.floor(Math.random() * 5);
  return this.phrases[randomNumber];
  }
/**
Start game moves the user to the main screen to begin guessing the phrase.
This method will initiate a phrase being chosen at random and will add it to the
display.
**/
  startGame() {
    const startScreen = document.getElementById("overlay");
    startScreen.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
/**
If a user guesses incorrectly 1 will be added to the missed property and a heart
will turn from full to empty to indicate loosing a life in the game. If all the
lives are lost then the user looses the game.
**/
  removeLife() {
    if(this.missed < 4) {
      const hearts = document.getElementsByClassName("tries");
      hearts[this.missed].children[0].src = `images/lostHeart.png`;
      this.missed++;
    } else {
      this.gameOver();
    }
  }
/**
Checks how many letters in the phrase are left to be revealed. If the user has
guessed all the letters it will return true otherwise it returns false.
**/
  checkForWin() {
    const remainingLetters = document.getElementsByClassName("hide");
    if(remainingLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }
/**
The game is reset so that when the user selects play again they will have a new
phrase to guess and:
If the gamewon argument is true then the winners screen is revealed. This will
display a congratulations message and it updates the start button to say "play again".
If the game won argument is false then the loose screen is revealed. This will display
a you've run out of guesses message & will update the start button to say "try again."
**/
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
/**
Once the user has gotten to the end of the game the game will be reset to allow
them to play again. The existing phrase elements are removed, the hearts go back
to full, the missed property resets to 0, the buttons are enabled and their colours
are reset to neutral.
**/
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
/**
All of the games mechanics are centralised in the handle interaction. It checks
if the users guess is correct:
If it's correct the letter will turn a different colour to indicate the correct answer
and the letter is revealed on the board. Then it checks if the user has won the game
with their guess - if they have they will go to the winners screen.
If it's incorrect the letter will turn a different colour indicating an incorrect
guess. A life will be removed from the user - if they loose all lives they will be
be taken to the loose screen.
**/
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
