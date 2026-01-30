const tooHigh = document.querySelector("#too-high");
const tooLow = document.querySelector("#too-low");
const correct = document.querySelector("#correct");
const startButton = document.querySelector("#start-game");
const guessFromGame = document.querySelector("#guess-from-game");

const number = Math.ceil(Math.random() * 100);

let firstGuess = 50;
let low = 1;
let high = 100;
let guessCounter = 0;

console.log(number);

tooHigh.addEventListener("click", guessedTooHigh);
tooLow.addEventListener("click", guessedTooLow);
correct.addEventListener("click", guessedCorrect);
startButton.addEventListener("click", startGame);

function startGame(){
    firstGuess = 50;
    low = 1;
    high = 100;
    guessCounter = 0;
    guessFromGame.innerHTML = `Jeg gætter på ${firstGuess}!`;
}

function computerGuess (number){
    return `computer guessed: ${number}`;
}

function guessedTooHigh(){
    high = firstGuess - 1;
    firstGuess = Math.ceil((low + high) / 2);
    guessCounter++;
    guessFromGame.innerHTML = `Hmmm... hvad så med ${firstGuess}?`;
    console.log(computerGuess(firstGuess));
}

function guessedTooLow(){
    low = firstGuess + 1;
    firstGuess = Math.ceil((low + high) / 2);
    guessCounter++;
    guessFromGame.innerHTML = `Okay, så gætter jeg på ${firstGuess}!`;
    console.log(computerGuess(firstGuess));
}

function guessedCorrect(){
    guessFromGame.innerHTML = `Wuhuu! Selvfølgelig var det ${firstGuess}! Det tog mig ${guessCounter} forsøg, men jeg vidste det selvfølgelig hele tiden.`;
    console.log(`Yay! Korrekt gæt: ${firstGuess}, Det tog ${guessCounter} forsøg.`);
}