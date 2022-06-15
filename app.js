'use strict';

let banco = [
    {"tarefa": "Comprar pão", "status": ""},
    {"tarefa": "Comprar leite", "status": "checked"}
]

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice=${indice}>
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
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));

}

const inserirItem = (evento) => {
    const tecla = evento.key;
      const tarefa = evento.target.value;
    if(tecla === 'Enter') {
        banco.push({"tarefa": tarefa, "status": ""});
        atualizarTela();
        evento.target.value = '';
    }
}

const removerItem = (indice) => {
    banco.splice(indice, 1);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button') {
       const indice = elemento.dataset.indice;
       removerItem(indice);
    }
}

document.getElementById('newItem').addEventListener('keypress',inserirItem);
document.getElementById('todoList').addEventListener('click',clickItem);
atualizarTela();

