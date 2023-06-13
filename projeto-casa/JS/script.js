const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
const listaTarefas = document.querySelector('ul'); // criei uma variável para acessar a lista. 
const btnMarcarTodos = document.getElementById('marcar-todos'); // criei uma variável para acessar o botão de marcar todos.
const btnLimpar = document.getElementById('limpar');  // criei uma variável para acessar o botão de limpar.
const lista = document.querySelector('ul');

function deletarTarefa (evento) {
  lista.removeChild(evento.target.parentElement)
}

function cadastrarTarefa(evento) {
    evento.preventDefault(); // impedir que o formulário recarregue a página. 
    let itemDaLista = document.createElement('li');
    let valorInput = inputTarefa.value;
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita);

    let botaoDeletar = document.createElement('button');
    botaoDeletar.addEventListener('click', deletarTarefa);
    itemDaLista.appendChild(botaoDeletar);

    lista.appendChild(itemDaLista);
    inputTarefa.value = '';

}

formulario.addEventListener('submit', cadastrarTarefa);

function marcarTarefaComoFeita(evento) { 
    let tarefaClicada = evento.target;
    tarefaClicada.classList.toggle('feito');
}

function marcarTodos() { // criei uma função.
  let tarefas = listaTarefas.querySelectorAll('li'); // criei uma variável e como parametro puxei a do escopo global, e usando o DOM para acessar a lista.
  tarefas.forEach((tarefa) => { // usei o método array com uma função de callback anonima.
    tarefa.classList.toggle('feito'); // chamei a função do callback e usei o dom interruptor para add ou remover uma classe da lista.
  });
}

btnMarcarTodos.addEventListener('click', marcarTodos); // executei os códigos com o fofoqueiro e dei o evento para a função. 

function limparTarefas() { // criei uma função.
    listaTarefas.innerHTML = ''; // chamei a variável do escopo global e usei o dom atribuindo uma string vazia.
  } 

btnLimpar.addEventListener('click', limparTarefas); // executei os códigos com o fofoqueiro e dei o evento para a função. 