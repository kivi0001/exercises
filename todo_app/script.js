const toDoListText = document.querySelector("#todolist-text");
const toDoListBtn = document.querySelector(".todo-list-button");
const toDoListContainer = document.querySelector(".todolist-container");
const toDoListArr = [];

const toDoArr = [];
const toDoSection = document.querySelector(".todo-tasks-and-done-section");
const listHeadline = document.querySelector(".list-headline");
const toDoText = document.querySelector("#todo-text");
const toDoContainer = document.querySelector(".todo-container");
const toDoBtn = document.querySelector(".todo-button");

const doneContainer = document.querySelector(".done-container");
const deleteListBtn = document.querySelector(".delete-list-button");

//tilføj focus
toDoListText.focus();

//fjern fokus
toDoListText.addEventListener("focusout", focusOut);
function focusOut(event){
    console.log("bruger har fjernet fokus", event.target.value);
}

// knap event til 'add todo list'
toDoListBtn.addEventListener("click", submitToDoList);

// funktion til at skrive listen ud / knap event
function submitToDoList(){
    const toDoListObject = {text:toDoListText.value, done:false, id:self.crypto.randomUUID(), taskArr:[]}
    toDoListArr.push(toDoListObject);
    console.log("toDoListArr:", toDoListArr);
    showTaskListArr();
}

// senere funktion til filtrering og sortering
function filterAndSortTaskArr(){
    showTaskListArr();
}

// funktion til at tilføje elementer til liste i browser
function showTaskListArr(){
    toDoListContainer.innerHTML="";
    toDoListArr.forEach(element=>{
        // toDoListContainer.innerHTML += `<li data-id="">${element.text}</li><button id="show-list">Show list</button>`;
        const li =document.createElement("li")
        li.innerHTML=`<h4>${element.text}</h4><button id="show-list">Show list</button>`
        li.querySelector("#show-list").addEventListener("click",()=>{
            
            console.log("KLIK KLIK", element.id)
            
            showListSection(element)
            
        })
        
        toDoListContainer.appendChild(li)
        // lav liste element, og tag delene for task-array og for hver af dem lav et element til html, og en knap med stjerne/select/tick
        // en knap som laver "done" om til "true"
    })
    
}

let currentList = null;

//Vis listen (funktion tilføjer class, som gør liste-sektion synlig)
function showListSection(element){
    currentList = element;
    toDoSection.classList.add("show-section");
    listHeadline.innerText = `${element.text}`;
    showTaskArr(currentList.taskArr);
}
//Event listener på add task-knap
toDoBtn.addEventListener("click", submitTask);

//opret tasks i listen
function submitTask(){
    if (!currentList) {return;}
    const toDoObj = {text:toDoText.value, isDone:false, id:self.crypto.randomUUID(), star:false}
    currentList.taskArr.push(toDoObj);
    toDoText.value = "";
    showTaskArr(currentList.taskArr);
    
}

// tilføj tasks til task-array
           
function showTaskArr(array){
        toDoContainer.innerHTML = "";
        doneContainer.innerHTML = "";
        array.forEach(item=>{
           const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="checkbox-${item.id}" ${item.isDone?"checked":""} /><h4>${item.text}</h4><p class="star" data-id="${item.id}">` + (item.star ? '⭐' : '✩') + `</p>`;
    
    const checkbox = li.querySelector(`#checkbox-${item.id}`);
    const starBtn = li.querySelector(".star");

    checkbox.addEventListener("change", () => {
      item.isDone = checkbox.checked;
      showTaskArr(array);
      console.log("isDone", item.isDone)
    });

    starBtn.addEventListener("click", () => {
        item.star = !item.star;
        showTaskArr(array);
    })


    if (item.isDone) doneContainer.appendChild(li);
    else toDoContainer.appendChild(li);
        });
    }

/* function starColorChange(item){
    const starElement = document.querySelector(li);
    if(item.star === true){
        starElement.innerHTML = `⭐`;
    } else {
        starElement.innerHTML = `✩`;
    }
}

function clickStar(){
    if(item.star === true){
        item.star = false;
    } else {
        item.star = true;
    }
} */