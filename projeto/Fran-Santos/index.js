let formulario = document.querySelector(" form");
let inputTarefa = document.querySelector("input");
let limpar = document.getElementById('#limpar');
let btnMarcarTodas = document.getElementById('marcar-todos');



//FUNÇÃO MARCAR TODAS
btnMarcarTodas.addEventListener('click', marcarTodas);
function marcarTodas(evento) {

    evento.preventDefault()

    let marcarTodosOsItens = document.querySelectorAll('li')
    console.log(marcarTodosOsItens)
    for (const marcacao of marcarTodosOsItens) {
         marcacao.classList.add('feito')

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