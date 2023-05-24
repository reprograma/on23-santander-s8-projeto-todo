const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let marcarAll = document.querySelector('#marcar-todos'); 
let lista = document.querySelector('ul');


marcarAll.addEventListener('click', marcarTodas)
function marcarTodas (evento){
  evento.preventDefault();
  let marcarTodosItens = document.querySelectorAll('li')
  console.log(marcarTodosItens)
   for (let marcacao of marcarTodosItens){
  marcacao.classList.add('feito')
  
}
}

const botaoLimpar = document.querySelector('#limpar')
botaoLimpar.addEventListener('click', limpar)

function limpar (){
  lista.innerHTML = ""
}


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

 // const searchTerm = document.querySelector('input')
  //if (searchTerm = ""){
   // alert("Digite algo")
   // }


  //let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);

  // apagar valor do input depois de digitar
  inputTarefa.value = '';
}

// evento de submit, acontece quando clicar em um botao tipo submit
// (no nosso caso só tem um botao então ele é implicitamente do tipo submit) 
//dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);
  


