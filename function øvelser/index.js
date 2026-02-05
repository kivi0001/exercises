
/* function greeting(firstName){
    return `Hej ${firstName}`
}
const result = greeting ("Kia");

console.log (result); */

function hire(person){
    person.hired = true;
}

function fire(person){
    person.hired = false;
}

function fireOrHire(action, person){
    action(person);
}

const person3 = {
    firstName: "Kia",
    lastName: "Vinther",
    hired: true
};

const person4 = {
    firstName: "Tobias",
    lastName: "Larsen",
    hired: false
};

console.log("person4:", person4);

//kalder funktionen, og sender parameteret "person4" med - derved ændres property'en "hired" fra objektets false, til funktionens true
hire(person4);
//se ændringen i console log
console.log("person4:", person4);
// her kalder vi fireOrHire function, med hire-function som parameter, og person4 som et andet parameter
fireOrHire(hire, person4);
console.log("person4:", person4);