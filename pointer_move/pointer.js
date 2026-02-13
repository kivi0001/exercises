

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
  const ratioY = e.clientY / window.innerHeight;

  const color = (procent * 100).toFixed(2);
  const colorY = (ratioY * 100).toFixed(2);

  console.log("percent:", color);
  document.querySelector("body").style.setProperty("--pointerx", color);
  document.querySelector("body").style.setProperty("--pointery", colorY);
}

