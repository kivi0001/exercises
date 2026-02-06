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


/* const name = "Kia Margrethe Vinther";
console.log(name.indexOf(" "));
console.log(name.lastIndexOf(" "));
 */
