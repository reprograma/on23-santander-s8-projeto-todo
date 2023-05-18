const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');

let lista = document.querySelector('ul');

const botaoDeLimpar = document.querySelector('#limpar');
botaoDeLimpar.addEventListener('click', LimparBotao)

function LimparBotao() {
  lista.innerHTML = ""
}

let TarefaFeita = document.querySelector('#marcar-todos')
TarefaFeita.addEventListener('click', marcarTodos)

function marcarTodos(evento) {
  const TarefaRealizada = document.querySelectorAll('li')
  for (const concluido of TarefaRealizada) {
    concluido.classList.add('feito')
  }
}

function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  //evento.target.classList.toggle('feito');
}

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)

  lista.appendChild(itemDaLista);

  // apagar valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é 
//implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);