let formulario = document.querySelector(" form");
let inputTarefa = document.querySelector("input");

//FUNÇÃO PARA MARCAR TAREFAS
function marcarTarefaComoFeita(evento) {
    let marcarTodas = evento.target
    marcarTodas.classList.toggle('feito');
}

//FUNÇÃO PARA CADASTRAR TAREFAS
function cadastrarTarefa(evento) {
    evento.preventDefault();

 let valorInput = inputTarefa.value;
 let itemDaLista = document.createElement('li');
 itemDaLista.innerHTML = valorInput; 
 itemDaLista.addEventListener('click',marcarTarefaComoFeita);

 let lista = document.querySelector('ul');
 lista.appendChild(itemDaLista)
 inputTarefa.value = '';
}

formulario.addEventListener('submit', cadastrarTarefa)