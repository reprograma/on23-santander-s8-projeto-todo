const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');

function marcarTarefaComoFeita(evento) {
    let tarefaClicada = evento.target
    tarefaClicada.classList.toggle('feito');
}

function cadastrarTarefa(evento) {
    console.log(evento)
    evento.preventDefault();

    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita)
    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);
}

formulario.addEventListener('submit', cadastrarTarefa);