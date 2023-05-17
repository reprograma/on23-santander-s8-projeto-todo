const inputTarefa = document.querySelector('form input');
const form = document.querySelector('form');
const ul = document.getElementById('todo-list-container');
const botaoMarcarTodos = document.getElementById('marcar-todos');
const botaoDeletarTodos = document.getElementById('deletar-todos');
const mensagemErro = document.createElement('p');
mensagemErro.classList.add('erro');
inputTarefa.parentElement.appendChild(mensagemErro);

function deletarTodasTarefas() {
  const itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach((li) => {
    li.remove();
  });
}

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function marcarTodasTarefas() {
  const itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach((li) => {
    li.classList.add('checked');
  });

  botaoMarcarTodos.innerText = 'Desmarcar todos';
  botaoMarcarTodos.removeEventListener('click', marcarTodasTarefas);
  botaoMarcarTodos.addEventListener('click', desmarcarTodasTarefas);
}

function desmarcarTodasTarefas() {
  const itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach((li) => {
    li.classList.remove('checked');
  });

  botaoMarcarTodos.innerText = 'Marcar todos';
  botaoMarcarTodos.removeEventListener('click', desmarcarTodasTarefas);
  botaoMarcarTodos.addEventListener('click', marcarTodasTarefas);
}

botaoMarcarTodos.addEventListener('click', marcarTodasTarefas);

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}

function deletarTarefa(evento) {
  evento.target.parentElement.remove();
}

function cadastrarTarefa(evento) {
  evento.preventDefault();

  if (inputTarefa.value.trim() === '') {
    exibirErro('Digite uma tarefa');
  } else {
    ocultarErro();
    const itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    const botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa);

    itemDaLista.addEventListener('click', marcarTarefa);
    ul.appendChild(itemDaLista);
  }
}

function exibirErro(mensagem) {
  mensagemErro.innerText = mensagem;
  mensagemErro.style.display = 'block';
}

function ocultarErro() {
  mensagemErro.innerText = '';
  mensagemErro.style.display = 'none';
}

form.addEventListener('submit', cadastrarTarefa);