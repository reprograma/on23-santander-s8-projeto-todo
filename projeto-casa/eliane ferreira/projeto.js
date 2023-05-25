const formulario = document.querySelector ('form');
const inputTarefa = document.querySelector ('input');
let lista = document.querySelector('ul');

let tarefaMarcada = document.querySelector('#marcar-todos')
tarefaMarcada.addEventListener('click', marcarTodos)


function marcarTodos(evento){
    let marcarTodasTarefas = document.querySelectorAll('li')
    for (let marcar of marcarTodasTarefas){
        marcar.classList.add('feito');
    }
}

let limparTarefa = document.querySelector('#limpar')
limparTarefa.addEventListener('click', limpar)

function limpar(evento){
  lista.innerHTML = ''   
    
}



function marcarTarefaComoFeita(evento){
    let tarefaClicada = evento.target;
    tarefaClicada.classList.toggle('feito');
//evento.target.classList.toogle('feito'); outra maneira de fazer
}


function cadastrarTarefa(evento) {
   evento.preventDefault();
   let valorInput = inputTarefa.value;
   let itemDaLista = document.createElement('li');
   itemDaLista.innerHTML = valorInput;
   itemDaLista.addEventListener('click', marcarTarefaComoFeita)

lista.appendChild(itemDaLista);

}
formulario.addEventListener('submit', cadastrarTarefa);