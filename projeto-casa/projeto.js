const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');

function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  evento.target.classList.toggle('feito');
}

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)

  let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);

  // apagar valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);

let botaoDeletat = document.createElement('button');
botaoDeletar.addEventlister('Click', deletarTarefa);
itemDaLista.appendChild(botaoDeletar);

