/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }
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
  checkLetter(selectedLetter) {
    return this.phrase.includes(selectedLetter);
  }
  showMatchedLetter(selectedLetter) {
    const letters = document.getElementsByClassName(selectedLetter);
    for(let i = 0; i < letters.length; i++) {
      letters[i].classList.replace("hide", "show");
    }
  }
}
