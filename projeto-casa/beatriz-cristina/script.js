let inputTarefa = document.querySelector('input');
let formCadastro = document.querySelector('form');
let btnMarcarTodasTarefas = document.getElementById('marcar-todos');
let btnLimparTarefas = document.getElementById('limpar');

function marcarTarefa(event) {
  event.target.classList.toggle('feito');
}

function cadastrarTarefa(event) {
  event.preventDefault();
  let tarefa = document.createElement('li');
  tarefa.innerHTML = inputTarefa.value;

  let btnLixeira = document.createElement('button');
  btnLixeira.classList.add('lixeira');

  let imgLixeira = document.createElement('img');
  imgLixeira.src = 'trash.png';
  imgLixeira.classList.add('imgLixeira')

  tarefa.appendChild(btnLixeira);
  btnLixeira.appendChild(imgLixeira);

  let lista = document.querySelector('ul');
  lista.appendChild(tarefa);

  btnLixeira.addEventListener('click', () => {
    tarefa.remove();
  });

  tarefa.addEventListener('click', marcarTarefa);

  inputTarefa.value = '';
}

addEventListener('submit', cadastrarTarefa);

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

function limparTodasTarefas() {
  let tarefas = document.querySelectorAll('li');
  for (let tarefa of tarefas) {
    tarefa.remove();
  }
}

btnLimparTarefas.addEventListener('click', limparTodasTarefas);