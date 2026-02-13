const dropdown = document.querySelector("#theme-switcher");
const bodyTheme = document.querySelector("#body");
let getTheme = localStorage.getItem("theme");

console.log(localStorage.getItem("theme"));

if(getTheme){
    changeTheme(getTheme);
    dropdown.value = getTheme;
} else {
    bodyTheme.dataset.theme = "dark";
    dropdown.value = "dark";
}
dropdown.addEventListener("click", changeTheme);

function changeTheme(){
    let valgtTema = bodyTheme.dataset.theme = dropdown.value;
    localStorage.setItem("theme", valgtTema);
    
    //Oprindeligt forsøg:
    /*     if (dropdown.value === "light"){
        bodyTheme.dataset.theme = "light";
    }
    else if (dropdown.value === "dark"){
        bodyTheme.dataset.theme = "dark";
    }
    else if (dropdown.value === "hawaii"){
        bodyTheme.dataset.theme = "hawaii";
    } */
   
}


// GENNEMGANG/LØSNING FRA UNDERVISNING


/* if (theme === null){
    theme = "dark";
} */

/* document.querySelector("#theme_switcher").addEventListener("change", theChange);

function theChange(evt) {
    setTheme(evt.target.value);
}

function setTheme(theme){
    document.querySelector("body").dataset.theme = theme;
    localStorage.setItem("theme", theme);
}
 */
