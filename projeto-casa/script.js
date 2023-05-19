const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let  btnMarcarTodas = document.getElementById('marcar-todos');

btnMarcarTodas.addEventListener('click', marcarToDas);

 let lista = document.querySelector('ul');

function marcarToDas(evento) {

  evento.preventDefault()

  let marcarTodosOsItens = document.querySelectorAll('li')
  console.log(marcarTodosOsItens)
  for (const marcacao of marcarTodosOsItens) {
    marcacao.classList.add('feito')

  }
}
const botaoLimpar = document.querySelector('#limpar')

botaoLimpar.addEventListener('click', limpar)

function limpar () {
 lista.innerHTML = ''
 
}


function marcarTarefaComoFeita(evento) {
  let marcarTarefa = evento.target
  marcarTarefa.classList.toggle('feito');

}


function deletarTarefa (evento) {
  let lista = document.querySelector('ul');
lista.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)


  let botaoDeletar = document.createElement('button');
  botaoDeletar.addEventListener('click', deletarTarefa);
  itemDaLista.appendChild(botaoDeletar);
  
  //let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);

  // apagar valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);


