"use strict";
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const choices = ["rock", "paper", "scissors"];
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

let userChoice;
let computerChoice = Math.floor(Math.random() * 3);

console.log("Computer choice (0=rock,1=paper,2=scissors):" , computerChoice);

document.addEventListener("DOMContentLoaded", init);

function init() {
    rock_btn.addEventListener("click", rockClick)
    paper_btn.addEventListener("click", paperClick)
    scissors_btn.addEventListener("click", scissorsClick)
}

function rockClick() {
/* console.log("ROCK"); */
userChoice = "rock";

computerChooses();
}

function paperClick() {
/* console.log("PAPER"); */
userChoice = "paper";
computerChooses();
}

function scissorsClick() {
/* console.log("SCISSORS"); */
userChoice = "scissors";
computerChooses();
}
function computerChooses(){
/*     console.log("Computer choice", userChoice); */
computerChoice = choices [Math.floor(Math.random() * 3)];
    handShake();
}
function handShake(){
    player1.classList.add("shake");
    player2.classList.add("shake");
    setTimeout(() => {
            player1.classList.remove("shake");
            player2.classList.remove("shake");
            findAWinner();
        }, 1500);
}


function findAWinner(){
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");
    
    if(userChoice === computerChoice){
        draw.classList.remove("hidden");
    } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        win.classList.remove("hidden");
    } else {
        lose.classList.remove("hidden");
    }
}