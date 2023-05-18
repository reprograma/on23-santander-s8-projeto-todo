const formulario = document.querySelector('form')
const inputTarefa = document.querySelector('input')

function tarefaFeita(evento) {
    let tarefa = document.querySelector('li')
    let tarefaClicada = evento.target;
    tarefaClicada.classList.toggle('feito');
   
}

function marcarTodas(evento) {
    let marcarTodasTarefas = document.querySelectorAll('li');
    for(const marcarItens of marcarTodasTarefas){
        marcarItens.classList.toggle('feito');
    }
}

marcarTodos.addEventListener('click', marcarTodas)

function cadastrarTarefa(evento) {
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', tarefaFeita)

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);
    inputTarefa.value = '';
}
//criou o parametro evento basicamente pra usar o preventDefault 
//só criamos o intem li da lista porq a lista já foi criada no html

formulario.addEventListener('submit', cadastrarTarefa)


