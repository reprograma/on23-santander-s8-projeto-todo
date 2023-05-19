const formulario = document.querySelector('form')
const inputTarefa = document.querySelector('input')
const marcarTodos = document.getElementById('marcar-todos');

function marcarTarefaFeita(evento){
    let tarefaClicada = evento.target;
    tarefaClicada.classList.toggle('feito');
}

//marcar todos como feito, botão marcar todos

function marcarTarefaFeita(){
    const lista = document.querySelector('ul');
    const itensLista = lista.querySelectorAll('li');

    itensLista.forEach((item) =>{
        item.classList.add('feito');
    });
}

marcarTodos.addEventListener('click', marcarTarefaFeita);

function cadastrarTarefa(evento) {
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li')
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaFeita)

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);

    inputTarefa.value = '';
}

formulario.addEventListener('submit', cadastrarTarefa)

