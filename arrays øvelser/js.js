let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(letters[4]);

let newArr = letters;
newArr[4] = '*';

console.log(letters[4]);

// NY ARRAY ØVELSE //
//Array
const names = ['Harry', 'Ron', 'Hermione'];
// tom variabel til at gemme et resultat
let result;
//push til arrayet gennem den tomme variabel
result = names.push("Draco");

console.log(names);
console.log(result);

//Metoder: push, pop, slice, splice, indexOf, shift, unshift

// Pop - fjerner det sidste element i et array
result = names.pop();
console.log(names);
console.log(result);

// Push - pusher et element til et array
result = names.push("Neville");
console.log(names);
console.log(result);

result = names.push("Luna");
console.log(names);
console.log(result);

// Slice - returnerer valgte array-elementer som et nyt array (tænk tallene som kommaerne, lidt ala css gridlines)
result = names.slice(0, 3);
console.log(names);
console.log(result);

// Splice - tilføjer/fjerner elementer i et array, på en bestemt plads
// Her: "på plads 1, udskift med Cho"
result = names.splice(1, 0, "Cho");
console.log(names);
console.log(result);

// push et element på en bestemt plads i array??
names[1] = "Ginny";
console.log(names);
console.log(result);

// Push
result = names.push("Fred", "George");
console.log(names);
console.log(result);

// indexOf - fortæller hvad nummer/plads et element har i et array
result = names.indexOf("Fred");
console.log(names);
console.log(result);

// Splice - her er hele arrayet valgt, og udskiftet med element nr 1 i arrayet
result = names.splice(result, 1);
console.log(names);
console.log(result);

// toSpliced - uforanderlig/immutable version af splice
result = names.toSpliced(1, 1);
console.log(names);
console.log(result);

// Unshift - tilføjer nye elementer til begyndelsen af et array
result = names.unshift("Hagrid", "Lucius");
console.log(names);
console.log(result);

// Shift - kan bruges til at fjerne eller returnere det første element i et array
result = names.shift();
console.log(names);
console.log(result);


// NY ARRAY ØVELSE
//  konverter til array

//konverter et array til en streng:
const wordss = ["hej", "goddag", "farvel"];
console.log(wordss.join(" "));

// NUMMER 1: Array.from()
const manyletters = Array.from("abcdefghijklmn");
console.log(manyletters);

// NUMMER 2: Split - laver et array ved at splitte strengen op fx ved alle mellemrum ml ord, eller mellem hvert bogstav
// her: ingen split, eller rettere: konverteres til ét enkelt array-element
const str = "abcdefghijklmn";
const arr1 = str.split();
console.log(arr1);

// her: splittes mellem hvert bogstav, dvs hvert bogstav bliver til et array-element hver
const arr2 = str.split('');
console.log(arr2);

// her: splittes mellem hvert ord, dvs hvert ord bliver til et array-element
const manyWords = "her er mange ord i en streng";
const arr3 = manyWords.split(' ');
console.log(arr3);

// her: der kan splittes på hvad som helst. Fx bogstavet 'i' fra sætningen:
const arr4 = manyWords.split("i");
console.log(arr4);

// NUMMER 3: Spread operator - 
const arr5 = [...str];
console.log(arr5);


// NY ARRAY ØVELSE:
// ARRAY METODER

// ForEach: callback function, med 3 "argumenter" eller parametre: a: element/value, b: index, c: array
const people = ["Harry", "Ron", "Hermione", "Neville"];
function testParms(a,b,c,d) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
people.forEach(testParms);

// Filter:
// eksempel 1:
const words = ["hej", "nej", "jo", "okay", "farvel"];
function isWordLongerThan3Chars (word){
    return word.length > 3
}

const resultat = words.filter(isWordLongerThan3Chars);
console.log(resultat);

// eksempel 2:

//array af dyr
const animals = [
    {
        name: "Mogens",
        type: "kat"
    },
        {
        name: "Juno",
        type: "hund"
    },
        {
        name: "Balou",
        type: "kat"
    },
        {
        name: "Silke",
        type: "kat"
    }
]

//functions der viser hele arrayet i .filter med "all"-function, og ingen i .filter med "none"-funktionen
function all(animal){
    return true;
}
function none(animal){
    return false;
}

console.log("ALL", animals.filter(all));
console.log("NONE", animals.filter(none));

// filtrering som kun viser katte
function isCat(animal){
    if (animal.type === "kat"){
        return true;
    }
    else {
        return false;
    }
}

const onlyCats = animals.filter(isCat);
console.log(onlyCats);


// filtrering som kun viser hunde
function isDog(animal){
    if (animal.type === "hund"){
        return true;
    }
    else {
        return false;
    }
}

const onlyDogs = animals.filter(isDog);
console.log(onlyDogs);