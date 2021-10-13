// Select DOM
const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
const addButton = document.querySelector('#add');
const input = document.querySelector('#item');

//Event Listeners
addButton.addEventListener('click',addTodo);
document.addEventListener("DOMContentLoaded", renderList);


//Functions
function addTodo(e){
    e.preventDefault();
    const todo = input.value;
    input.value = '';
    todos.push({
        id: Date.now() + todo,
        todo: todo,
        isCompleted: false,
        isDeleted: false,
    });
    renderList();
}

function renderList(){
    const todoList = document.getElementById('todo');
    const completedList = document.getElementById('completed');
    todoList.innerHTML = '';
    completedList.innerHTML = '';
    todos.forEach((todo) => {
        const list = document.createElement('li');
        list.innerText = todo.todo;
        saveLocalTodos(list);
        list.setAttribute('id', todo.id);
        list.classList.add('flex', 'justify-between','bg-secondary','rounded-xl','px-4','py-1','mb-1' , 'text-primary');
      
        let buttons = document.createElement('div');
        buttons.classList.add('buttons','inline');

        let remove = document.createElement('button');
        remove.classList.add('remove','fa','fa-trash','p-2');
        remove.addEventListener("click", removeItem);

        let complete = document.createElement('button');
        complete.classList.add('complete','fa','fa-check');
        complete.addEventListener("click", completeItem);

        let recycle = document.createElement('button');
        recycle.classList.add('recycle','fa','fa-recycle');
        recycle.addEventListener('click',recycleItem);
        
        /************ * append *******************/
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        list.appendChild(buttons);

        if (todo.isCompleted) {
                completedList.appendChild(list);
                list.classList.toggle('line-through');
                buttons.removeChild(complete);
                buttons.appendChild(recycle);
                
              }else {
                todoList.appendChild(list);
              }
    });//End of forEach
}

function completeItem(e){
    let item = this.parentNode.parentNode;
    const currentId = item.getAttribute('id');
    const todo = todos.find((item) => item.id === currentId);
    todo.isCompleted = true;
    renderList();
}

function recycleItem(){
    let item = this.parentNode.parentNode;
    const currentId = item.getAttribute('id');
    const todo = todos.find((item) => item.id === currentId);
    todo.isCompleted = false;
    renderList();
}

function removeItem(){
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    const currentId = item.getAttribute('id');
    const todo = todos.find((item) => item.id === currentId);
    todo.isDeleted = true;
    parent.removeChild(item);
    todos.splice(currentId,1);
    
    renderList();
}

function saveLocalTodos(){
    const savedItems = [];
    todos.forEach((todo) => {
        if( !todo.isDeleted){
            savedItems.push(todo);
        }
    });

   localStorage.setItem('todos', JSON.stringify(savedItems));

}
