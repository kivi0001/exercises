const toDoListText = document.querySelector("#todolist-text");
const toDoListBtn = document.querySelector(".todo-list-button");
const toDoListContainer = document.querySelector(".todolist-container");
const toDoListArr = [];

const toDoArr = [];
const toDoSection = document.querySelector(".todo-section");
const listHeadline = document.querySelector(".list-headline");
const toDoText = document.querySelector("#todo-text");
const toDoContainer = document.querySelector(".todo-container");
const toDoBtn = document.querySelector(".todo-button");

//tilføj focus
toDoListText.focus();

//fjern fokus
toDoListText.addEventListener("focusout", focusOut);
function focusOut(event){
    console.log("bruger har fjernet fokus", event.target.value);
}

toDoListBtn.addEventListener("click", submitToDoList);

function submitToDoList(){
    //funktionen starter med at "cleare" det udskrevede array (men ikke selve arrayet)
    toDoListArr.length = 0;
    const toDoListObject = {text:toDoListText.value, done:false, id:self.crypto.randomUUID()}
    toDoListArr.push(toDoListObject);
    console.log("toDoListArr:", toDoListArr);
    showTaskListArr();
}

function filterAndSortTaskArr(){
    showTaskListArr();
}

function showTaskListArr(){
    toDoListArr.forEach(element=>{
        toDoListContainer.innerHTML += `<li data-id="">${element.text}</li><button id="show-list">Show list</button>`;
        // lav liste element, og tag delene for task-array og for hver af dem lav et element til html, og en knap med stjerne/select/tick
        // en knap som laver "done" om til "true"
    })
}

toDoListContainer.addEventListener("click", event => {
    if (event.target && event.target.matches("#show-list")) 
        showListSection();
})

//Vis listen
function showListSection(){
    toDoSection.classList.add("show-section");
    listHeadline.innerText = `${toDoListText.value}`;
}

//Event listener på task-knap
toDoBtn.addEventListener("click", submitTask);

//opret tasks i listen
function submitTask(){
    toDoArr.length = 0;
    const toDoObj = {text:toDoText.value, done:false, id:self.crypto.randomUUID()}
    toDoArr.push(toDoObj);
    console.log("toDoArr:", toDoArr);
    showTaskArr();
}

function showTaskArr(){
    toDoArr.forEach(element=>{
        toDoContainer.innerHTML += `<li>${element.text}</li>`;
    })
}
/* function submit

function showTaskArr(){
    toDoArr.forEach(elm => {
        taskListItem.innerHTML += `<p>${elm.text}</p>`;
    })
} */