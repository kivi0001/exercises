const progressDiv = document.querySelector("div");
const progressBar = document.querySelector("span");
const endMessage = document.querySelector(".message-on-end");
const cryBtn = document.querySelector(".cry-button");
const celebrateBtn = document.querySelector(".celebrate-button");
const cryImage = document.querySelector(".cry-image");
const celebrateImage = document.querySelector(".celebrate-image");

document.addEventListener("mousemove", colorChange);

function colorChange(){
    document.querySelector("body").style.backgroundColor = `rgb(131, 161, 204)`;
    progressDiv.style.backgroundColor = `rgb(65, 105, 225)`;
}

progressBar.addEventListener("animationend", () => {
    console.log("animation ended");
    endMessage.classList.add("message-on-end-show");
   /*  endMessage.innerHTML = `<p>Den smukke animation er slut</p>
<p>Hvad vil du foretage dig nu?</p>
<div class="button-div">
    <button class="cry-button">Græde</button>
    <button class="celebrate-button">Fejre det</button>
</div>`; */

});

cryBtn.addEventListener("click", showCryImage);
celebrateBtn.addEventListener("click", showCelebrateImg);

function showCryImage(){
    cryImage.classList.add("show-image");   
}

function showCelebrateImg(){
    celebrateImage.classList.add("show-image");
}
