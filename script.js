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
    ul.appendChild(li);
    deleteBtn.addEventListener('click', (e) => {
        console.log(e.target.todoId);
        ul.removeChild(li);
    }) 
}



if (todos){
    todos.forEach((todo) => {
        showItem(todo);
    })
}

addButton.addEventListener('click', () => {
    const newText = inputText.value;
    let todo = { 
        id: new Date().getTime(),
        value: newText
    }
    if(!newText.includes[todos]){
        todos.push(todo);
        localStorage.setItem('allItems', JSON.stringify(todos));
        console.log(`Adding ${newText} to localStorage`);
        console.log(localStorage.getItem('allItems'));
        console.log(todos);
    }
    showItem(todo);
    inputText.value = '';
})




// addButton.onclick = () => {
//     let newItem = inputText.value;
//     inputText.value = '';

//     const itemsFromLocal = JSON.parse(localStorage.getItem('allItems'));
//     if(itemsFromLocal){
//         itemsFromLocal.forEach((todo) => {
//             todos.push(todo);
//         }
//     )};
//     todos.push(newItem);
//     window.localStorage.setItem('allItems', JSON.stringify(todos));

//     const items = document.createElement('li');
//     const item = document.createElement('span');
//     const deleteBtn = document.createElement('button');

//     items.appendChild(item);
//     item.textContent = newItem;
//     item.appendChild(deleteBtn);
//     deleteBtn.textContent = 'Delete it';
//     ul.appendChild(items);

    

//     deleteBtn.onclick = () => {
//         ul.removeChild(items);
//     }

//     inputText.focus();
// }