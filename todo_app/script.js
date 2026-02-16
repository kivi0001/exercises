const toDoText = document.querySelector("#todolist-text");
const toDoBtn = document.querySelector("button");
const toDoContainer = document.querySelector(".todolist-container");
const toDoListArr = [];
const toDoArr = [];
const toDoSection = document.querySelector(".todo-section");

//tilføj focus
toDoText.focus();

//fjern fokus
toDoText.addEventListener("focusout", focusOut);
function focusOut(event){
    console.log("bruger har fjernet fokus", event.target.value);
}

toDoBtn.addEventListener("click", submitToDoList);

function submitToDoList(){
    //funktionen starter med at "cleare" det udskrevede array (men ikke selve arrayet)
    toDoListArr.length = 0;
    const toDoObject = {text:toDoText.value, done:false, id:self.crypto.randomUUID()}
    toDoListArr.push(toDoObject);
    console.log("toDoListArr:", toDoListArr);
    showTaskListArr();
}

function filterAndSortTaskArr(){
    showTaskListArr();
}

function showTaskListArr(){
toDoListArr.forEach(element=>{
    toDoContainer.innerHTML += `<li data-id="">${element.text}</li><button id="show-list">Show list</button>`;
    // lav liste element, og tag delene for task-array og for hver af dem lav et element til html, og en knap med stjerne/select/tick
        // en knap som laver "done" om til "true"
    })
}

const taskListBtn = document.querySelector("#show-list");
taskListBtn.addEventListener("click", showListSection);

function showListSection(){
    toDoSection.classList.add("show-section");
}

//opret tasks i listen

/* function submit

function showTaskArr(){
    toDoArr.forEach(elm => {
        taskListItem.innerHTML += `<p>${elm.text}</p>`;
    })
} */