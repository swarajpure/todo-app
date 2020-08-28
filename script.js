const inputText = document.querySelector('#inputText');
const addButton = document.querySelector('#addBtn');
const ul = document.querySelector('ul');
const itemsObj = { todos: [] };

if (localStorage.length){
    const itemsFromLocal = JSON.parse(localStorage.getItem('allItems'));
        if(itemsFromLocal.length){
            itemsFromLocal.forEach((todo) => {
                let items = document.createElement('li');
                let itemSpan = document.createElement('span');
                let deleteBtn = document.createElement('button');
                items.appendChild(itemSpan);
                itemSpan.textContent = todo;
                itemSpan.appendChild(deleteBtn);
                deleteBtn.textContent = 'Delete it';
                ul.appendChild(items);
            })
        }
}

addButton.onclick = () => {
    let newItem = inputText.value;
    inputText.value = '';

    const itemsFromLocal = JSON.parse(localStorage.getItem('allItems'));
    if(itemsFromLocal){
        itemsFromLocal.forEach((todo) => {
            itemsObj.todos.push(todo);
        }
    )};
    itemsObj.todos.push(newItem);
    window.localStorage.setItem('allItems', JSON.stringify(itemsObj.todos));

    const items = document.createElement('li');
    const item = document.createElement('span');
    const deleteBtn = document.createElement('button');

    items.appendChild(item);
    item.textContent = newItem;
    item.appendChild(deleteBtn);
    deleteBtn.textContent = 'Delete it';
    ul.appendChild(items);

    

    deleteBtn.onclick = () => {
        ul.removeChild(items);
    }

    inputText.focus();
}