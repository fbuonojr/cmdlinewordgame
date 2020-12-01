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
        this.makeGuess();
    }   
}