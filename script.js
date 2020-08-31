const inputText = document.querySelector('#inputText');
const addButton = document.querySelector('#addBtn');
const ul = document.querySelector('ul');

let todos;

if (localStorage.length){
    todos = JSON.parse(localStorage.getItem('allItems'));
}
else {
    todos = [];
}

const showItem = (todo) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    deleteBtn["todoId"] = todo.id;

    li.appendChild(span);
    span.textContent = todo.value;    
    li.appendChild(deleteBtn);
    deleteBtn.textContent = 'Delete it';
    deleteBtn.addEventListener('click', deleteIt);
    ul.appendChild(li); 
}

const deleteIt = (e) => {
    const idTobeRemoved = e.target.todoId;
    todos.forEach((todo) => { 
        if(todo.id === idTobeRemoved) {
            todos.splice(todos.indexOf(todo), 1);
            localStorage.setItem('allItems', JSON.stringify(todos));    
            ul.removeChild(e.target.parentNode);
        }
    });   
};

const showItems = () => {
    if (todos){
        todos.forEach((todo) => {
            showItem(todo);
        })
    }
}

const addItem = () => {
    const newText = inputText.value;
    if (newText != ""){
        let todo = { 
            id: new Date().getTime(),
            value: newText
        }
        todos.push(todo);
        localStorage.setItem('allItems', JSON.stringify(todos));

        showItem(todo);
        inputText.value = '';
    }
};

showItems();
addButton.addEventListener('click', addItem);   

