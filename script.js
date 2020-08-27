const inputText = document.querySelector('#inputText');
const addButton = document.querySelector('#addBtn');
const ul = document.querySelector('ul');

addButton.onclick = () => {
    let newItem = inputText.value;
    inputText.value = '';

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