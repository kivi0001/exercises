// Array med ændringer
const curseWords = [
    {
    bad: "var",
    good: "const"
    },
    {
    bad: "float",
    good: "grid"
    },
    {
    bad: "marquee",
    good: "just don't"
    }
]

// "flag" : viser om noget er true ller false
let isButtonClickedFlag = false;

// p-elementet med text indhold der skal ændres
let text = document.querySelector("#paragraf").textContent;

// knap der skal udløse ændring
const sfwButton = document.querySelector("#sfw-button");

// klik-event på knappen
sfwButton.addEventListener("click", profanityFilter);

// dialog-boks der skal vises hvis knap allerede er trykket på
const dialogBoks = document.querySelector("#dialog-message");

// knap til at lukke dialogboks
const closeDialogBtn = document.querySelector("#dialog-luk-knap");
closeDialogBtn.addEventListener("click", closeDialog);
function closeDialog(){
    dialogBoks.close();
}

// funktion der tjekker om der allerede er trykket på knappen
// "hvis let-variablens erklæring er true, så vis dialogboks og log beskeden i konsollen"
// "ellers: igangsæt funktionen safeForWork"
// tilsidst: hvis funktionen køres igennem til slut, så sæt let-variablens erklæring til at være true.
function profanityFilter(){
    if(isButtonClickedFlag === true){
        console.log("knappen er blevet trykket på");
        dialogBoks.showModal();
    }
    else {
        console.log("knappen er IKKE blevet trykket på");
        safeForWork();
    }
    isButtonClickedFlag = true;
}

// funktion der ændrer arrayets bad-words til good-words i p-elementet
// "for hvert element i array'et curseWords, tag variablen text (p-indhold), og udskift alle bad-elementer med good-elementer fra array'et"
// til sidst: opdater variablen text (så resultatet vises i browser/html-element)
function safeForWork(){
    curseWords.forEach((element) => {
        text = text.replaceAll(element.bad, element.good);
    });
    document.querySelector("#paragraf").textContent = text;
}


// ANDRE FORSØG::
/* function safeForWork(){
    curseWords.forEach((element) => {
            text.replaceAll(curseWords.good);
        });
    }
    console.log("SFW", text); */

/*     function safeForWork(){
    curseWords.forEach((element) => {
        if (text.includes(element.bad))
            text = text.replaceAll(element.bad, element.good);
        });
    }
    console.log("SFW", text); */


    // GENNEMGANG FRA UNDERVISNING

    // i html: en <form method="dialog"> i stedet for bare dialogboks.

    //alternativ function i stedet for "replace all"
/*     function safeForWork(){
    curseWords.forEach((element) => {
        text = text.split(element.bad).join(`<span>${element.good}</span>`);
    });
    document.querySelector("#paragraf").textContent = text;
} */