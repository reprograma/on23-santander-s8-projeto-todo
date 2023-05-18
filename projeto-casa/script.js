const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
const marcarTodas = document.querySelector('#marcar-todos');
let lista = document.querySelector('ul');
const limpar = document.querySelector('#limpar');

//MARCAR TAREFA COMO REALIZADA
function marcarTarefaRealizada(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
}

//MARCA COMO FEITA TODAS AS TAREFAS SIMULTANEAMENTE
function marcarTodasTarefas( ){
  let todosItens = document.querySelectorAll('li');
  for(const marcarTodosItens of todosItens){
    marcarTodosItens.classList.add('feito');
  }   
}

marcarTodas.addEventListener('click', marcarTodasTarefas); 

//LIMPAR TODAS AS TAREFAS SIMULTANEAMENTE - BOTÃO LIMPAR
function limparTarefas (){
  lista.innerHTML = '';
}

limpar.addEventListener('click', limparTarefas);

//CADASTRA TAREFAS
function cadastrarTarefa(evento) {
  // impede que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaRealizada);

  lista.appendChild(itemDaLista);

  // apaga valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);

function insertTrash( ){
    let lixeira = document.createElement('img src="/projeto-casa/trash.png"');
    lixo.appendChild(lixeira);
}





