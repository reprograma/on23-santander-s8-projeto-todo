let formulario = document.querySelector(" form");
let inputTarefa = document.querySelector("input");
let limpar = document.getElementById('#limpar')

document.getElementById('#marcar-todos').onclick = function() {   // Ainda não acertei - continua 
    let checkBoxes = document.querySelectorAll('ul')
    for (let checkBox of checkBoxes){
        checkBox.checkend = true
    }
}


//FUNÇÃO PARA MARCAR TAREFAS
function marcarTarefaComoFeita(evento) {
    let marcarTarefa = evento.target
    marcarTarefa.classList.toggle('feito');
}

//FUNÇÃO PARA CADASTRAR TAREFAS
function cadastrarTarefa(evento) {
    evento.preventDefault();

    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita);

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista)
    inputTarefa.value = '';
}

formulario.addEventListener('submit', cadastrarTarefa)




//LIMPAR TAREFA
const limparTarefas = () => {
    const itemDaLista = document.querySelector('ul')
    while (itemDaLista.firstChild) { itemDaLista.removeChild(itemDaLista.lastChild) }
}

limpar.addEventListener('click', limparTarefas)