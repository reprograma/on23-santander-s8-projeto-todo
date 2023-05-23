const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');

let tarefaMarcada = document.querySelector('#marcar-todos')
tarefaMarcada.addEventListener ('click', marcarTodos)
function marcarTodos(evento){
    let marcarTodososItens = document.querySelectorAll('li')
    for (let marcacao of marcarTodososItens) {
     marcacao.classList.add('feito')   
    }
}

function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  //evento.target.classList.toggle('feito');
}
let lista = document.querySelector('ul');
const botaoLimpar = document.querySelector("#limpar")
botaoLimpar.addEventListener("click", limpar)

function limpar(){
 lista.innerHTML = ""  
}

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  if (inputTarefa.value.trim()=== "" ){
    alert("digite uma tarefa")
  }else { 
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita)
  
   
    lista.appendChild(itemDaLista);
  
    // apagar valor do input depois de digitar
    inputTarefa.value = '';

  }

}

// evento de submit, acontece quando clicar em um botao tipo submit (no nosso caso só tem um botao então ele é implicitamente do tipo submit) dentro do formulário ou quando der enter dentro de um input
formulario.addEventListener('submit', cadastrarTarefa);
