
//Brødkrumme array
const bc = [
{   name: "Hvidevarer", 
    link: "/hvidevarer" 
},
{   name: "Vaskemaskiner", 
    link: "/hvidevarer/vaskemaskiner" 
},
{   name: "Bosch", 
    link: "/hvidevarer/vaskemaskiner/bosch/" 
},
];

// variabler: knap og listeelementer fra DOM
const button = document.querySelector("#knap");
const listitems = document.querySelector("#ul");

// eventlistener på knap, som kalder funktion "breadcrumbs"
button.addEventListener("click", breadcrumbs);

// FUNTKION
function breadcrumbs(){

    // nulstiller listeelement (<ul> i HTML)
    listitems.innerHTML = "";

    // For hvert element i array, så opret et listeelement
    bc.forEach((element, index) => {
        const li = document.createElement("li");

        // hvis index er -1, dvs sidste element i array, så tilføj elementnavn som tekstindhold i <li>
        if (index === bc.length - 1){
            li.textContent = element.name;
        }
        // ellers, så opret et <a> element, og tilføj elementnavn som tekstindhold, og elementlink som href
        else {
            const a = document.createElement("a");
            a.href = element.link;
            a.textContent = (element.name + "  /");
            li.appendChild(a);
        }

        // tilføj det oprettede <li> element til <ul> i HTML
        listitems.appendChild(li);
    });
}
