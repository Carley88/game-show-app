/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }
/**
Creates a box for each letter in the phrase and hides the letter for the user
to guess.
**/
   addPhraseToDisplay() {
     const ul = document.querySelector('[id=phrase] ul');

     for(let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      const character = this.phrase[i]
      li.textContent = character;
      if(character === " ") {
        li.className = "space";
      } else {
        li.className = `hide letter ${character}`
      }
    }
  }
/**
Checks if the letter the user has chosen exists in the phrase.
**/
  checkLetter(selectedLetter) {
    return this.phrase.includes(selectedLetter);
  }
/**
Reveals the correctly guessed letter in it's box.
**/
  showMatchedLetter(selectedLetter) {
    const letters = document.getElementsByClassName(selectedLetter);
    for(let i = 0; i < letters.length; i++) {
      letters[i].classList.replace("hide", "show");
    }
  }
}
