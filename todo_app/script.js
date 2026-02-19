const toDoListText = document.querySelector("#todolist-text");
const toDoListBtn = document.querySelector(".todo-list-button");
const toDoListContainer = document.querySelector(".todolist-container");
const toDoListArr = JSON.parse(localStorage.getItem("toDoLists")) || [];

/* const toDoArr = []; */
const toDoSection = document.querySelector(".todo-tasks-and-done-section");
const listHeadline = document.querySelector(".list-headline");
const toDoText = document.querySelector("#todo-text");
const toDoContainer = document.querySelector(".todo-container");
const toDoBtn = document.querySelector(".todo-button");

const doneContainer = document.querySelector(".done-container");
const deleteListBtnDiv = document.querySelector(".delete-list-btn-div");
const deleteListBtn = document.querySelector(".delete-list-btn");

const deleteTaskBtnDiv = document.querySelector(".delete-task-btn-div");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const deleteTaskBtn = document.querySelector(".delete-task-btn");

let selectedList = null;
let currentList = null;

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
    localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
    toDoListText.value = "";
    console.log("toDoListArr:", toDoListArr);
    showTaskListArr();
}


// funktion til at tilføje elementer til liste i browser
function showTaskListArr(){
    toDoListContainer.innerHTML="";
    toDoListArr.forEach(element=>{
        const li = document.createElement("li")
        li.innerHTML=`<h4>${element.text}</h4><button id="show-list">Show list</button>`
        li.querySelector("#show-list").addEventListener("click",()=>{
            
            console.log("KLIK KLIK", element.id)
            
            showListSection(element)
            
        })

        //eventlistener på show-list knappen, som kalder på funktionen der viser slet-liste knappen
        li.addEventListener("click", (evt)=>{
            if (evt.target === li.querySelector("#show-list")) return;
            document.querySelectorAll(".todolist-container li").forEach(elm => elm.classList.remove("selected"));
            li.classList.add("selected");
            selectedList = element;
            showDeleteBtn()

        })
        
        // function til at vise og sætte tekst i slet-liste-knappen
        function showDeleteBtn(){
            deleteListBtnDiv.classList.add("show-delete-list-btn-div");
            deleteListBtn.innerHTML = `Delete '${element.text}' 🗑 `;
        }

        toDoListContainer.appendChild(li)
    })
    
}



deleteListBtn.addEventListener("click", deleteList);

function deleteList(){
    if (!selectedList) return;
    const listToBeDeleted = toDoListArr.findIndex(list => list.id === selectedList.id);
    if (listToBeDeleted > -1){
    toDoListArr.splice(listToBeDeleted, 1);
    localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
    }
    selectedList = null;
    toDoSection.classList.remove("show-section");
    listHeadline.innerText = "";
    toDoContainer.innerHTML = "";
    doneContainer.innerHTML = "";
    deleteListBtnDiv.classList.remove("show-delete-list-btn-div");
    showTaskListArr();

}



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
    localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
    toDoText.value = "";
    showTaskArr(currentList.taskArr);
    
    
}

// tilføj tasks til task-array
           
function showTaskArr(array){
        toDoContainer.innerHTML = "";
        doneContainer.innerHTML = "";
        array.forEach(item=>{
           const li = document.createElement("li");
    li.innerHTML = `<div class="task-input-and-checkbox"><input type="checkbox" id="checkbox-${item.id}" ${item.isDone?"checked":""} /><h4>${item.text}</h4></div><p class="star" data-action="sort" data-id="${item.id}">` + (item.star ? '⭐' : '✩') + `</p>`;

    const checkbox = li.querySelector(`#checkbox-${item.id}`);
    const starBtn = li.querySelector(".star");
    
    li.addEventListener("click", (evt) => {
        if(evt.target === checkbox || evt.target === starBtn) return;

        document.querySelectorAll(".todo-container li, .done-container li").forEach(elm => elm.classList.remove("selected"));
        li.classList.add("selected");

        deleteTaskBtnDiv.classList.add("show-delete-task-btn-div");
        deleteTaskBtn.innerHTML = `Delete '${item.text}' 🗑 `;

        deleteTaskBtn.addEventListener("click", function () {
            deleteTaskBtnDiv.classList.add("open");
        });

        btnYes.addEventListener("click", function () {
            deleteTaskBtnDiv.classList.remove("open");
        });

        btnNo.addEventListener("click", function () {
            deleteTaskBtnDiv.classList.remove("open");
        });

        btnYes.onclick = () => {
        const idx = array.findIndex(t => t.id === item.id);
        if (idx > -1) array.splice(idx, 1);
        localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
        showTaskArr(array);
        };
        
    });

// checkbox bliver tikket af
    checkbox.addEventListener("change", () => {
      item.isDone = checkbox.checked;
      localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
      showTaskArr(array);
      console.log("isDone", item.isDone)
    });

    // Tilføj ændring til stjerne element (outline/yellow)
    starBtn.addEventListener("click", () => {
        item.star = !item.star;
        localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
        showTaskArr(array);
    })

    // ryk task til "done-section" hvis checkbox er tikket af, ellers tilføj den til task-listen
    if (item.isDone) doneContainer.appendChild(li);
    else toDoContainer.appendChild(li);
        });
        
    }

// eventlistener på sorterings knap 
    const sortBtn = document.querySelector(".sort-btn");
    sortBtn.addEventListener("click", sortByPriority);

// funktion der sorterer efter om stjerne er outlined eller yellow
    function sortByPriority(){
        if (!currentList) return;
        currentList.taskArr.sort((a, b) => {
            if (a.star === b.star) return 0;
            return a.star ? -1 : 1;
        });
        localStorage.setItem("toDoLists", JSON.stringify(toDoListArr));
        showTaskArr(currentList.taskArr);

    }
    

    showTaskListArr();


    // FUNKTIONER DER MANGLER:
    // 1. advarsler eller animationer:
    // lille animation når man har udført en task

    // Andet:
    // kategorier? med drag and drop funktion