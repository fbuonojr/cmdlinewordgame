const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const words = require("./words");

class Game {
    constructor(){
        this.guessesLeft = 0;
    }

    play() {
        this.guessesLeft = 10;
        this.nextWord();
    }

    nextWord(){
        const randWord = words[Math.floow(Math.random() * words.length)];
        this.currentWord = new Word(randWord);
        console.log("\n" + this.currentWord + "\n");
        this.makeGuess();
    }

    makeGuess() {
        this.askForLetter().then(() => {
            if(this.guessesLeft < 1) {
                console.log('No guesses left! Word was: "' +
                this.currentWord.getSolution() +
                '"\n');
                this.askToPlayAgain();
            } else if (this.currentWord.guessedCorrectly()) {
                console.log("You got it right! Next word!");
                this.guessesLeft = 10;
                this.nextWord();
            } else {
                this.makeGuess();
            }
        });
    }

    askToPlayAgain() {
        inquirer.prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Play Again?"
            }
        ]).then(val => {
            if(val.choice) {
                this.play();
            } else {
                this.quit();
            }
        });
    }
}