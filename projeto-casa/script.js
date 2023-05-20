let formulario = document.querySelector( " form" );
let inputTarefa = document.querySelector("input");
let btnLimpar = document.getElementById('#limpar');
let btnmarcarTodas = document.getElementById('marcar-todas');

btnmarcarTodas.addEventListener('click', marcarTodas);

// Função de marcar as tarefas feitas
function marcarTodas(evento) {
    evento.preventDefault()

    let marcarTodasAsTarefas = document.querySelectorAll('li')
    console.log(marcarTodasAsTarefas)
    for (const selecao of marcarTodas) {
    selecao.classlist.add('concluido')
    }
}

// 

function marcarTarefa(event) {
    event.target.classList.toggle('feito');
  }

  

// função de cadastrar tarefas
function cadastrarTarefa(evento) {
    evento.preventDefault();

    let valorInput = inputTarefa.value;
    let itemdalista = document.createElement('li');
    itemdalista.innerHTML = valorInput;
    itemdalista.addEventListener('click', marcartarefasconcluidas);

    let lista = document.querySelector('ul');
    lista.appendChild(itemdalista);
    inputTarefa.value = '';

    tarefa.addEventListener('click', marcarTarefa);

  inputTarefa.value = '';
}

addEventListener('submit', cadastrarTarefa);


// funçao para marcar as tarefas
function marcartarefasconcluidas(evento) {
    let marcartarefa = evento.target
    marcartarefa.classlist.toggle('feito');
}

////
function marcarDesmarcarTodasTarefas() {
    let tarefas = document.querySelectorAll('li');
    for (let tarefa of tarefas) {
      tarefa.classList.toggle('feito');
      if (tarefa.classList.contains('feito')) {
        btnMarcarTodas.innerHTML = 'Desmarcar todas';
      } else {
        btnMarcarTodas.innerHTML = 'Marcar todas'
      }
    }
  }
  
  btnMarcarTodas.addEventListener('click', marcarDesmarcarTodasTarefas);
  

// function de remover itens da lista

function limparTodasTarefas() {
    let tarefas = document.querySelectorAll('li');
    for (let tarefa of tarefas) {
      tarefa.remove();
    }
  }

  btnLimpar.addEventListener('click', limparTodasTarefas);

//Form de cadastro das tarefas

formulario.addEventListener('submit', cadastrartarefa)