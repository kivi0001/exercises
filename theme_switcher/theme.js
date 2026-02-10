const dropdown = document.querySelector("#theme-switcher");
const bodyTheme = document.querySelector("#body");

dropdown.addEventListener("click", changeTheme);

function changeTheme(){
    if (dropdown.value === "light"){
        bodyTheme.dataset.theme = "light";
    }
    else if (dropdown.value === "dark"){
        bodyTheme.dataset.theme = "dark";
    }
    else if (dropdown.value === "hawaii"){
        bodyTheme.dataset.theme = "hawaii";
    }
}


// GENNEMGANG/LØSNING FRA UNDERVISNING

/* let theme = localStorage.getItem("theme");

if (theme === null){
    theme = "dark";
}

document.querySelector("#theme_select").addEventListener("change", theChange);

function theChange(evt) {
    setTheme(evt.target.value);
}

function setTheme(theme){
    document.querySelector("body").dataset.theme = theme;
    localStorage.setItem("theme", theme);
}

 */