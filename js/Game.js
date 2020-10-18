/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = ["A Piece of Cake", "Roll With the Punches", "Break The Ice", "Close But No Cigar", "You Can't Judge a Book By Its Cover"];
    this.activePhrase = null;
  }
  getRandomPhrase() {
  const randomNumber = Math.floor(Math.random() * 5);
  return this.phrases[randomNumber];
  }
  startGame() {
    const startScreen = document.getElementById("overlay");
    startScreen.style.display = "none";
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
}
