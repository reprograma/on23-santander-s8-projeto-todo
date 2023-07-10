const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
const listaTarefas = document.querySelector('ul');
const btnMarcarTodos = document.getElementById('marcar-todos');
const btnLimpar = document.getElementById('limpar');
const lista = document.querySelector('ul');


function cadastrarTarefa(evento) {
  evento.preventDefault();
  const itemDaLista = document.createElement('li');
  const valorInput = inputTarefa.value;
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita);

  const botaoDeletar = document.createElement('button');
  botaoDeletar.addEventListener('click', deletarTarefa);
  itemDaLista.appendChild(botaoDeletar);

  lista.appendChild(itemDaLista);
  inputTarefa.value = '';

}

formulario.addEventListener('submit', cadastrarTarefa);

function marcarTarefaComoFeita(evento) {
  const tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
}

function deletarTarefa(evento) {
  lista.removeChild(evento.target.parentElement)
}

function marcarTodos() {
  const tarefas = listaTarefas.querySelectorAll('li');
  tarefas.forEach((tarefa) => {
    tarefa.classList.toggle('feito');
  });
}

btnMarcarTodos.addEventListener('click', marcarTodos);

function limparTarefas() {
  listaTarefas.innerHTML = '';
}

btnLimpar.addEventListener('click', limparTarefas); 