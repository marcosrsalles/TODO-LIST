'use strict';


const criarItem = (texto, status='') => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${texto}</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}