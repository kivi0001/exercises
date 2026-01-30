const tooHigh = document.querySelector("#too-high");
const tooLow = document.querySelector("#too-low");
const correct = document.querySelector("#correct");
const startButton = document.querySelector("#start-game");
const guessFromGame = document.querySelector("#guess-from-game");

const number = Math.ceil(Math.random() * 100);

let firstGuess = 50;
let low = 1;
let high = 100;

console.log(number);

tooHigh.addEventListener("click", guessedTooHigh);
tooLow.addEventListener("click", guessedTooLow);
correct.addEventListener("click", guessedCorrect);
startButton.addEventListener("click", startGame);

function startGame(){
    firstGuess = 50;
    low = 1;
    high = 100;
    guessFromGame.innerHTML = firstGuess;
}

function computerGuess (number){
    return `computer guessed: ${number}`;
}

function guessedTooHigh(){
    high = firstGuess - 1;
    firstGuess = Math.ceil((low + high) / 2);
    guessFromGame.innerHTML = firstGuess;
    console.log(computerGuess(firstGuess));
}

function guessedTooLow(){
    low = firstGuess + 1;
    firstGuess = Math.ceil((low + high) / 2);
    guessFromGame.innerHTML = firstGuess;
    console.log(computerGuess(firstGuess));
}

function guessedCorrect(){
    console.log(`Yay! Korrekt gæt: ${firstGuess}`);
}