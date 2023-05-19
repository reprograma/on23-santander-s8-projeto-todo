const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
const btMarcarTodos = document.getElementById('marcarTodos');

let ul = document.querySelector('ul');

let btLimpar = document.getElementById('limpar')

function marcarTarefaComoFeita(evento) {
  evento.preventDefault()
  //let tarefaClicada = evento.target;
  //tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  evento.target.classList.toggle('feito');
}

function marcarTodasTarefas(e) {
  e.preventDefault()
  ul.classList.toggle('feito')


}

function limparTarefas(e){
  let elementoFilho = document.querySelector("ul li")
  const div = document.querySelector(".container");
  ul.innerHTML = "";
 //ul.removeChild(elementoFilho) > Remove apenas um elemento por vez
}

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)
  ul.appendChild(itemDaLista);
  // apagar valor do input depois de digitar
  inputTarefa.value = '';

}



// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);

btMarcarTodos.addEventListener('click', marcarTodasTarefas);

btLimpar.addEventListener('click', limparTarefas)




//btMarcarTodos.addEventListener('click', marcarTarefaComoFeita)


