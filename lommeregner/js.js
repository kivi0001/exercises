let inputTal1 = document.querySelector("#tal1");
let inputTal2 = document.querySelector("#tal2");
let regneType = document.querySelector("#regnetype");

const ligMed = document.querySelector("#ligmed");
const clear = document.querySelector("#clear");
const resultat = document.querySelector("#resultat");

let sum;

const plus = "+";
const minus = "-";
const gange = "*";
const divide = "/";

clear.addEventListener("click", ryd);
ligMed.addEventListener("click", udregning);

function udregning(){
    
    if (inputTal1.value === "" || inputTal2.value === ""){
        alert("Indtast et tal i hver boks");
        resultat.innerHTML = "";
        return;
    }

    else if (regneType.value === divide && parseFloat(inputTal1.value) === 0 || regneType.value === divide && parseFloat(inputTal2.value) === 0){
        alert("Du kan ikke dividere med 0. Prøv igen")
        return;
    }
   
    else if (regneType.value === plus){
    sum = parseFloat(inputTal1.value) + parseFloat(inputTal2.value);
    }
    
    else if (regneType.value === minus){
    sum = parseFloat(inputTal1.value) - parseFloat(inputTal2.value);
    }
    
    else if (regneType.value === gange){
    sum = parseFloat(inputTal1.value) * parseFloat(inputTal2.value);
    }
    
    
    else if (regneType.value === divide){
    sum = parseFloat(inputTal1.value) / parseFloat(inputTal2.value);
    }

    
    resultat.innerHTML = sum.toFixed(2);

    console.log("første tal:", inputTal1.value);
    console.log("andet tal:", inputTal2.value);
    console.log("sum:", sum);
}

function ryd(){
    inputTal1.value = "";
    inputTal2.value = "";
    resultat.innerHTML = "";
}