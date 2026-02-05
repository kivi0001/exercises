const list = document.querySelector("ul");
const numberOfCustomersArray = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);
    
    const li = document.createElement("li");
    li.style.setProperty("--height", "30");
    list.appendChild(li);

setInterval(newPillar, 1000);

function newPillar(){
    numberOfCustomersArray.forEach(Element => {
        const li = document.createElement("li");
        li.style.setProperty("--height", Element);
        list.appendChild(li);
    });
}