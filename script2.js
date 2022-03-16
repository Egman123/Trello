const all_status = document.querySelectorAll('.status');
const openModalBtn = document.querySelector('.add_btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal .close');
const input = document.querySelector('.modal .body input[type=text]');
const createTodoBtn = document.querySelector('.modal .body input[type=submit]'); 
const main = document.querySelector('.main');

openModalBtn.addEventListener("click", openModalFunc);
closeModalBtn.addEventListener("click", closeModalFunc);
createTodoBtn.addEventListener("click", addTodoFunc);

all_status.forEach((status) => {
   status.addEventListener("dragover", dragoverFunc);
   status.addEventListener("dragenter", dragenterFunc);
   status.addEventListener("dragleave", dragleaveFunc);
   status.addEventListener("drop", dragDropFunc)
})

function openModalFunc(e){
   e.preventDefault();
   input.focus()
   modal.classList.add("active")
}

function closeModalFunc(e) {
   e.preventDefault();

   modal.classList.remove("active")
}

function addTodoFunc(e){
   e.preventDefault()

   if(!input.value.trim()) return
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("draggable", "true")

    let span1 = document.createElement("span");
    span1.innerText = input.value;

    let span2 = document.createElement("span");
    span2.innerHTML = '\u00D7';
    span2.classList.add("close");

    todo.appendChild(span1);
    todo.appendChild(span2);
    all_status[0].appendChild(todo);
    todo.addEventListener("dragstart", dragStartFunc);
    todo.addEventListener("dragend", dragEndFunc);
    
    input.value = "";
    modal.classList.remove("active")
}

function startTodo(e){
  e.preventDefault();
  input.focus()
}


// TODO 

let x = null;

function dragStartFunc(){
  x = this
}


function dragEndFunc(){
  x = null 
}

// Status

function dragoverFunc(e){
   e.preventDefault()
}

function dragenterFunc() {
   this.style.border = "1px dashed #ccc"
}

function dragleaveFunc(){
   this.style.border = "none"
}

function dragDropFunc(){
   this.appendChild(x);
   this.style.border = "none"
}