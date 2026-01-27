const guessItInput = document.querySelector("#guess-it");
const number = Math.floor(Math.random() * 100);
const button = document.querySelector("button");
const win = document.querySelector(".win");

button.addEventListener("click", guessIt);

console.log(number);

function guessIt(){
    if (parseInt(guessItInput.value) === number){
        win.classList.add("animate");
    }

    if (guessItInput.value > number){
        alert("Dit gæt er for højt :-(");
    }

    if (guessItInput.value < number){
        alert("Dit gæt er for lavt :-(");
    }

}