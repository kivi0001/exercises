let dropdown = document.querySelector("#theme-switcher");
let bodyTheme = document.querySelector("#body");

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