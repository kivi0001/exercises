/* const name = "mArgREthE";
const capName = `${name.substring(0, 2).toLowerCase()}${name[2].toUpperCase()}${name.substring(3).toLowerCase()}`;

console.log(capName); */

/* const name = "kia margrethe vinther";
const capName = `${name[0].toUpperCase()}${name.substring(1)}`;

console.log(capName); */

const name1 = "kia margrethe hill vinther";
const nameArr = name1.split(" ");
console.log(nameArr);
nameArr.forEach(element => console.log(`${element[0].toUpperCase()}${element.substring(1)}`));

// LØSNiNGER FRA UNDERVISNING

const name2 = "marGrEtHe"
let treCapped = name2.substring(0, 2).toLowerCase() + name2.substring(2 , 3).toUpperCase() + name2.substring(3).toLowerCase();

console.log(treCapped);

