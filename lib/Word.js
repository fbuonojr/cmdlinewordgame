const Letter = require("./Letter");

class Word {
    constructor(word) {
        //splits word into array, map creates a new letter object with each character in array
        this.letters = word.split("").map(char => new Letter(char));
    }

    getSolution() {
        return this.letters.map(letter => letter.getSolution()).join("");
    }

    toString() {
        return this.letters.join(" ");
    }

    guessLetter(char) {
        let foundLetter = false;
    }
}