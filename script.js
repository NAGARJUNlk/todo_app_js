const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const inputText = document.getElementById("todo-input");
const countTodo = document.getElementById("task-count");
const filterAll = document.querySelectorAll("[data-filter]");

filterAll.forEach(buttons => {

    buttons.addEventListener("click", () => {

        filterAll.forEach(button => {
            button.classList.remove("active");
        });

        buttons.classList.add("active");

        const filter = buttons.dataset.filter;
        const todos = todoList.querySelectorAll(".todo-item");

        todos.forEach(todo => {

            if (filter === "completed") {

                if (todo.classList.contains("completed")) {
                    todo.style.display = "";
                } else {
                    todo.style.display = "none";
                }

            } else if (filter === "active") {

                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "";
                }

            } else {

                todo.style.display = "";
            }

        });
    });
});

function handleTaskName(){
    if(todoList.childElementCount === 1){
            countTodo.textContent = todoList.childElementCount + " " + "task";
    }else{ 
            countTodo.textContent = todoList.childElementCount + " " + "tasks";
    }
}

function handleAddToList(){
    if(inputText.value.trim() !== ""){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("button");

    span.textContent = inputText.value;
    button.textContent = "Delete";

    li.classList.add("todo-item");

    div.appendChild(span);
    div.appendChild(button);

    li.appendChild(div);
    
    todoList.appendChild(li); 

    console.log(todoList.childElementCount);

    button.addEventListener("click",()=>{
        button.parentElement.parentElement.remove();
        handleTaskName();
    });

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
}else{
    return;
}
}

function clearInput(){
    inputText.value="";
}

addBtn.addEventListener("click",()=>{
    handleAddToList();
    clearInput();
    handleTaskName();
});