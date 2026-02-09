const name = "Kia Margrethe Hill Vinther";
const namearr = name.split(' ');

console.log(namearr);

const firstName = namearr[0];
const middleName = namearr[1];
const lastNamePost = namearr[namearr.length - 1];

const lastName = lastNamePost.substring(0);


console.log(`First name: ${firstName}`);
console.log(`Middlename: ${middleName}`);
console.log(`Lastname: ${lastName}`);


// Løsning fra undervisning
const str = "Peter Heronius Lind";
const firstName2 = str.substring(0, str.indexOf(" "));
const middleName2 = str.substring(str.indexOf(" "), str.lastIndexOf(" "));
const lastName2 = str.substring(str.lastIndexOf(" "));
 console.log(`Hans navn er ${firstName2} ${middleName2} ${lastName2}`);