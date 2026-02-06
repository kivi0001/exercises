// TEMPLATE LITERALS

const name = "Kia";
const pet = "imaginary dog";
const petName = "Fantasia";

// klassisk konkatenering, med linje skift ved brug af "\n" (backslash + n, en "escape"-funktion)
console.log("Hello, my name is " + name + ", \nI have an " + pet + " called " + petName);

// backtick template literals, også med escape funktionen til linjeskift
console.log(`Hello my name is ${name}, \nI have an ${pet} called ${petName}`);

// .LENGTH OG [INDEX]

const name2 = "Kia";
const len = name2.length

console.log(`${name2} is ${len} characters long`);

const letter = name2[0]
console.log(`The first letter of ${name2} is ${letter}`);

// Øvelser med .length og [index]
const name3 = "Albus Percival Wulfric Brian Dumbledore"
const leng = name3.length;

console.log(`Total number of characters, including mellemrum, in ${name3} is ${leng}`);
console.log(`Bogstavet på index2 i strengen er ${name3[2]}`);
console.log(`Bogstavet på index6 i strengen er ${name3[6]}`);
console.log(`Index of "D" in Dumbledore is ${name3.indexOf("D")}`);
console.log(`Index of last "e" in ${name3} is ${name3.lastIndexOf("e")}`);

// METODER

// .trim : trimmer for space først og sidst i en streng
const str1 = "   There is    alot of space here   \n    ";
const str2 = str1.trim();

console.log(str1);
console.log(str2);

// TIP: tjek for mellemrum med underscore i console.log

console.log("_"+str1+"_");
console.log("_"+str2+"_");

// .substring : medtager parametre (start , end)

const fullName = "Kia Vinther"
const firstName = fullName.substring(0, 3);
console.log(`_${firstName}_`);

