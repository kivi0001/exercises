// OPGAVE IKKE LØST

"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

const selector = document.querySelector("#lang-skift");
selector.addEventListener ("change", evt => {
  locale = selector.value;
})


changeLanguage("da");

function changeLanguage(locale){
  texts[locale].texts.forEach((elm) => {
    console.log(elm.location);
    console.log(elm.text);
    console.log("**********");
    document.querySelector(elm.location).textContent = elm.text;
  })
}