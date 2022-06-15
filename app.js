'use strict';

let banco = [
    {"tarefa": "Comprar pão", "status": ""},
    {"tarefa": "Comprar leite", "status": "checked"}
]

const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const lista = document.getElementById('todoList');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach(item => criarItem(item.tarefa, item.status));

}



