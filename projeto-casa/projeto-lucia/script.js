let formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let botaoMarcarTodos = document.getElementById('marcar-todos');
let lista = document.querySelector('ul');



function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  evento.target.classList.toggle('feito');
}


function marcarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    if (li.classList.contains('checked')) {
      li.classList.remove('checked');
    } else {
      li.classList.add('checked');
    }
  });

  // Verificar se todos os itens estão marcados para 
  let todosMarcados = [...itensDaListaDeTarefas].every(function containsCheckedClass(li) {
    return li.classList.contains('checked');
  });

  // Atualizar o texto do botão com base no estado atual
  if (todosMarcados) {
    botaoMarcarTodos.textContent = 'Desmarcar Todos';
  } else {
    botaoMarcarTodos.textContent = 'Marcar Todos';
  }


}

// Adicionar o evento de clique ao botão
botaoMarcarTodos.addEventListener('click', marcarTodasTarefas);

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}

function deletarTarefa(evento) {
  lista.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)

  let imgDelete = document.createElement('img');
  imgDelete.src = 'img/trash.png';
  imgDelete.classList.add('delete-img')
  imgDelete.addEventListener('click', deletarTarefa);
  itemDaLista.appendChild(imgDelete)

  lista.appendChild(itemDaLista);
  inputTarefa.value = '';


}

formulario.addEventListener('submit', cadastrarTarefa);


let botaoLimparTodos = document.getElementById('limpar');
botaoLimparTodos.addEventListener('click', limparTodos);

function limparTodos() {
  let lista = document.querySelector('ul');
  lista.innerHTML = '';
}

formulario.appendChild(botaoLimparTodos);


