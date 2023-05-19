let formulario = document.querySelector(" form");
let inputTarefa = document.querySelector("input");
let limpar = document.getElementById('#limpar');
let btnMarcarTodas = document.getElementById('marcar-todos');


//EXCLUIR ITEM DA LISTA
function deletarTarefa(evento) {
    let lista = document.querySelector('ul');
    lista.removeChild(evento.target.parentElement);
}


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

    let botaoDeletar = document.createElement('button')
    botaoDeletar.addEventListener('click', deletarTarefa)
    itemDaLista.appendChild(botaoDeletar)

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista)
    inputTarefa.value = '';
}

formulario.addEventListener('submit', cadastrarTarefa)

//LIMPAR TAREFAS
const limparTarefas = () => {
    const itemDaLista = document.querySelector('ul')
    while (itemDaLista.firstChild) { itemDaLista.removeChild(itemDaLista.lastChild) }
}

limpar.addEventListener('click', limparTarefas)