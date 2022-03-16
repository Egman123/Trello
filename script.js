const all_status = document.querySelectorAll('.status');
const openModalBtn = document.querySelector('.add_btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal .close');
const input = document.querySelector('.modal .body input[type=text]');
const createTodoBtn = document.querySelector('.modal .body input[type=submit]'); 
const main = document.querySelector('.main');

openModalBtn.addEventListener('click', openModalFunc);
closeModalBtn.addEventListener('click', closeModalFunc);
createTodoBtn.addEventListener('click', createTodoFunc);
main.addEventListener('click', checkMainFunc);


all_status.forEach((status)=>{
    status.addEventListener('dragover', dragoverFunc);
    status.addEventListener('dragenter', dragenterFunc);
    status.addEventListener('dragleave', dragleaveFunc);
    status.addEventListener('drop', dragDropFunc );
});


function openModalFunc(){
    modal.classList.add('active');
    input.focus();
}

function closeModalFunc(){
    modal.classList.remove('active');
}

function createTodoFunc(e){
    e.preventDefault();
    if(!input.value.trim()) return;

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.setAttribute('draggable', 'true');

    const span1 = document.createElement('span');
    span1.innerText = input.value;

    const span2 = document.createElement('span');
    span2.classList.add('close');
    span2.innerText = '\u00D7';

    todoDiv.appendChild(span1);
    todoDiv.appendChild(span2);
    all_status[0].appendChild(todoDiv);
    todoDiv.setAttribute("draggable", true);
    

    todoDiv.addEventListener("dragstart", dragStartFunc)
    todoDiv.addEventListener("dragend", dragEndFunc)

   
    input.value = '';
    modal.classList.remove('active');
}

function checkMainFunc(e){

    if(e.target.classList[0] == 'close'){
        e.target.parentElement.remove();
    }

}


// TODO
let x = null;

function dragStartFunc(){
    x = this;
}

function dragEndFunc(){
   x = null; 
}


// STATUS
function dragoverFunc(e){
   e.preventDefault();
}

function dragenterFunc(){
  this.style.border = "1px dashed #ccc";
}

function dragleaveFunc(){
    this.style.border = 'none';
}

function dragDropFunc(){
  this.appendChild(x);
  this.style.border = 'none';
}






