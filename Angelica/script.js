const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let lista = document.querySelector('ul');
const botaoMarcarTodos = document.querySelector("#marcar-todos")
botaoMarcarTodos.addEventListener("click", marcarTodos)

function marcarTodos (){
  const todaAsTarefas = document.querySelectorAll("li")
  for (const tarefa of todaAsTarefas) {
    tarefa.classList.toggle("feito");
    
  }
}

const botaoLimpar = document.querySelector('#limpar')
botaoLimpar.addEventListener("click", limpar)

function limpar (){
  lista.innerHTML = ""
}


// function deletarTarefa(evento){
//   lista.removeChild(evento.target.parentElement)

// }

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)

  /*let botaoDeletarTarefa = document.createElement('button');
  botaoDeletarTarefa.addEventListener('click', deletarTarefa);
  itemDaLista.appendChild(botaoDeletarTarefa);*/
  
  lista.appendChild(itemDaLista);

  // apagar valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);

function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // // poderia ser direto assim também
  // evento.target.classList.toggle('feito');
}

function apagarTarefa (evento){
  let tarefaAapagar = evento.target;
  tarefaAapagar.classList.target();

}



