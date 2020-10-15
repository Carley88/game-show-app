/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase;
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

 }
