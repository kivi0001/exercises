let object = {
firstName: "Kia",
age: 32,
student: true
};

// tilgå objekt med dot notation
console.log(`${object.firstName} er ${object.age}`);

// get'te en property/egenskab
let name = object.firstName;
console.log(name); 

// set'te en property/egenskab
object.firstName = "Tobias"
console.log(object);

// Bracket notation

object["firstName"] = "Emilie"
console.log(object);

// Tilføje property

// her er objektet
let person1 = {
firstName: "Kia",
age: 32,
student: true
};

// her vil LastName være udefineret i console log
console.log("LastName:", person1.lastName);

// nu er propertyen tilføjet
person1.lastName = "Vinther";
console.log("LastName:", person1.lastName);


// Fjerne en property:
delete person1.lastName;
console.log("LastName:", person1.lastName);

// Objekter som variabler
let person2 = {
firstName: "Kia",
age: 32,
student: true
};

console.log(person2);
 // ændrer age egenskaben / property
person2.age ++;
console.log(person2);

// laver en ny variabel og sætter den til at være lig med person2 objektet, men ændrer fornavnet 
const person3 = person2;
person3.firstName = "Tobias";

console.log("person2:", person2);

