const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let btnMarcarTodasTarefas = document.getElementById('marcar-todos');

function marcarDesmarcarTodasTarefas() {
  let tarefas = document.querySelectorAll('li');
  for (let tarefa of tarefas) {
    tarefa.classList.toggle('feito');
    if (tarefa.classList.contains('feito')) {
      btnMarcarTodasTarefas.innerHTML = 'Desmarcar todas';
    } else {
      btnMarcarTodasTarefas.innerHTML = 'Marcar todas'
    }
  }
}

btnMarcarTodasTarefas.addEventListener('click', marcarDesmarcarTodasTarefas);

function marcarTarefaComoFeita(evento) {
    let tarefaClicada = evento.target
    tarefaClicada.classList.toggle('feito');
}

function cadastrarTarefa(evento) {
    console.log(evento)
    evento.preventDefault();

    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita)
    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);
}

formulario.addEventListener('submit', cadastrarTarefa);