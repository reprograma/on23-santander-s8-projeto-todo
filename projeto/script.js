let fomulario = document.querySelector('form');
let inputTarefa = document.querySelector('input');
let selectAll = document.querySelector('#select-all');

function marcarTarefaComoFeita(evento) {
    let tarefaClicada = evento.target;
    tarefaClicada.classList.toggle('feito');
};

function selectAllItems () {
    let allItems = document.querySelectorAll('li');
    for (let item of allItems) {
    item.classList.add('feito');
    }
};

function cadastrarTarefa(evento) {
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let li = document.createElement('li');
    li.innerHTML = valorInput;
    li.addEventListener('click', marcarTarefaComoFeita);
    selectAll.addEventListener('click', selectAllItems);

    let ul = document.querySelector('ul');
    ul.appendChild(li);

    inputTarefa.value = '';
};

fomulario.addEventListener('submit', cadastrarTarefa);