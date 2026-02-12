

/* const width = window.innerWidth;
const body = document.querySelector("body");

body.addEventListener("mousemove", (MouseEvent.clientX) => { 
    body.style.setProperty() 
}) */

/*     document.addEventListener("mousemove", colorChange);

    function colorChange(e) {
        const procent = e.clientX / window.innerWidth;
        const color = procent * 100;

        document.body.style.backgroundColor = `hsl${color}, 100%, 70%`;
    } */


document.addEventListener("mousemove", colorChange);

function colorChange(e) {
  const procent = e.clientX / window.innerWidth; // window.innerwidth bruges til at dividere.
  const color = procent * 100;

  document.body.style.backgroundColor = `hsl(${color}, 100%, 70%)`;
}

console.log("ready");