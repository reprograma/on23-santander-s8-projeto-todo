const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
const marcarTodas = document.querySelector('#marcar-todos');

function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  evento.target.classList.toggle('feito');
}

function marcarTodasTarefas (){
  let todosItens = document.querySelectorAll(li);
  for (const marcarTodosItens of todosItens){
    marcarTodosItens.classList.add('feito');
  }
}
 
function riscarTodas(){
  let riscarTodasTarefas = document.querySelectorAll('li');
  for (const marcacao of riscarTodasTarefas){
    marcacao.classList.toggle('feito');
  }
}

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita);
  marcarTodas.addEventListener('click', marcarTodasTarefas)

  let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);

  // apagar valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);
